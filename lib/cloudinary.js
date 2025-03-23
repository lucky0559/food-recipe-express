import { v2 as cloudinary } from "cloudinary";

export const cdn = (filename, reject, resolve) => {
  return cloudinary.uploader.upload_stream(
    {
      resource_type: "auto",
      public_id: `food-recipe/${filename}`
    },
    (error, result) => {
      if (error) reject(error);
      resolve(result);
    }
  );
};
