import {Container} from '../../../../components/Container/index.jsx';
import * as SC from './styles';
import {Typo} from "../../../../components/Typo/Typo.jsx";
import {useState} from "react";

const DEFAULT_STATE = {title: "", body: ""}

export const PostForm = ({ title, onSubmitForm, defaultValues }) => {
    const [formValues, setFormValues] = useState(defaultValues || DEFAULT_STATE);

    const onChange = (name, value) => {
        console.log(name, value);
        setFormValues({...formValues, [name]: value});
    }

    const onSubmit = (e) => {
        e.preventDefault();
        onSubmitForm(formValues)
        !defaultValues && setFormValues(DEFAULT_STATE)
    }

    const disabled = !formValues.title || !formValues.body;

    return(
        <Container>
            <Typo>{title}</Typo>
            <SC.Form onSubmit={onSubmit} action="">
                <SC.Field>
                    <SC.Input
                        name='title'
                        placeholder="Заголовок"
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