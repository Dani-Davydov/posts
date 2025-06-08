import {Container} from '../../../../components/UI/Container/index.jsx';
import * as SC from './styles';
import {Typo} from "../../../../components/UI/Typo/Typo.jsx";
import {useState} from "react";
import { Form } from "../../../../components/UI/Form/Form.jsx"
import {Field} from "../../../../components/UI/Field/Field.jsx";
import {Input} from "../../../../components/UI/Input/styles.js";
import {SubmitButton} from "../../../../components/UI/SubmitFormBtn/SubmitFormBtn.jsx";

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
            <Form onSubmit={onSubmit} action="">
                <Field>
                    <Input
                        name='title'
                        placeholder="Заголовок"
                        type="text"
                        value={formValues.title}
                        onChange={(e) => onChange(e.target.name ,e.target.value)}
                    />
                </Field>
                <Field>
                    <SC.Textarea
                        rows={10}
                        cols={30}
                        name='body'
                        placeholder="Текст"
                        value={formValues.body}
                        onChange={(e) => onChange(e.target.name ,e.target.value)}>
                    </SC.Textarea>
                </Field>
                <SubmitButton title={"Сохранить"}  disabled={disabled} type='submit'/>
            </Form>
        </Container>
    )
}