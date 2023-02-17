import styled from "styled-components";

export const Container = styled.div`
    font-family: 'Montserrat', sans-serif !important;
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
        width: 57%;
        margin-bottom: 10px;
    }

    .participants {
        width: 40%;
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
    font-family: 'Montserrat', sans-serif !important;
    margin-top: 30px;
    margin-bottom: 30px;
    display: flex;
    width: 700px;
    justify-content: space-between;
    gap: 20px;
`;

export const TaskBar = styled.div`
    font-family: 'Montserrat', sans-serif !important;
    display: flex;
    padding: 10px;

    p {
        font-weight: 700;
        margin-right: 10px;
    }

    .date {
        font-weight: 500;
    }

    .participantes {
        margin-left: 10px;
        font-weight: 500;
    }
    
    .participante {
        margin-left: 5px
    }
`;

export const InputsContainer = styled.div`
    width: 700px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Tabela = styled.table`
    margin-top: 20px;
    margin-bottom: 50px;

    background: #fff;
    width: 80%;
    border-radius: 30px;
    padding: 10px;
    font-size: 14px;
    text-align: center;
    transition: all 300ms ease;

    thead {
        th {
            height: 2rem;
        }
    }

    tbody {
        td {
          height: 2.8rem;
          border-bottom: 1px solid #f5f5f5;
        }
    }

`;