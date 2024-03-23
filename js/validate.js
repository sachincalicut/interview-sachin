window.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".form").addEventListener("submit", function(e) {
      const email = this.email.value;
      const password = this.password.value;
      if (email === "admin@gmail.com" && password === "admin123") {
        this.action = "dashboard.html";
      } else {
        e.preventDefault(); // this goes here now
        alert("Invalid credentials");
      }
    })
  })