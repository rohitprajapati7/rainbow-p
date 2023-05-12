import { drive_v3 } from 'googleapis';

// Create a new instance of the Google Drive API client
const drive = drive_v3();

// Set up your OAuth 2.0 credentials
const CLIENT_ID = 'YOUR_CLIENT_ID';
const CLIENT_SECRET = 'YOUR_CLIENT_SECRET';
const REDIRECT_URI = 'http://localhost:3000/oauth2callback';

// Set up the OAuth 2.0 client
const oauth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);

// Authorize the client
const SCOPES = ['https://www.googleapis.com/auth/drive.readonly'];
const authUrl = oauth2Client.generateAuthUrl({
  access_type: 'offline',
  scope: SCOPES,
});
// Redirect the user to the authorization URL to grant access
// After the user grants access, they will be redirected back to the specified redirect URI

// After the user is redirected back to the redirect URI, exchange the authorization code for an access token
const code = new URLSearchParams(window.location.search).get('code');
const { tokens } = await oauth2Client.getToken(code);
oauth2Client.setCredentials(tokens);

// List all the videos in your Google Drive and display them on your website
const response = await drive.files.list({
  q: "mimeType='video/mp4'",
  fields: 'nextPageToken, files(id, name, createdTime)',
});
response.data.files.map(file => (
  <div key={file.id}>
    <p>{file.name}</p>
    <p>{file.createdTime}</p>
    <video src={`https://drive.google.com/uc?export=download&id=${file.id}`} controls></video>
  </div>
));