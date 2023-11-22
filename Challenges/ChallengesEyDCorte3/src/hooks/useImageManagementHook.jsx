import { useState } from "react";
import { getAll,upload,deleteFile,getDownloadUrl } from "../firebase/files";

export const useImageManagementHook = () => {
    const [files, setFiles] = useState([]);
    const [file, setFile] = useState("");
    const [percent, setPercent] = useState(0);
  
    const handleChange = (event) => {
      setFile(event.target.files[0]);
    };
  
    const handleUpload = () => {
      try {
        if (!file) {
          throw new Error("Please choose a file first!");
        }
  
        const uploadTask = upload(file);
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const percent = Math.round(
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            setPercent(percent);
          },
          (err) => {
            console.error("Error during upload:", err);
            
          },
          async () => {
            const url = await getDownloadUrl(uploadTask.snapshot.ref);
            setFiles((list) => [...list, { url, ref: uploadTask.snapshot.ref }]);
          }
        );
      } catch (error) {
        console.error("Error during upload:", error);
        
      }
    };
  
    const handleDelete = async (fileRef) => {
      try {
        await deleteFile(fileRef);
        setFiles((list) => list.filter((file) => file.ref !== fileRef));
      } catch (error) {
        console.error("Error while deleting file:", error);
        
      }
    };
  
    const handleGetAll = async () => {
      try {
        const { items } = await getAll();
        setFiles(items);
      } catch (error) {
        console.error("Error while getting all files:", error);
        
      }
    };
  
    return { files, percent, handleChange, handleUpload, handleGetAll, handleDelete };
  };