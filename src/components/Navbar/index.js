import React, { useContext } from "react";
import { useHistory } from 'react-router-dom';

import { AppContext } from '../../contexts/AppContext';
import { Container } from './styles';

export default function Navbar() {
    const { isAuthenticated, logOut } = useContext(AppContext);

    const history = useHistory();

    function handleLogout(){
        logOut();
        history.push("/login");
    }

    return (
        <Container>
            <h1 onClick={() => history.push('/')}>CUPIDO ONLINE</h1>
            <div>
                { isAuthenticated ? (
                    <>
                        <button onClick={() => history.push('/')}>Perfil</button>
                        <button onClick={handleLogout}>Sair</button>
                    </>
                ):(
                    <>
                        <button onClick={() => history.push('/login')}>Entrar</button>
                        <button onClick={() => history.push('/register')}>Cadastrar</button>
                    </>
                )}
            </div>
        </Container>
    );
}