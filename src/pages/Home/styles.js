import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 4rem 1fr;
    grid-template-areas:
        "head head"
        "main form";
`;

export const TextBox = styled.div`
    grid-area: main;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 5rem 4rem 2rem 3rem;

    h1 {
        width: 100%;
        text-align: center;
        color: var(--spanish-pink);
    }

    p {
        line-height: 2.2rem;
        text-align: center;
        font-weight: bold;
        width: 100%;
        font-size: 1.7rem;
        color: var(--alice-blue);
    }

    img {
        width: 70%;
        height: auto;
        transform: scaleX(-1);
    }
`;