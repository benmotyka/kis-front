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
button.innerHTML = 'Wysyłanie...'
button.disabled = true
button.classList.add("button-disabled");
  const result = await sendMessage()

button.innerHTML = 'Wysłano!'
    swal({
      title: "Sukces!",
      text: "Wiadomość wysłana pomyślnie!",
      icon: "success",
    });
});

const sendMessage = async () => {
    await new Promise((res) => setTimeout(res, 1000))
};
