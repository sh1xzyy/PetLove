import { useState } from "react";
import { ModalAttentionContext } from "./useModalAttentionContext";

const ModalAttentionProvider = ({ children }) => {
  const [isAttentionModalOpen, setIsAttentionModalOpen] = useState(false);
  return (
    <ModalAttentionContext.Provider
      value={{ isAttentionModalOpen, setIsAttentionModalOpen }}
    >
      {children}
    </ModalAttentionContext.Provider>
  );
};

export default ModalAttentionProvider;
