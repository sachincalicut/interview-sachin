const inputs = document.querySelectorAll("input"),
  button = document.querySelector("button"),
  mobile = document.getElementById("mobile"),
  expiry = document.getElementById("expiration");

let OTP = "", expiryInterval="";
genOTP();

function genOTP() {
  OTP=
    Math.floor(Math.random() * 10) + "" +
    Math.floor(Math.random() * 10) + "" +
    Math.floor(Math.random() * 10) + "" +
    Math.floor(Math.random() * 10);

  alert("Your OTP is:" + OTP);

  inputs[0].focus();
  expiry.innerText = 30;
    expiryInterval = setInterval(function () {
    expiry.innerText--;
    if (expiry.innerText == 0) {
      clearInterval(expiryInterval);
    }
  }, 1000);
}

function clearOTP() {
    inputs.forEach((input) => {
        input.value = "";
        input.setAttribute("disabled", true);
    });
    clearInterval(expiryInterval);
    expiry.innerText = 0;
    button.setAttribute("disabled", true);
    button.classList.remove("active");
}


inputs.forEach((input, index) => {
  input.addEventListener("keyup", function (e) {
    const currentInput = input;
    nextInput = input.nextElementSibling,
      prevInput = input.previousElementSibling;
    // console.log(currentIndex, nextInput, prevInput);
    if (
      nextInput &&
      nextInput.hasAttribute("disabled") &&
      currentInput.value !== ""
    ) {
      nextInput.removeAttribute("disabled", true);
      nextInput.focus();
    }
    if (e.key === "Back space") {
      inputs.forEach((input, index1) => {
        if (index <= index1 && prevInput) {
          input.setAttribute("disabled", true);
          prevInput.focus();
          prevInput.value = "";
        }
      });
    }
    if (!inputs[3].disabled && inputs[3].value !== "") {
      inputs[3].blur();
      button.classList.add("active");
      return;
    }
    button.classList.remove("active");
  });
});

window.addEventListener("load", () => {
  let x = prompt("Please enter you mobile to verify your account....");
  if (x) {
    mobile.innerText = x;
    genOTP();
  }
});
button.addEventListener("click", ()=> {
  let verify= "";
  inputs.forEach((input) => {
    verify += input.value;
  });
  //console.log(verify);
  if (verify===OTP) {
    //alert("Your account has been verified successfully");
    window.location = "dashboard.html";

  }else{
    alert("Your Verification is Failed :( ");
  }
});
