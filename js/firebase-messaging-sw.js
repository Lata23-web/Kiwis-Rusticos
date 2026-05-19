importScripts("https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js");

firebase.initializeApp({
 apiKey: "AIzaSyDcsFYvdHlt7XnGzsuGzdIhUlOsjGsO1kI",
  authDomain: "kiwis-rusticos-27ea5.firebaseapp.com",
  projectId: "kiwis-rusticos-27ea5",
  messagingSenderId: "504147775222",
  appId: "1:504147775222:web:6341c45d637fce5da0e6d7",
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
  });
});