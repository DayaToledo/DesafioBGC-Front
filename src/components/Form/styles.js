import styled from "styled-components";

export const Container = styled.div`
    grid-area: form;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    form {
        height: 38rem;
        width: 40rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: var(--brink-pink);
        box-shadow: 0 0 60px rgba(0, 0, 0, 0.1);
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

    textarea {
        height: 6rem;
        width: 60%;
        resize: none;
        border: none;
        border-radius: 1rem;
        margin: 0.5rem 0 2rem 0;
        padding: 1rem 1.5rem;
        font-size: 1.2rem;
    }

    button {
        height: 3rem;
        width: 30%;
        border: none;
        border-radius: 1rem;
        font-size: 1.3rem;
        font-weight: bold;
        background-color: var(--spanish-pink);

        :hover {
            background-color: var(--medium-turquoise);
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
        }
    }
`;