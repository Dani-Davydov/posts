import {Container} from "../../components/Container/index.jsx";
import {Posts} from "../../components/Posts/Posts.jsx";
import {Typo} from "../../components/Typo/Typo.jsx";

export const initialPosts = [
    {
        id: 1,
        title: 'asdasdasd',
        image: 'https://img.freepik.com/free-photo/beautiful-endangered-red-panda-green-tree_475641-1326.jpg?semt=ais_hybrid&w=740',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A culpa distinctio earum facere ipsum nobis quaerat quis ratione, voluptas voluptate!'
    },
    {
        id: 2,
        title: 'hahahhahahha',
        image: 'https://img.freepik.com/free-photo/beautiful-endangered-red-panda-green-tree_475641-1326.jpg?semt=ais_hybrid&w=740',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A culpa distinctio earum facere ipsum nobis quaerat quis ratione, voluptas voluptate!'
    },
    {
        id: 3,
        title: 'klgfdckgfck.gck.gfck.gc',
        image: 'https://img.freepik.com/free-photo/beautiful-endangered-red-panda-green-tree_475641-1326.jpg?semt=ais_hybrid&w=740',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A culpa distinctio earum facere ipsum nobis quaerat quis ratione, voluptas voluptate!'
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