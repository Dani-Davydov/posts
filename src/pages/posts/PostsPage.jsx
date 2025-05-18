import {Container} from "../../components/Container/index.jsx";
import {Posts} from "../../components/Posts/Posts.jsx";
import {Typo} from "../../components/Typo/Typo.jsx";

const initialPosts = [
    {
        id: 1,
        title: 'asdasdasd',
        image: 'https://img.freepik.com/free-photo/beautiful-endangered-red-panda-green-tree_475641-1326.jpg?semt=ais_hybrid&w=740'
    },
    {
        id: 2,
        title: 'hahahhahahha',
        image: 'https://img.freepik.com/free-photo/beautiful-endangered-red-panda-green-tree_475641-1326.jpg?semt=ais_hybrid&w=740'
    },
    {
        id: 3,
        title: 'klgfdckgfck.gck.gfck.gc',
        image: 'https://img.freepik.com/free-photo/beautiful-endangered-red-panda-green-tree_475641-1326.jpg?semt=ais_hybrid&w=740'
    }
]

export  const PostsPage = () => {
    return (
        <div>
            <Container>
                <Typo>Публикации</Typo>
                <Posts posts={initialPosts} />
            </Container>
        </div>
    )
}