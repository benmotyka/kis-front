document.getElementById("year").innerHTML = new Date().getFullYear();
const form = document.getElementById("contact-form");
const button = document.getElementById("form-button");

const emailInput = document.getElementById("email");
const nameInput = document.getElementById("name");
const subjectInput = document.getElementById("subject");
const messageInput = document.getElementById("message");

const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

form.addEventListener("submit", async (event) => {
  event.preventDefault();

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
  button.innerHTML = "Wysyłanie...";
  button.disabled = true;
  button.classList.add("button-disabled");

  Email.send({
    SecureToken: "ba9db934-19ed-4fdf-a5a7-ccd7f8e223bb",
    To: "160780@stud.prz.edu.pl",
    From: "randomowyemailbena@spoko.pl",
    Subject: "Keep IT Secure Message",
    Body: `Nadawca: ${emailInput.value} (${nameInput.value})
    Wysyła wiadomość temacie: 
    ${subjectInput.value}

    oraz treści:
    ${messageInput.value}`,
  }).then((message) => {
    console.log(message)
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
  });
});
