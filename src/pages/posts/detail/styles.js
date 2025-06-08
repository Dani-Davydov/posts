import styled from "styled-components";

export const Image = styled.img`
        width: 150px;
        height: 150px;
        float: left;
        margin-right: 15px;
`
export const Text = styled.div`
    font-size: 15px;
`

export const LinkWrapper = styled.div`
    text-align: center;
    margin-top: 15px;
    display: flex;
    justify-content: center;
    gap: 15px;
    align-items: center;
`

export const DeleteButton = styled.button`
    background: white;
    padding: 10px 15px;
    color: black;
    border: 1px solid black;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.3s ease-in-out;

    &:hover {
        background: #ff2e2e;
    }
`

export const CancellBtn = styled.div`
    background: white;
    padding: 10px 15px;
    color: black;
    border: 1px solid black;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.3s ease-in-out;

    &:hover {
        background: #46a609;
    }
`