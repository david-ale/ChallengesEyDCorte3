import { firebaseStorage } from "./config";
import { ref, uploadBytesResumable, listAll, getDownloadURL, deleteObject } from 'firebase/storage';

export const upload = (file) => {
  if (!file) {
    throw new Error("Please choose a file first!");
  }

  const storageRef = ref(firebaseStorage, `/files/${file.name}`);
  const uploadTask = uploadBytesResumable(storageRef, file);

  return uploadTask;
};

export const getAll = async () => {
  try {
    const listRef = ref(firebaseStorage, '/files/');
    const { items } = await listAll(listRef);

    const files = await Promise.all(items.map(async (itemRef) => {
      const url = await getDownloadURL(itemRef);
      return { url, ref: itemRef };
    }));

    return { items: files };
  } catch (error) {
    console.error("Error while getting all files:", error);
    throw error;
  }
};

export const getDownloadUrl = async (fileRef) => {
  try {
    return await getDownloadURL(fileRef);
  } catch (error) {
    console.error("Error while getting download URL:", error);
    throw error;
  }
};

export const deleteFile = async (fileRef) => {
  try {
    await deleteObject(fileRef);
  } catch (error) {
    console.error("Error while deleting file:", error);
    throw error;
  }
};