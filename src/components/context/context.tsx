import { createContext, ReactNode} from "react";

interface ContextComponentProps {
    children: ReactNode;
}

// interface ContextProviderProps {
//     showModalLogin: boolean;
//     handleShowModalLogin: () => void;
// }

export const ContextProvider = createContext<any | undefined>(undefined)

export default function ContextComponent({ children }: ContextComponentProps) {
    
    return (
        <ContextProvider.Provider value={{ }}>
            {children}
        </ContextProvider.Provider>
    )
}