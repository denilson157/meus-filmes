import { createContext, useContext, useState } from 'react';

interface ILoadingContextData {
    loading: boolean;
    toggleLoading: (bool: boolean) => void;
}

const LoadingContext = createContext({} as ILoadingContextData);

export const useAppLoadingContext = () => {
    return useContext(LoadingContext);
};

export const AppLoadingProvider: React.FC<any> = ({ children }) => {
    const [loading, setLoading] = useState<boolean>(false);

    const toggleLoading = (bool: boolean) => {
        setLoading(bool)
    }

    return (
        <LoadingContext.Provider value={{ loading, toggleLoading }}>
            {children}
        </LoadingContext.Provider>
    );
};