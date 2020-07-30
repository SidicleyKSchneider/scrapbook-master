let titleInput = document.getElementById("messageTitle");
let messageInput = document.getElementById("messageBody");
let addScrapBtn = document.getElementById("addButton");
let scrapsField = document.getElementById("scrapsField");

let scraps = [];

function renderScraps() {
  scrapsField.innerHTML = "";

  for (const scrap of scraps) {
    let position = scraps.indexOf(scrap);
    scrapsField.innerHTML += createScrapCard(
      scrap.title,
      scrap.message,
      position
    );
  }
}

function addNewScrap() {
  let title = titleInput.value;
  let message = messageInput.value;

  titleInput.value = "";
  messageInput.value = "";

  scraps.push({ title, message });

  renderScraps();
}

function createScrapCard(title, message, position) {
  return `
  <div class="message-cards card text-white bg-dark m-2 col-3">
    <div class="card-header font-weight-bold">${title}</div>
    <div>
    </div>
    <div class="card-body">
      <p class="card-text">
        ${message}
      </p>
    </div>
    <button class="btn btn-dark btn-sm" onclick=deleteScraps(${position})>Excluir</button>
  </div>
  `;
}

function deleteScraps(position) {
  scraps.splice(position, 1);
  renderScraps();
}

renderScraps();
addScrapBtn.onclick = addNewScrap;
