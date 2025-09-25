
export async function uploadFileToCloudinary(file) {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "elgamal_uploads"); 

  try {
    const response = await fetch("https://api.cloudinary.com/v1_1/dvvmykx5i/upload", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    return data.secure_url || "";
  } 
  catch (error) {
    console.error("File upload failed:", error);
    return "";
  }
}