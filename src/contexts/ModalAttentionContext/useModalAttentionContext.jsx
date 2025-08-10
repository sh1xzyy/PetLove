import { createContext, useContext } from "react";

export const ModalAttentionContext = createContext();
export const useModalAttentionContext = () => useContext(ModalAttentionContext);
