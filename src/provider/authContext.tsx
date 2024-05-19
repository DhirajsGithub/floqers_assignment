import { ReactNode, createContext, useState } from "react";

interface contextValue {
    isDark: boolean;
    setModeValue: (isDark: boolean) => void;
}


interface AuthContextProviderProps {
    children: ReactNode;
}

export const generalContext = createContext<contextValue | null>(null);

export const GeneralContextProvider: React.FC<AuthContextProviderProps> = (
    props
) => {
    const [isDark, setIsDark] = useState<boolean>(false)
    const setModeValue = (isDark: boolean) => {
        setIsDark(isDark)

    }
    return (
        <generalContext.Provider value={{ isDark, setModeValue }}>
            {props.children}
        </generalContext.Provider>
    );
};
