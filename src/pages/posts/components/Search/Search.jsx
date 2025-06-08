import {Input} from "../../../../components/UI/Input/Input.jsx";
import {useDispatch, useSelector} from "react-redux";
import {updateFiltersParametrs, filterList} from "../../../../redux/slices/postsSlice.js";
import {useCallback, useMemo} from "react";

export const Search = () => {
    const {searchValue} = useSelector((state) => state.posts.filtersParametrs);
    const dispatch = useDispatch();

    const debounce = (func, delay) => {
        let timer;
        return function (...args) {
            clearTimeout(timer);
            timer = setTimeout(() => func.apply(this, args), delay);
        };
    };


    const debounceFilter = useCallback((value) => {
        dispatch(updateFiltersParametrs({
            searchValue: value
        }));

        dispatch(filterList())
    }, [dispatch]);

    const debouncedFilter = useMemo(() => debounce(debounceFilter, 500), [debounceFilter]);

    const onChange = (value) => {
        dispatch(updateFiltersParametrs({
            searchValue: value
        }));
        debouncedFilter(value)
    }

    return (
        <div>
            <Input
                name='search'
                placeholder="Поиск"
                type="text"
                value={searchValue}
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
    )
}