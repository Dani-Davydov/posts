import {Container} from "../../components/UI/Container/index.jsx";
import {Posts} from "../../components/Posts/Posts.jsx";
import {Typo} from "../../components/UI/Typo/Typo.jsx";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {filterList, getPosts} from "../../redux/slices/postsSlice.js";
import {Loader} from "../../components/UI/Loader/Loader.jsx";
import {Pagination} from "./components/Pagination/Pagination.jsx";
import {Search} from "./components/Search/Search.jsx";
import {Sort} from "./components/Sort/Sort.jsx";
import {PostAndSortContainer} from "../../components/PostAndSortContainer/PostAndSortContainer.jsx";

export  const PostsPage = () => {
    const {list, loading} = useSelector((state) => state.posts.posts);
    const {filteredList} = useSelector((state) => state.posts.filteredPosts);
    const {paginationInfo} = useSelector((state) => state.posts.filtersParametrs);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!list) {
            dispatch(getPosts());
        } else {
            dispatch(filterList())
        }
    }, [list, dispatch]);

    if (!list && loading) {
        return <Loader/>
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
                    <PostAndSortContainer>
                        <Search/>
                        <Sort/>
                    </PostAndSortContainer>
                    {!paginationInfo.pageCount && <>Постов с таким названием нет</>}
                    <Posts posts={filteredList} />
                <Pagination pageCount={paginationInfo.pageCount}/>
            </Container>
    )
}