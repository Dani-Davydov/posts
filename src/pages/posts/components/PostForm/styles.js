import styled from "styled-components";

export const Textarea = styled.textarea`
    resize: none;
    width: 100%;
    outline: none;
    border: 1px solid #293131;
`

export const Button = styled.button`
    border: none;
    background: #293131;
    color: #fff;
    padding: 10px 0;
    border-radius: 10px;
    cursor: pointer;

    &:hover {
        background: #121717;
    }
    
    &:disabled {
        opacity: 0.5;
        cursor: default;
    }
`