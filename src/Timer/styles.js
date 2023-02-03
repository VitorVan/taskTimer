import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: center;
    margin-top: 80px;

    h1 {
        margin-bottom: 30px;
    }

    input {
        border: 2px solid;
        border-color: #222222;
        border-radius: 10px;
        padding: 10px 10px;
        width: 400px;
        margin-bottom: 10px;
    }

    button {
        background: none;
        text-decoration: none;
        border: 1px solid;
        padding: 10px 20px;
        border-radius: 10px;   
    }
    .save {
        color: #42B863;
        border-color: #42B863;
    }

    .reset {
        color: #D40B13;
        border-color: #D40B13;
    }

    .pause {
        color: #EBB70E;
        border-color: #EBB70E;
    }

    .start {
        border: 2px solid;
        font-weight: 700;
    }
`;

export const ButtonContainer = styled.div`
    margin-top: 30px;
    margin-bottom: 30px;
    display: flex;
    width: 700px;
    justify-content: space-between;
    gap: 20px;
`;

export const TaskBar = styled.div`
    display: flex;
    padding: 10px;

    p {
        font-weight: 700;
        margin-right: 10px
    }
`;