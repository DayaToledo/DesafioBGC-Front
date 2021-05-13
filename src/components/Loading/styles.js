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

    > div {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        background: var(--spanish-pink);
        width: 25rem;
        height: 25rem;
        padding: 5rem;
        border-radius: 1.5rem;
        box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
    }

    p {
        font-size: 1.6rem;
        margin-top: 0.8rem;
    }
`;

export const LoadingBox = styled.div`
    width: 8rem;
    height: 8rem;
    border: 1.5rem solid var(--flirt);
    border-top-color: var(--flirt-transparent);
    border-radius: 50%;
    animation: spin 1.5s linear infinite;

    @keyframes spin {
        to {
            transform: rotate(360deg);
        }
    }
`;