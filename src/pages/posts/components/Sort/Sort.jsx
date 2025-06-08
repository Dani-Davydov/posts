import {useDispatch, useSelector} from "react-redux";
import {filterList, updateFiltersParametrs} from "../../../../redux/slices/postsSlice.js";

export const Sort = () => {
    const {sort} = useSelector((state) => state.posts.filtersParametrs);
    const dispatch = useDispatch();

    const handleSelectChange = (value) => {
        dispatch(updateFiltersParametrs({
            sort: value
        }));

        dispatch(filterList())
    }

    return (
        <div className="sort">
            <select value={sort} onChange={(e) => handleSelectChange(e.target.value)} className="input" id="sort">
                <option value="">relevance</option>
                <option value="ASC">ASC</option>
                <option value="DESC">DESC</option>
            </select>
        </div>
    )
}