const CLOUDINARY_CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;

export const handleFileChange = async (e, setValue, setHasUserSelectPhoto) => {
  const file = e.target.files[0];
  if (!file) return;

  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "unsigned_preset");

  const res = await fetch(
    `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`,
    { method: "POST", body: formData },
  );

  if (!res.ok) {
    const text = await res.text();
    console.error("Something went wrong with uploading pets img:", text);
    return;
  }

  const data = await res.json();

  if (data.secure_url) {
    setValue("imgURL", data.secure_url, { shouldValidate: true });
    setHasUserSelectPhoto(true);
  }
};
