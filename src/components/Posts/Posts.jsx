import { Post } from './components/Post/Post.jsx'
import * as SC from './styles.js'

export const Posts = ({posts}) => (
    <>
        {posts && <SC.Posts>
            {posts.map((post) => <Post key={post.id} post={post}/>)}
        </SC.Posts>}
    </>

)