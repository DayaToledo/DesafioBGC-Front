import styled from "styled-components";

export const Container = styled.div`
    background: rgba(255, 192, 187, 0.7);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    div {
        width: 40rem;
        padding: 3rem 3rem 0 3rem;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 1.5rem;
        box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
        background: var(--spanish-pink);
    }

    img {
        width: auto;
        height: 25rem;
    }

    strong {
        font-size: 2.6rem;
        color: var(--flirt);
    }

    p {
        font-size: 1.6rem;
        margin-top: 0.8rem;
        text-align: center;
    }

    @media(max-width: 900px) {
        div {
            width: 90%;
        }
    }
`;

export const ButtonClose = styled.button`
    position: absolute;
    right: 1rem;
    top: 1rem;
    background: transparent;
    border: 0;
    font-size: 0;

    img {
        width: 3rem;
        height: auto;
    }
`;