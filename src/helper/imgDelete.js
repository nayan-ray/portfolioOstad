import fs from "fs/promises";



const deleteImageByPath = async (userImagePath)=>{
  try {
    await fs.access(userImagePath);
    await fs.unlink(userImagePath);
    console.log("image deleted successfully");
  } catch (error) {
      console.log("something went  wrong"); 
      throw error;
  }
}

export default { deleteImageByPath};