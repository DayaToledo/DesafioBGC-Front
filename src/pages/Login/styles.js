import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 4rem 1fr;
    grid-template-areas:
        "head"
        "main";
`;

export const FormBox = styled.div`
    grid-area: main;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    form {
        height: 25rem;
        width: 40rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: var(--brink-pink);
        border-radius: 3rem;
    }

    p {
        width: 80%;
        margin-bottom: 2rem;
        font-size: 1.5rem;
        text-align: center;
        line-height: 2.2rem;
        font-weight: bold;
    }

    label {
        width: 60%;
        font-size: 1.4rem;
    }

    input {
        height: 2.5rem;
        width: 60%;
        border: none;
        border-radius: 1rem;
        margin: 0.5rem 0 1.5rem 0;
        padding: 0 1.5rem;
        font-size: 1.2rem;
    }

    button {
        height: 3rem;
        width: 30%;
        border: none;
        border-radius: 1rem;
        font-size: 1.3rem;
        font-weight: bold;
        margin-top: 2rem;
        background-color: var(--spanish-pink);

        :hover {
            background-color: var(--medium-turquoise);
        }
    }
`;