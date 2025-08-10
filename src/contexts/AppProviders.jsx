import ModalAttentionProvider from "./ModalAttentionContext/ModalAttentionProvider";

const AppProviders = ({ children }) => {
  return <ModalAttentionProvider>{children}</ModalAttentionProvider>;
};

export default AppProviders;
