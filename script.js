const win = document.getElementById("window");
const title = document.getElementById("title");
const content = document.getElementById("content");

/* ---------------------------
   APP REGISTRY (MODULAR)
----------------------------*/
const apps = {
  "Game 1": () => {
    return `
      <p>Question: 2 + 2 = ?</p>
      <button onclick="alert('Correcto ✔')">4</button>
      <button onclick="alert('Incorrecto ✖')">5</button>
    `;
  },

  "Game 2": () => {
    return `
      <p>Placeholder game slot.</p>
      <button onclick="alert('Try again')">Try</button>
    `;
  },

  "Notes": () => {
    return `<textarea placeholder="write something..."></textarea>`;
  },

  "Terminal": () => {
    return `<p>$ beige-shell v0.1</p>`;
  }
};

/* ---------------------------
   WINDOW CONTROLS
----------------------------*/
function openApp(name) {
  win.style.display = "flex";
  title.textContent = name;

  const app = apps[name];

  if (app) {
    content.innerHTML = app();
  } else {
    content.innerHTML = `<p>Empty app slot.</p>`;
  }
}

function closeWindow() {
  win.style.display = "none";
}

/* ---------------------------
   DRAG SYSTEM (SIMPLE WINDOW)
----------------------------*/
let isDragging = false;
let offsetX = 0;
let offsetY = 0;

const titlebar = document.getElementById("titlebar");

titlebar.addEventListener("mousedown", (e) => {
  isDragging = true;
  offsetX = e.clientX - win.offsetLeft;
  offsetY = e.clientY - win.offsetTop;
});

document.addEventListener("mousemove", (e) => {
  if (!isDragging) return;

  win.style.left = (e.clientX - offsetX) + "px";
  win.style.top = (e.clientY - offsetY) + "px";
});

document.addEventListener("mouseup", () => {
  isDragging = false;
});

/* ---------------------------
   OPTIONAL: ESC TO CLOSE
----------------------------*/
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeWindow();
  }
});
