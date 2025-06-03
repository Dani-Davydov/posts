import {PostForm} from "../components/PostForm/PostForm.jsx";
import {addPost} from "../../../redux/slices/postsSlice.js";
import {useDispatch} from "react-redux";

export  const AddPostsPage = () => {
    const dispatch = useDispatch();

    const onSubmitForm = (formValues) => {
        dispatch(addPost(formValues))
    }

    return <PostForm title="Добавить пост" onSubmitForm={onSubmitForm} />
}