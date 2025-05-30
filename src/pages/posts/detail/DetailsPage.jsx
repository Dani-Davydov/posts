import { useParams } from "react-router-dom";
import {Link} from "../../../components/Link/Link.jsx";
import {useEffect} from "react";
import {Typo} from "../../../components/Typo/Typo.jsx";
import {Container} from "../../../components/Container/index.jsx";
import * as SC from "./styles.js"
import {LinkWrapper} from "./styles.js";
import {useDispatch, useSelector} from "react-redux";
import {getPostbyId} from "../../../redux/slices/postsSlice.js";

export  const DetailPostPage = () => {
    const { id } = useParams();
    const postForView = useSelector((state) => state.posts.postForView);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPostbyId(Number(id)))
    }, [id])

    if (postForView.loading) {
        return <Container>Loading...</Container>
    }

    if (!postForView.post || !postForView.post.hasOwnProperty('id')) {
        return(
            <>
                <>Пост не найден</>
                <LinkWrapper>
                    <Link to={'/posts'}>Обратно на страницу постов</Link>
                </LinkWrapper>
            </>
        )
    }

    const { post } = postForView;

    const image = post.image || 'https://img.freepik.com/free-photo/beautiful-endangered-red-panda-green-tree_475641-1326.jpg?semt=ais_hybrid&w=740'

    return (
        <Container>
            <Typo>{post.title}</Typo>
            <br/>
            <SC.Image src={image} alt={post.title}></SC.Image>
            <SC.Text>{post.body}</SC.Text>
            <div style={{ clear: 'both' }}></div>
            <LinkWrapper>
                <Link to={'/posts'}>Обратно на страницу постов</Link>
            </LinkWrapper>
        </Container>
    )
}