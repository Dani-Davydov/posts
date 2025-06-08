import styled from "styled-components";

export const ModalBtn = styled.button`
    background: white;
    padding: 10px 15px;
    color: black;
    border: 1px solid black;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.3s ease-in-out;

    &:hover {
        background: ${props => props.color};
    }
`