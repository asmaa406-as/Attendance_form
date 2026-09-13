# Event Attendance Registration Form

A simple, responsive registration form for a virtual event, built with vanilla HTML, CSS, and JavaScript, connected to a real backend via Google Apps Script and Google Sheets.

## 🔗 Links

- **Live Demo:** https://attendance-form-three.vercel.app/
- **google sheet (view only):** https://docs.google.com/spreadsheets/d/1rGFwp7WhQOteuFCDd4cmw_yqc0ckLIKTzjini_eR2nU/edit?usp=sharing

## ✨ Features

- Clean, card-based UI with icons next to each field for better readability.
- Fields: Full Name, Email, Phone, Gender, and Session selection.
- Client-side validation for all fields, including a custom regex pattern for Egyptian phone numbers (`01[0125][0-9]{8}`).
- Real backend integration: form submissions are sent to a Google Sheet via a Google Apps Script Web App, so every registration is actually stored (not just logged in the console).
- Success and error feedback shown to the user after submission.
- Fully responsive layout that adapts to mobile screens.

## 🛠️ Tech Stack

- **Frontend:** HTML5, CSS3 (Flexbox, CSS variables, media queries), vanilla JavaScript (no frameworks).
- **Backend:** Google Apps Script (`doPost`) + Google Sheets as the data store.
- **Icons:** Font Awesome (CDN).
- **Hosting:** Vercel (static deployment).

## ⚙️ How the Backend Works

1. The form data is collected in `script.js` and prevented from doing a normal page submit.
2. The phone number is validated locally with a regex before anything is sent.
3. The data is sent as a `POST` request to a Google Apps Script Web App URL.
4. The Apps Script (`doPost` function) receives the data, parses it, and appends a new row to a connected Google Sheet with a timestamp.
5. A success or error message is shown to the user based on the response.

