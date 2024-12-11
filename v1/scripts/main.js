document.getElementById("year").innerHTML = new Date().getFullYear();
const button = document.getElementById("form-button");

const emailInput = document.getElementById("email");
const nameInput = document.getElementById("name");
const subjectInput = document.getElementById("subject");
const messageInput = document.getElementById("message");
// const captcha = document.querySelector("div[data-automation]")

const newsletterEmailInput = document.getElementById("newsletter-email");
const newsletterButton = document.getElementById("newsletter-button");

const apiUrl = 'https://saits-api.herokuapp.com'

const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

async function contactForm (captchaToken) {
  if (!emailRegex.test(emailInput.value)) {
    return swal({
      title: "Błędny email!",
      icon: "error",
    });
  }

  if (nameInput.value.length < 3) {
    return swal({
      title: "Błędne imię!",
      icon: "error",
    });
  }

  if (subjectInput.value.length < 3) {
    return swal({
      title: "Błędny temat!",
      icon: "error",
    });
  }

  if (messageInput.value.length < 3) {
    return swal({
      title: "Błędna treść wiadomości!",
      icon: "error",
    });
  }

  if (!window.hcaptcha.getResponse()) {
    return swal({
      title: "Wypełnij CAPTCHA!",
      icon: "error",
    });
  }

  button.innerHTML = "Wysyłanie...";
  button.disabled = true;
  button.classList.add("button-disabled");

  await fetch(`${apiUrl}/kis/contact`, {
    method: "POST",
    mode: "cors",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      senderEmail: emailInput.value,
      senderName: nameInput.value,
      subject: subjectInput.value,
      message: messageInput.value,
      captcha: captchaToken
    })
  });
  button.innerHTML = "Wysłano!";
  emailInput.value = "";
  nameInput.value = "";
  subjectInput.value = "";
  messageInput.value = "";
  swal({
    title: "Sukces!",
    text: "Wiadomość wysłana pomyślnie!",
    icon: "success",
  });
};

async function newsletterForm (captchaToken) {
  if (!emailRegex.test(newsletterEmailInput.value)) {
    return swal({
      title: "Błędny email!",
      icon: "error",
    });
  }
  newsletterButton.innerHTML = "Zapisywanie...";
  newsletterButton.disabled = true;
  newsletterButton.classList.add("button-disabled");

  await fetch(`${apiUrl}/kis/newsletter`, {
    method: "POST",
    mode: "cors",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: newsletterEmailInput.value,
      captcha: captchaToken
    })
  });

  newsletterButton.innerHTML = "Zapisano!";
  newsletterEmailInput.value = "";
  swal({
    title: "Sukces!",
    text: "Zapisano do newslettera!",
    icon: "success",
  });
};
