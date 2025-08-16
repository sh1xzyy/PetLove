import toast from "react-hot-toast";

export const createFormMethods = (methods) => {
  const handleSearch = (name, value) => {
    const trimmed = value.trim();
    if (!trimmed) {
      toast.error("Enter something");
      return;
    }
    methods.setValue(name, trimmed, { shouldDirty: true });
  };

  const handleReset = (name) => {
    methods.resetField(name);
  };

  return { handleSearch, handleReset };
};
