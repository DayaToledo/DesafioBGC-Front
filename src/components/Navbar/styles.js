import styled from "styled-components";

export const Container = styled.nav`
    grid-area: head;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: var(--brink-pink);

    h1 {
        font-size: 2rem;
        margin-left: 2rem;
        cursor: pointer;
    }

    button {
        height: 2.4rem;
        width: 8rem;
        border: none;
        border-radius: 1.5rem;
        font-size: 1.3rem;
        font-weight: bold;
        margin-right: 2rem;
        background-color: var(--spanish-pink);

        :hover {
            background-color: var(--medium-turquoise);
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
        }
    }
`;