import {Container} from "../../components/Container/index.jsx";
import {Posts} from "../../components/Posts/Posts.jsx";
import {Typo} from "../../components/Typo/Typo.jsx";
import {useSelector} from "react-redux";

export  const PostsPage = () => {
    const posts = useSelector((state) => state.posts.list);

    return (
            <Container>
                <Typo>Публикации</Typo>
                <Posts posts={posts} />
            </Container>
    )
}