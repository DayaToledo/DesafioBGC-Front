import { createContext, useState } from 'react';

import ConfirmModal from '../components/ConfirmModal';

export const AppContext = createContext({});

export function AppProvider({ children }) {
    const [isAuthenticated, userHasAuthenticated] = useState(false);
    const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);

    function openConfirmModal() {
        setIsConfirmModalOpen(true);
    }

    function closeConfirmModal() {
        setIsConfirmModalOpen(false);
    }

    return (
        <AppContext.Provider
            value={{
                isAuthenticated,
                isConfirmModalOpen,
                openConfirmModal,
                closeConfirmModal
            }}>
                {children}
                { isConfirmModalOpen && <ConfirmModal />}
        </AppContext.Provider>
    )
}