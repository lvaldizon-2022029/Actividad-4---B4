const API_URL = "https://jsonplaceholder.typicode.com/users";

const usersContainer = document.querySelector("#users-container");
const searchInput = document.querySelector("#search-input");
const statusMessage = document.querySelector("#status-message");
const statusArea = document.querySelector(".status-area");

let users = [];

async function fetchUsers() {
  try {
    setStatus("Cargando usuarios...");
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error("No se pudo obtener los usuarios");
    }

    users = await response.json();
    renderUsers(users);
  } catch (error) {
    statusArea.classList.add("error");
    setStatus(
      "Ocurrió un error al cargar los usuarios, intente nuevamente más tarde",
    );
    console.error(error);
  }
}

function renderUsers(usersToRender) {
  usersContainer.innerHTML = "";

  if (usersToRender.length === 0) {
    usersContainer.innerHTML = `
      <div class="empty-state">
        <p>No se encontraron usuarios con ese criterio</p>
      </div>
    `;
    setStatus("0 usuarios encontrados");
    return;
  }

  const fragment = document.createDocumentFragment();

  usersToRender.forEach((user) => {
    fragment.appendChild(createUserCard(user));
  });

  usersContainer.appendChild(fragment);
  setStatus(`${usersToRender.length} usuarios encontrados.`);
}

function createUserCard(user) {
  const article = document.createElement("article");
  article.className = "user-card";

  const initials = getInitials(user.name);

  article.innerHTML = `
    <div class="user-header">
      <div class="avatar" aria-hidden="true">${initials}</div>
      <div>
        <h3 class="user-name">${user.name}</h3>
        <p class="user-username">@${user.username}</p>
      </div>
    </div>

    <div class="user-details">
      <p><strong>Correo:</strong> ${user.email}</p>
      <p><strong>Teléfono:</strong> ${user.phone}</p>
      <p>
        <strong>Ciudad:</strong>
        ${user.address.city}
      </p>
    </div>

    <p class="user-company">
      <strong>Empresa:</strong> ${user.company.name}
    </p>
  `;

  return article;
}

function getInitials(name) {
  return name
    .split(" ")
    .map((word) => word[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

function filterUsers() {
  const searchTerm = searchInput.value.trim().toLowerCase();

  const filteredUsers = users.filter((user) => {
    const searchableText = [
      user.name,
      user.username,
      user.email,
      user.address.city,
      user.company.name,
    ]
      .join(" ")
      .toLowerCase();

    return searchableText.includes(searchTerm);
  });

  renderUsers(filteredUsers);
}

function setStatus(message) {
  statusMessage.textContent = message;
}

searchInput.addEventListener("input", filterUsers);

fetchUsers();
