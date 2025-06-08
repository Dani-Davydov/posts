import {PaginationContainer} from "../../../../components/PaginationContainer/PaginationContainer.jsx";
import {PaginationPage} from "../../../../components/PaginationContainer/PaginationPages/PaginationPage.jsx";
import {filterList, updateFiltersParametrs} from "../../../../redux/slices/postsSlice.js";
import {useDispatch, useSelector} from "react-redux";

export const Pagination = ({pageCount}) => {
    const {paginationInfo} = useSelector((state) => state.posts.filtersParametrs);
    const dispatch = useDispatch();

    const onChangePage = (newPage) => {
        dispatch(updateFiltersParametrs({
            paginationInfo: {
                ...paginationInfo,
                ActivePage: newPage
            }
        }));

        dispatch(filterList())
    }

    return (
        <PaginationContainer>
            {Array.from({ length: pageCount }).map((_, index) => (
                <PaginationPage
                    className={paginationInfo.ActivePage === index ? "active" : ""}
                    onClick={() => onChangePage(index)}
                    key={index}
                >
                    {index + 1}
                </PaginationPage>
            ))}
        </PaginationContainer>
    )
}