let error = document.getElementById("error");

function showMessage(msg, color) {
  error.innerText = msg;
  error.style.color = color;
}

document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault(); // form ko submit hone se rokta hai

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  if (name === "" || email === "" || message === "") {
    showMessage("All fields are required!", "red");
  } else if (!email.includes("@") || !email.includes(".")) {
    showMessage("Invalid email format!", "red");
  } else {
    showMessage("Message sent successfully!", "green");
  }
});

