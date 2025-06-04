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
    border: none;
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

export const ModalWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1;
`

export const Modal = styled.div`
    position: fixed;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    color: white;
    border: 1px solid white;
    border-radius: 20px;
    padding: 15px;
    background-color: white;
    display: flex;
    gap: 15px;
    flex-direction: column;
`

export const ModalText = styled.div`
    color: black;
    font-weight: bold;
    font-size: 20px;
    text-align: center;
`

export const ModalContent = styled.div`
    display: flex;
    gap: 15px;
    justify-content: center;
    width: 100%;
    margin-top: 10px;
`

export const CancellBtn = styled.div`
    border: none;
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