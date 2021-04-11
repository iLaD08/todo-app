import styled from "styled-components";

export const TodoListDiv = styled.div`
    transition: background 0.1s linear;
    position: absolute;
    top: 100px;
    border-radius: 4px;
    width: 300px;
    padding: 5px;
`;

export const Title = styled.h1`
    text-align: center;
`;

export const TodoEmpty = styled.h2`
    text-align: center;
    border-radius: 3px;
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.15);
    font-size: 15px;
    margin-bottom: 6px;
    padding: 3px 10px;
`;