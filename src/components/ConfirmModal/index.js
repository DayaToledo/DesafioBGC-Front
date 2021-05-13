import { useContext } from 'react';
import { AppContext } from '../../contexts/AppContext';

import { Container, ButtonClose } from './styles';

export default function LevelUpModal(props) {
    const { closeConfirmModal } = useContext(AppContext);

    return (
        <Container>
            <div>
                <strong>Pronto!</strong>
                <p>O e-mail anônimo foi enviado com sucesso!</p>
                <img src="images/mailSent.svg" alt="carta enviada" />

                <ButtonClose type='button' onClick={closeConfirmModal}>
                    <img src="/images/close.svg" alt="Fechar modal"/>
                </ButtonClose>
            </div>
        </Container>
    )
}