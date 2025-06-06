import {Outlet, useNavigate} from "react-router-dom";
import * as SC from "./styles.js";
import {Container} from "../UI/Container/index.jsx";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../redux/slices/authSlice.js";

export const Root = () => {
    const { user } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onClickLogout = () => {
        dispatch(logout());
        navigate('/auth')
    }

    return (
        <>
            <Container>
                <SC.Menu>
                    <SC.MenuItem to={'/'}>Главная</SC.MenuItem>
                    <SC.MenuItem to={'/posts'}>Список постов</SC.MenuItem>
                    {!user && <SC.MenuItem to={'/auth'}>Авторизация</SC.MenuItem>}
                    {!user && <SC.MenuItem to={'/registration'}>Регистрация</SC.MenuItem>}
                    {user && <SC.MenuItem to={'/posts/add'}>Добавление поста</SC.MenuItem>}
                    {user && <button onClick={onClickLogout}>Выход из аккаунта</button>}
                </SC.Menu>
            </Container>
            <Outlet/>
        </>
    )
}