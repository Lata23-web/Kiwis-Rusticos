import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// 🔥 TU CONFIG FIREBASE (la copias de Firebase)
const firebaseConfig = {
  apiKey: "AIzaSyDcsFYvdHlt7XnGzsuGzdIhUlOsjGsO1kI",
  authDomain: "kiwis-rusticos-27ea5.firebaseapp.com",
  projectId: "kiwis-rusticos-27ea5",
  storageBucket: "kiwis-rusticos-27ea5.firebasestorage.app",
  messagingSenderId: "504147775222",
  appId: "1:504147775222:web:6341c45d637fce5da0e6d7"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// 🔐 LOGIN SIMPLE
window.login = async function () {
  try {
    await signInWithEmailAndPassword(
      auth,
      "admin@kiwis.com",
      "kiwis123"
    );

    document.getElementById("estado").innerText = "Login OK 🥝";

  } catch (e) {
    alert("Error login");
  }
};

// 📅 CARGAR PARTIDOS
async function cargarPartidos() {
  const querySnapshot = await getDocs(collection(db, "partidos"));

  let html = "";

  querySnapshot.forEach((doc) => {
    const p = doc.data();

    html += `
      <p>
        🆚 ${p.rival} | ${p.resultado} | ${p.fecha}
      </p>
    `;
  });

  document.getElementById("partidos").innerHTML = html;
}

cargarPartidos();