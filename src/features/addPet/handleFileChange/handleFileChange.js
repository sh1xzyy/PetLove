import toast from "react-hot-toast";
import { uploadImageToCloudinaryThunk } from "../../../redux/cloudinary/cloudinary";

export const handleFileChange = async (e, setValue, setHasUserSelectPhoto) => {
  const file = e.target.files[0];
  if (!file) return;

  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "unsigned_preset");

  try {
    const data = await uploadImageToCloudinaryThunk(formData).unwrap();
    if (data.secure_url) {
      setValue("imgURL", data.secure_url, { shouldValidate: true });
      setHasUserSelectPhoto(true);
    }
  } catch (error) {
    toast.error(error);
  }
};
