import { createContext, useState } from 'react';

import ConfirmModal from '../components/ConfirmModal';

export const AppContext = createContext({});

export function AppProvider({ children }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);

    function openConfirmModal() {
        setIsConfirmModalOpen(true);
    }

    function closeConfirmModal() {
        setIsConfirmModalOpen(false);
    }

    function logIn() {
        setIsAuthenticated(true);
    }

    function logOut() {
        setIsAuthenticated(false);
    }

    return (
        <AppContext.Provider
            value={{
                isAuthenticated,
                isConfirmModalOpen,
                openConfirmModal,
                closeConfirmModal,
                logIn,
                logOut
            }}>
                {children}
                { isConfirmModalOpen && <ConfirmModal />}
        </AppContext.Provider>
    )
}