const API_URL = "https://jsonplaceholder.typicode.com/users";

const get = (target) => {
  return document.querySelector(target);
};

const $info = get(".user-list");

const createUserElement = (info) => {
  const { id, name, username, email, phone } = info;
  const $userInfo = document.createElement("ul");
  $userInfo.classList.add("user-item");
  $userInfo.innerHTML = `
    <div class = 'userName'>[${id}] ${username}</div>
    <li>name : ${name}</li>
    <li>email : ${email}</li>
    <li>phone : ${phone}</li>
  `;
  return $userInfo;
};

const renderAlluser = (info) => {
  $info.innerHTML = "";
  info.forEach((info) => {
    const UserElement = createUserElement(info);
    $info.appendChild(UserElement);
  });
};

const getUsers = () => {
  fetch(API_URL)
    .then((response) => response.json())
    .then((info) => renderAlluser(info))
    .then((error) => console.log(error));
};

const init = () => {
  window.addEventListener("DOMContentLoaded", () => {
    getUsers();
  });
};

init();
