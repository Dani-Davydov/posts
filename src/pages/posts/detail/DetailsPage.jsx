import { useParams, useNavigate } from "react-router-dom";
import {Link} from "../../../components/UI/Link/Link.jsx";
import {useEffect, useState, useRef} from "react";
import {Typo} from "../../../components/UI/Typo/Typo.jsx";
import {Container} from "../../../components/UI/Container/index.jsx";
import * as SC from "./styles.js"
import { LinkWrapper } from "./styles.js";
import {useDispatch, useSelector} from "react-redux";
import {getPostbyId, showPost, deletePost, updateFiltersParametrs} from "../../../redux/slices/postsSlice.js";
import {Modal} from "../../../components/UI/Modal/Modal.jsx";
import {ModalBtn} from "../../../components/UI/MadalBtn/ModalBtn.jsx";
import {Loader} from "../../../components/UI/Loader/Loader.jsx";

export  const DetailPostPage = () => {
    const { id } = useParams();

    const navigate = useNavigate();

    const deletedPostsRef = useRef([]);

    const { list } = useSelector((state) => state.posts.posts);
    const postForView = useSelector((state) => state.posts.postForView);
    const { user } = useSelector((state) => state.auth);

    const dispatch = useDispatch();

    const [postForDelete, setPostForDelete] = useState(null);

    const showEditAndDeleteBtn = list && user

    const ResetFilters = () => {
        dispatch(updateFiltersParametrs({
            paginationInfo: {
                ActivePage: 0,
                pageCount: 0,
                perPage: 10
            },
            searchValue: "",
            sort: "",
        }))
    }

    const onDeletePost = (id) => {
        deletedPostsRef.current.push(id);
        dispatch(deletePost(id))
        dispatch(showPost(null))
        ResetFilters()
        setPostForDelete(null);
        navigate(`/posts`);
    }

    useEffect(() => {
        const intId = Number(id);
        const findetPost = list ? list.find((item) => item.id === intId) : undefined;

        if (deletedPostsRef.current.includes(intId)) {
            return;
        }

        if (findetPost) {
            dispatch(showPost(findetPost))
        } else {
            console.log('adasdasdasd')
            dispatch(getPostbyId(intId))
        }
    }, [id, dispatch, list]);

    if (postForView.loading) {
        return <Loader/>
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
                <Modal title={`Вы точно уверены, что хотите удалить пост с ID - ${postForDelete.id} ?`}>
                    <ModalBtn title={"Да"} color={"#ff2e2e"} onClick={() => onDeletePost(postForDelete.id)}/>
                    <ModalBtn title={"Нет"} color={"#46a609"} onClick={() => setPostForDelete(null)}/>
                </Modal>
            }
            <Typo>{post.title}</Typo>
            <SC.Image src={image} alt={post.title}></SC.Image>
            <SC.Text>{post.body}</SC.Text>
            <div style={{ clear: 'both' }}></div>
            <LinkWrapper>
                <Link to={'/posts'} onClick={ResetFilters}>Обратно на страницу постов</Link>
                {showEditAndDeleteBtn && <Link to={`/posts/${id}/edit`}>Редактировать пост</Link>}
                {showEditAndDeleteBtn && <ModalBtn title={"Удалить пост"} color={"#ff2e2e"} onClick={() => setPostForDelete(post)}/>}
            </LinkWrapper>
        </Container>
    )
}