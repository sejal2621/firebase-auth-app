document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
        window.location.href = "dashboard.html";
    })
    .catch((error) => {
      document.getElementById("loginStatus").innerText = "Error: " + error.message;
    });
});
