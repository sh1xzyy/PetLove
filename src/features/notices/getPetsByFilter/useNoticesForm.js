import { defaultValues } from "./defaultValues";

export const useNoticesForm = () => {
  const onSubmit = async (values) => {
    console.log(values);
  };
  return { defaultValues, onSubmit };
};
