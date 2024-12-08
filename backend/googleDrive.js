import path from "path";
import { google } from "googleapis";
import fs from "fs";
import { fileURLToPath } from "url"; // To handle __dirname in ES modules
import dotenv from "dotenv";

dotenv.config();
// Handle __dirname in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// OAuth2 Client Setup
const oauthclient = new google.auth.OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  process.env.REDIRECT_URI
);

oauthclient.setCredentials({ refresh_token: process.env.REFRESH_TOKEN });

// Google Drive API Setup
const drive = google.drive({
  version: "v3",
  auth: oauthclient, // Pass the oauthclient object here
});

// File Path
const filepath = path.join(__dirname, "anohappy.png");

// Upload Function
async function uploadFile() {
  try {
    const response = await drive.files.create({
      requestBody: {
        name: "Happy.png", // File name to be saved in Google Drive
        mimeType: "image/png",
      },
      media: {
        mimeType: "image/png",
        body: fs.createReadStream(filepath), // Use createReadStream instead of createWriteStream
      },
    });
    console.log("File Uploaded Successfully:", response.data);
  } catch (error) {
    console.error("Error uploading file:", error.message);
  }
}

// Call the upload function
uploadFile();
