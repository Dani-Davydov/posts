import * as SC from "./styles.js"
import { Link } from "../../../Link/Link.jsx"


export const Post = ({post}) => {
    const image = post.image || 'https://img.freepik.com/free-photo/beautiful-endangered-red-panda-green-tree_475641-1326.jpg?semt=ais_hybrid&w=740'

    return (
        <SC.Post>
            <SC.Image src={image} alt={post.title} />
            <SC.Title>{post.title}</SC.Title>
            <Link to={`/posts/${post.id}`}>Читать далее...</Link>
        </SC.Post>
    )
}