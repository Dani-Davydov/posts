import {Container} from '../../../../components/Container/index.jsx';
import * as SC from './styles';
import {Typo} from "../../../../components/Typo/Typo.jsx";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {addPost} from "../../../../redux/slices/postsSlice.js";

const DEFAULT_STATE = {title: "", body: ""}

export const PostForm = () => {
    const [formValues, setFormValues] = useState(DEFAULT_STATE);

    const dispatch = useDispatch();

    const onChange = (name, value) => {
        console.log(name, value);
        setFormValues({...formValues, [name]: value});
    }

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(addPost(formValues))
        setFormValues(DEFAULT_STATE)
    }

    const disabled = !formValues.title || !formValues.body;

    return(
        <Container>
            <Typo>Добавление нового поста</Typo>
            <SC.Form onSubmit={onSubmit} action="">
                <SC.Field>
                    <SC.Input
                        name='title'
                        placeholder="Заголовок поста"
                        type="text"
                        value={formValues.title}
                        onChange={(e) => onChange(e.target.name ,e.target.value)}
                    />
                </SC.Field>
                <SC.Field>
                    <SC.Textarea
                        rows={10}
                        cols={30}
                        name='body'
                        placeholder="Текст"
                        value={formValues.body}
                        onChange={(e) => onChange(e.target.name ,e.target.value)}>
                    </SC.Textarea>
                </SC.Field>
                <SC.Button  disabled={disabled} type='submit'>Сохранить</SC.Button>
            </SC.Form>
        </Container>
    )
}