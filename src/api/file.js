import axios from 'axios';

const apiKey = 'AIzaSyD_QbaQq8Lcq2GCxmO_uKSBrkk8P7-6NRM';
const fileId = '1TlB45JuqOSj-V5eCk0WF3MvkXg8zHlxS';

// need to get only folderId (from folder we can get all the videos)
const folderId = '1TlB45JuqOSj-V5eCk0WF3MvkXg8zHlxS'
const endpoint = `https://www.googleapis.com/drive/v3/files`;

const params = {
    q: `'${folderId}' in parents and mimeType='video/mp4'`,
  key: apiKey,
};

export const fetchVideos = async() => {
    try {
        const response = await axios.get(endpoint, {params})
        console.log('my response=', response);
        return response?.data;
    } catch (error) {
        console.log('error =', error);
        throw error;
    }
}

// axios.get(endpoint, { params })
//   .then(response => console.log(response.data))
//   .catch(error => console.error('error',error));
