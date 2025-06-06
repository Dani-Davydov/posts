import { Typo } from "../../components/UI/Typo/Typo.jsx";
import { Container } from '../../components/UI/Container/index.jsx'
import {Field} from "../../components/UI/Field/Field.jsx";
import {Input} from "../../components/UI/Input/styles.js";
import {useState} from "react";
import {Form} from "../../components/UI/Form/Form.jsx";
import {useNavigate} from "react-router-dom";

export  const RegistrationPage = () => {
    const [formValues, setFormValues] = useState({ name: "", surname: "" , email: "", password: "" });
    const navigate = useNavigate();

    const onChange = (name, value) => {
        setFormValues({...formValues, [name]: value});
    }

    const onSubmit = (e) => {
        e.preventDefault();
        try {
            const users = JSON.parse(localStorage.getItem("users"));
            const userId = Date.now();
            const newUser = { id: userId, ...formValues}

            if (!users) {
                localStorage.setItem("users", JSON.stringify([newUser]));
                alert("Вы успешно зарегестрировались")
                navigate('/auth')
                return;
            }

            if (users.find((user) => user.email === formValues.email)) {
                alert("Такой пользоватьль уже существует")
                return;
            }

            users.push(newUser)

            localStorage.setItem("users", JSON.stringify(users));
            alert("Вы успешно зарегестрировались")
            navigate('/auth')

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
                        name='name'
                        placeholder="Имя пользователя"
                        type="text"
                        value={formValues.name}
                        onChange={(e) => onChange(e.target.name ,e.target.value)}
                    />
                </Field>
                <Field>
                    <Input
                        name='surname'
                        placeholder="Фамилия пользователя"
                        type="text"
                        value={formValues.surname}
                        onChange={(e) => onChange(e.target.name ,e.target.value)}
                    />
                </Field>
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