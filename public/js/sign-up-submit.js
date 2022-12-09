const SIG_UP_REQUEST = "/api/v1/auth/sign-up";

const form = document.getElementById("form");
const errorSpan = document.getElementById("error");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = form.name.value;
  const email = form.email.value;
  const password = form.password.value;

  try {
    errorSpan.innerText = "";
    const result = await axios.post(SIG_UP_REQUEST, {
      name,
      email,
      password,
    });

    location.assign("/main");
  } catch (err) {
    const msg =
      err?.response.data.message || "Something went wrong, try again later";

    errorSpan.innerText = msg;
  }
});
