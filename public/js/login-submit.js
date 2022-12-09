const LOGIN_REQUEST = "/api/v1/auth/login";

const form = document.getElementById("form");
const errorSpan = document.getElementById("error");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = form.email.value;
  const password = form.password.value;

  try {
    errorSpan.innerText = "";

    const result = await axios.post(LOGIN_REQUEST, {
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
