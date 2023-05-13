import axios from "axios";

const apiKey = "AIzaSyD_QbaQq8Lcq2GCxmO_uKSBrkk8P7-6NRM";

// need to get only folderId (from folder we can get all the videos)
const videoFolderId = "1TlB45JuqOSj-V5eCk0WF3MvkXg8zHlxS";
const imageFolderId = "1v6mFtLW3weF1nUt43XZ7vsGrLdIRgcyB";
const endpoint = `https://www.googleapis.com/drive/v3/files`;

export const fetchVideos = async () => {

  const params = {
    q: `'${videoFolderId}' in parents and mimeType='video/mp4'`,
    key: apiKey,
  };

  try {
    const response = await axios.get(endpoint, { params });
    console.log("my response=", response);
    return response?.data;
  } catch (error) {
    console.log("error =", error);
    throw error;
  }
};

export const fetchImages = async () => {

  const params = {
    q: `'${imageFolderId}' in parents and mimeType contains 'image/'`,
    key: apiKey,
  };

  try {
    const response = await axios.get(endpoint, { params });
    return response?.data;
  } catch (error) {
    console.log("error =", error);
    throw error;
  }
};
