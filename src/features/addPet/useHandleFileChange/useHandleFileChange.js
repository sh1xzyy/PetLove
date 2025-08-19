import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { uploadImageToCloudinaryThunk } from "../../../redux/cloudinary/operations";

export const useHandleFileChange = () => {
  const dispatch = useDispatch();

  const handleFileChange = async (e, setValue, setHasUserSelectPhoto) => {
    try {
      const file = e.target.files[0];
      if (!file) return;

      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "unsigned_preset");

      const data = await dispatch(
        uploadImageToCloudinaryThunk(formData),
      ).unwrap();
      if (data.secure_url) {
        setValue("imgURL", data.secure_url, { shouldValidate: true });
        setHasUserSelectPhoto(true);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return { handleFileChange };
};
