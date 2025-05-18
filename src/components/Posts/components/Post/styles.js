import styled from "styled-components";
import {Link} from "react-router-dom";

export const Post = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 15px;
`

export const Image = styled.img`
        width: 150px;
        height: 150px;
`

export const Title = styled.div`
    font-size: 24px;
    font-weight: bold;
`

export const DetailLink = styled(Link)`
    color: black;
    text-decoration: none;
    
    &:hover {
        color: darkred;
        text-decoration: underline;
    }
`