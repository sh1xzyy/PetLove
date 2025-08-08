import * as Yup from "yup";
import { BIRTHDAY_PATTERN, IMG_URL_PATTERN } from "../../constants/addPet";

export const validationSchema = Yup.object({
  title: Yup.string()
    .required("Title is required")
    .min(2, "Title must be at least 2 characters")
    .max(50, "Title must be at most 50 characters"),

  name: Yup.string()
    .required("Pet's name is required")
    .min(2, "Pet's name must be at least 2 characters")
    .max(50, "Pet's name must be at most 50 characters"),

  imgURL: Yup.string()
    .required("Image URL is required")
    .url("Must be a valid image URL")
    .matches(IMG_URL_PATTERN),

  species: Yup.string()
    .required("Type of pet is required")
    .min(2, "Type of pet must be at least 2 characters")
    .max(30, "Type of pet must be at most 30 characters"),

  birthday: Yup.string()
    .required("Birthday is required")
    .matches(BIRTHDAY_PATTERN, "Invalid birthday format"),

  sex: Yup.string().required("Sex is required"),
});
