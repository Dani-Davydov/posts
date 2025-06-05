import { useParams, useNavigate } from "react-router-dom";
import {Link} from "../../../components/UI/Link/Link.jsx";
import {useEffect, useState} from "react";
import {Typo} from "../../../components/UI/Typo/Typo.jsx";
import {Container} from "../../../components/UI/Container/index.jsx";
import * as SC from "./styles.js"
import { LinkWrapper } from "./styles.js";
import {useDispatch, useSelector} from "react-redux";
import {getPostbyId, showPost, deletePost} from "../../../redux/slices/postsSlice.js";

export  const DetailPostPage = () => {
    const { id } = useParams();

    const navigate = useNavigate();

    const { list } = useSelector((state) => state.posts.posts);
    const postForView = useSelector((state) => state.posts.postForView);

    const dispatch = useDispatch();

    const [postForDelete, setPostForDelete] = useState(null);

    const onDeletePost = (id) => {
        dispatch(deletePost(id))
        setPostForDelete(null);
        return  navigate(`/posts`);
    }

    useEffect(() => {
        const intId = Number(id);
        const findetPost = list ? list.find((item) => item.id === intId) : undefined;

        if (findetPost) {
            dispatch(showPost(findetPost))
        } else {
            dispatch(getPostbyId(intId))
        }
    }, [id, dispatch, list]);

    if (postForView.loading) {
        return <Container>Loading...</Container>
    }

    if (!postForView.post || !Object.prototype.hasOwnProperty.call(postForView.post, 'id')) {
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
            {postForDelete &&
                <SC.ModalWrapper>
                    <SC.Modal>
                        <SC.ModalText>Вы точно уверены, что хотите удалить пост с ID - {postForDelete.id} ?</SC.ModalText>
                        <SC.ModalContent>
                            <SC.DeleteButton onClick={() => onDeletePost(postForDelete.id)}>Да</SC.DeleteButton>
                            <SC.CancellBtn onClick={() => setPostForDelete(null)}>Нет</SC.CancellBtn>
                        </SC.ModalContent>
                    </SC.Modal>
                </SC.ModalWrapper>
            }
            <Typo>{post.title}</Typo>
            <SC.Image src={image} alt={post.title}></SC.Image>
            <SC.Text>{post.body}</SC.Text>
            <div style={{ clear: 'both' }}></div>
            <LinkWrapper>
                <Link to={'/posts'}>Обратно на страницу постов</Link>
                {list && <Link to={`/posts/${id}/edit`}>Редактировать пост</Link>}
                {list && <SC.DeleteButton onClick={() => setPostForDelete(post)}>Удалить пост</SC.DeleteButton>}
            </LinkWrapper>
        </Container>
    )
}