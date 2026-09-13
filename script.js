const SHEET_URL="https://script.google.com/macros/s/AKfycbwVOBlzzyF0dXbVVPUT1H11v26dGPxwbg800GcE46mQzo95c9wET4SeCHSQe9dJQwBQ7g/exec";

document.getElementById("registrationForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const phoneValue = document.getElementById("phone").value;
  const phonePattern = /^01[0125][0-9]{8}$/;

  if (!phonePattern.test(phoneValue)) {
    alert("Please enter a valid phone number (numbers only, 11 digits strarting with 010 or 011 or 012 or 015).");
    return;
  }
  const formData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    gender: document.querySelector('input[name="gender"]:checked').value,
    course: document.getElementById("course").value
  };

  fetch(SHEET_URL, {
    method: "POST",
    body: JSON.stringify(formData)
  })
    .then(() => {
      alert("Registration successful!");
      document.getElementById("registrationForm").reset();
    })
    .catch((error) => {
      alert("Something went wrong. Please try again.");
      console.error(error);
    });
});