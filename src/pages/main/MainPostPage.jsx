import { Posts } from "../../components/Posts/Posts.jsx";
import { Container } from "../../components/Container/index.jsx";
import {Typo} from "../../components/Typo/Typo.jsx";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getFreshPosts} from "../../redux/slices/postsSlice.js";

export const MainPostPage = () => {
    const dispatch = useDispatch();

    const postForView = useSelector((state) => state.posts.postForView);
    const freshPosts = useSelector((state) => state.posts.freshPosts);

    useEffect(() => {
        dispatch(getFreshPosts());
    }, [])

    return (
        <>
            <Container>
                {freshPosts &&
                <>
                    <Typo>Свежие публикации</Typo>
                    <Posts posts={freshPosts} />
                </>
                }
                { postForView &&
                    <>
                        <Typo>Последние просмотренный пост</Typo>
                        <Posts posts={[postForView]} />
                    </>
                }

            </Container>
        </>
    )
}