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


document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
        window.location.href = "dashboard.html";
    })
    .catch((error) => {
      showToast(errorMsg + " " + error.message, true);
    });
});
