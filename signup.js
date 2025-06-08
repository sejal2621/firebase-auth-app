let toastBox = document.getElementById("toast-box");
let successMsg = '<i class="fa-solid fa-circle-check"></i> Signup Successfully!';
let errorMsg = '<i class="fa-solid fa-circle-xmark"></i> Error!';

function showToast(msg, isError = false) {
  const existingToasts = toastBox.querySelectorAll(".toast");
  for (let toast of existingToasts) {
    if (toast.innerHTML === msg) return;
  }

  let toast = document.createElement("div");
  toast.classList.add("toast");

  if (isError) {
    toast.classList.add("error");
  }

  toast.innerHTML = msg;
  toastBox.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 5000);
}

document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const name = document.getElementById("name").value.trim();

  if (!email || !password || password.length < 6) {
    showToast(errorMsg + " Enter a valid email and password (6+ chars).", true);
    return;
  }

  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      return userCredential.user.updateProfile({ displayName: name });
    })
    .then(() => {
      showToast(successMsg);
    })
    .catch((error) => {
      showToast(errorMsg + " " + error.message, true);
    });
});
