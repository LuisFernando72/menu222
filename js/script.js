const allSideMenu = document.querySelectorAll("#sidebar .side-menu.top li a");
const ul = document.querySelectorAll("#sidebar ul li ul");

let opcion = document.querySelectorAll(".opcion");
let opcion2 = document.querySelectorAll(".opcion2");

opcion.forEach(function (item) {
  item.addEventListener("click", function (i) {
    let elemento = i.target.parentNode;
    elemento.children[1].classList.toggle("activo");
  });
});

allSideMenu.forEach(item=> {
	const li = item.parentElement;

	item.addEventListener('click', function () {
		allSideMenu.forEach(i=> {
			i.parentElement.classList.remove('active');
		})
		li.classList.add('active');
	})
});


const body = document.querySelector("body");
const sidebar_toggle = body.querySelector("#content nav .bx.bx-menu");
const modeToggle = body.querySelector("#switch-mode");
const sidebar = body.querySelector("#sidebar");

let getMode = localStorage.getItem("mode");
if (getMode && getMode === "dark") {
  body.classList.toggle("dark");
}
let getStatus = localStorage.getItem("status");
if (getStatus && getStatus === "close") {
  sidebar.classList.toggle("close");
}

modeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  if (body.classList.contains("dark")) {
    localStorage.setItem("mode", "dark");
  } else {
    localStorage.setItem("mode", "light");
  }
});

sidebar_toggle.addEventListener("click", () => {
  sidebar.classList.toggle("hide");
  if (sidebar.classList.contains("close")) {
    localStorage.setItem("status", "close");
  } else {
    localStorage.setItem("status", "open");
  }
});

// // TOGGLE SIDEBAR
// const menuBar = document.querySelector("#content nav .bx.bx-menu");
// const sidebar = document.getElementById("sidebar");

// menuBar.addEventListener("click", function () {
//   sidebar.classList.toggle("hide");
// });

// const switchMode = document.getElementById("switch-mode");

// switchMode.addEventListener("change", function () {
//   if (this.checked) {
//     document.body.classList.add("dark");
//   } else {
//     document.body.classList.remove("dark");
//   }
// });
