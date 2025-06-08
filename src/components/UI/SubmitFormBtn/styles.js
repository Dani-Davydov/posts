import styled from "styled-components";

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