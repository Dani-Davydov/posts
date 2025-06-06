import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {Typo} from "../../components/UI/Typo/Typo.jsx";
import {Form} from "../../components/UI/Form/Form.jsx";
import {Field} from "../../components/UI/Field/Field.jsx";
import {Input} from "../../components/UI/Input/styles.js";
import { Container } from "../../components/UI/Container/index.jsx";
import {useDispatch} from "react-redux";
import {login} from "../../redux/slices/authSlice.js";

export  const AuthPage = () => {
    const [formValues, setFormValues] = useState({ name: "", surname: "" , email: "", password: "" });
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onChange = (name, value) => {
        setFormValues({...formValues, [name]: value});
        console.log(typeof(formValues.password));
    }

    const onSubmit = (e) => {
        e.preventDefault();
        try {
            const users = JSON.parse(localStorage.getItem("users"));

            if (!users) {
                alert("Данный пользователь не найден");
                return;
            }

            const currentUser = users.find((user) => user.password === formValues.password && user.email === formValues.email);

            if (!currentUser) {
                alert("Данный пользователь не найден");
                return;
            }


            dispatch(login(currentUser));

            navigate("/posts");
        } catch (e) {
            console.log(e)
        }
    }

    const disabled = !formValues.email || !formValues.password;

    return (
        <Container>
            <Typo>Страница регистрации</Typo>
            <Form onSubmit={onSubmit}>
                <Field>
                    <Input
                        name='email'
                        placeholder="Email"
                        type="email"
                        value={formValues.email}
                        onChange={(e) => onChange(e.target.name ,e.target.value)}
                    />
                </Field>
                <Field>
                    <Input
                        name='password'
                        placeholder="Пороль"
                        type="password"
                        value={formValues.password}
                        onChange={(e) => onChange(e.target.name ,e.target.value)}
                    />
                </Field>
                <button  disabled={disabled} type='submit'>Регистрация</button>
            </Form>
        </Container>
    )
}