import { Posts } from "../../components/Posts/Posts.jsx";
import { Container } from "../../components/UI/Container/index.jsx";
import {Typo} from "../../components/UI/Typo/Typo.jsx";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getFreshPostsFromBackend, getTopPosts} from "../../redux/slices/postsSlice.js";
import {Loader} from "../../components/UI/Loader/Loader.jsx";


export const MainPostPage = () => {
    const dispatch = useDispatch();

    const postForView = useSelector((state) => state.posts.postForView);
    const freshPosts = useSelector((state) => state.posts.freshPosts);
    const {list} = useSelector((state) => state.posts.posts);
    const {topPosts} = useSelector((state) => state.posts.topPosts);

    const { posts, loading } = freshPosts;
    const { post } = postForView
    console.log(post);

    useEffect(() => {
        if (!posts) {
            dispatch(getFreshPostsFromBackend());
        }
    }, [dispatch, posts]);

    useEffect(() => {
        if (list) {
            dispatch(getTopPosts());
        }
    }, [list, dispatch]);

    if (!posts && loading) {
        return <Loader/>
    }

    if (Array.isArray(posts) && !posts.length) {
        return <Container>Постов нет</Container>
    }

    if (!posts) {
        return <>404</>
    }

    return (
        <>
            <Container>
                {loading && <Loader/>}
                {posts &&
                <>
                    <Typo>Свежие публикации</Typo>
                    <Posts posts={topPosts ? topPosts : posts} />
                </>
                }
                { post &&
                    <>
                        <Typo>Последние просмотренный пост</Typo>
                        <Posts posts={[post]} />
                    </>
                }
            </Container>
        </>
    )
}