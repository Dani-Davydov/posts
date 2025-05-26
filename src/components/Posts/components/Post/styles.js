import styled from "styled-components";

export const Post = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1 1;
    min-width: 300px;
    gap: 15px;
    border: 1px solid black;
    padding: 10px;
    border-radius: 10px;
`

export const Image = styled.img`
        width: 150px;
        height: 150px;
`

export const Title = styled.div`
    font-size: 24px;
    font-weight: bold;
`
