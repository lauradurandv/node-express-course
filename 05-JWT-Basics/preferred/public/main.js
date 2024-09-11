const base_url = "http://localhost:3000/api/v1";
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");

const handleLogin = async (event) => {
  event.preventDefault();

  const formData = {
    username: usernameInput.value,
    password: passwordInput.value,
  };

  try {
    const response = await fetch(`${base_url}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const result = await response.json();
    localStorage.setItem("token", result.token);
    const container = document.getElementById("loginMessage");
    container.innerHTML = `<p>${result.msg}</p>`;
  } catch (error) {
    localStorage.removeItem("token");
    const container = document.getElementById("loginMessage");
    container.innerHTML = `<p>no token present</p>`;
  }
};

const getData = async () => {
  const token = localStorage.getItem("token");
  try {
    const response = await fetch(`${base_url}/dashboard`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    const container = document.getElementById("data");
    container.innerHTML = `<p>${data.msg}</p> <p>${
      data.secret ? data.secret : "Data not available"
    }</p>`;
  } catch (error) {
    localStorage.removeItem("token");
    console.log(error);
  }
};
