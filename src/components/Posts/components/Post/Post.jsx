import * as SC from "./styles.js"
import { Link } from "../../../Link/Link.jsx"


export const Post = ({post}) => (
    <SC.Post>
        <SC.Image src={post.image}/>
        <SC.Title>{post.title}</SC.Title>
        <Link to={`/posts/${post.id}`}>Читать далее...</Link>
    </SC.Post>
)