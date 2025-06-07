document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const name = document.getElementById("name").value.trim();

  if (!email || !password || password.length < 6) {
    document.getElementById("signupStatus").innerText = "Enter a valid email and password (6+ chars).";
    return;
  }

  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      userCredential.user.updateProfile({ displayName: name })
        .then(() => {
          document.getElementById("signupStatus").innerText = "Sign-up successful! You can now log in.";
        });
    })
    .catch((error) => {
      document.getElementById("signupStatus").innerText = "Error: " + error.message;
    });
});
