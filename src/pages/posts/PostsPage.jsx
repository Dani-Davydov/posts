import {Container} from "../../components/Container/index.jsx";
import {Posts} from "../../components/Posts/Posts.jsx";
import {Typo} from "../../components/Typo/Typo.jsx";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getPosts} from "../../redux/slices/postsSlice.js";

export  const PostsPage = () => {
    const {list, loading} = useSelector((state) => state.posts.posts);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!list) {
            dispatch(getPosts());
        }
    }, [list, dispatch]);

    if (!list && loading) {
        return <Container>Loading...</Container>
    }

    if (Array.isArray(list) && !list.length) {
        return <Container>Постов нет</Container>
    }

    if (!list) {
        return <>404</>
    }

    return (
            <Container>
                <Typo>Публикации</Typo>
                <Posts posts={list} />
            </Container>
    )
}