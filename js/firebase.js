const firebaseConfig = {
  apiKey: "AIzaSyBZYTso-siHXUFMoLHVBAEVaduS9lIpwz8",
  authDomain: "qr-system-b7326.firebaseapp.com",
  databaseURL: "https://qr-system-b7326-default-rtdb.firebaseio.com",
  projectId: "qr-system-b7326",
  storageBucket: "qr-system-b7326.firebasestorage.app",
  messagingSenderId: "316223189996",
  appId: "1:316223189996:web:83895e0d6dc28ad99606c9"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.database();

let qrCode = null;
let uploadedLogo = "";

document.addEventListener("DOMContentLoaded", () => {
  const el = document.getElementById("logoUpload");

  if (el) {
    el.addEventListener("change", (e) => {
      const f = e.target.files[0];

      if (!f) return;

      const r = new FileReader();

      r.onload = (ev) => {
        uploadedLogo = ev.target.result;

        const preview = document.getElementById("logoPreview");

        if (preview) {
          preview.src = uploadedLogo;
          preview.style.display = "block";
        }

        if (typeof createQR === "function") {
          createQR();
        }
      };

      r.readAsDataURL(f);
    });
  }
});
