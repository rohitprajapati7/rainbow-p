import { drive_v3 } from 'googleapis';

export const driveApi =async() =>{

// Create a new instance of the Google Drive API client
const drive = drive_v3();

// List all the videos in the user's Google Drive
const response = await drive.files.list({
  q: "mimeType='video/mp4'",
  fields: 'nextPageToken, files(id, name, createdTime, webViewLink)',
});

console.log('response =', response);
// Display the videos on your website
// response.data.files.map(file => (
//   <video src={file.webViewLink} controls></video>
// ))
}

import axios from 'axios';

// Set up the API endpoint to fetch the videos
const endpoint = 'https://www.googleapis.com/drive/v3/files';
const apiKey = 'AIzaSyDJI-RjSr5g2tvm05cX17RtiQEvJHFdIRI';

// Fetch the list of videos from the Google Drive API
const response = await axios.get(endpoint, {
  params: {
    q: "mimeType='video/mp4'",
    key: apiKey,
  },
});

// Map over the list of videos and display them on your website
response.data.files.map(file => (
  <div key={file.id}>
    <p>{file.name}</p>
    <p>{file.createdTime}</p> 
    <video src={`https://drive.google.com/uc?export=download&id=${file.id}`} controls></video>
  </div>
));