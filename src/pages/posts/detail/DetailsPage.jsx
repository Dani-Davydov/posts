import { useParams } from "react-router-dom";
import {Link} from "../../../components/Link/Link.jsx";
import {useEffect} from "react";
import {Typo} from "../../../components/Typo/Typo.jsx";
import {Container} from "../../../components/Container/index.jsx";
import * as SC from "./styles.js"
import {LinkWrapper} from "./styles.js";
import {useDispatch, useSelector} from "react-redux";
import {getPosts} from "../../../redux/slices/postsSlice.js";

export  const DetailPostPage = () => {
    const { id } = useParams();
    const currentPost = useSelector((state) => state.posts.postForView);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts(Number(id)))
    }, [id])

    if (!currentPost) {
        return <>Пост не найден</>;
    }

    return (
        <Container>
            <Typo>{currentPost.title}</Typo>
            <br/>
            <SC.Image src={currentPost.image} alt={currentPost.title}></SC.Image>
            <SC.Text>{currentPost.text}</SC.Text>
            <div style={{ clear: 'both' }}></div>
            <LinkWrapper>
                <Link to={'/posts'}>Обратно на страницу постов</Link>
            </LinkWrapper>
        </Container>
    )
}