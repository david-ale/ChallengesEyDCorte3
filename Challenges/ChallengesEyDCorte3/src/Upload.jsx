import { useImageManagementHook } from "./hooks/useImageManagementHook";
import React,{useEffect} from "react";

export const Upload = () => {
    const {
      files,
      percent,
      handleChange,
      handleUpload,
      handleGetAll,
      handleDelete,
    } = useImageManagementHook();
  
    useEffect(() => {
      handleGetAll();
    }, []);
  
    return (
      <div>
        <input type="file" onChange={handleChange} accept="" />
        <button onClick={handleUpload}>Upload to Firebase</button>
        <p>{percent} % done</p>
        {files.map((item, key) => (
          <div key={key}>
            <img width="100px" src={item.url} alt={`Image ${key}`} />
            <button onClick={() => handleDelete(item.ref)}>Delete</button>
          </div>
        ))}
      </div>
    );
  };