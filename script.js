const div = document.querySelector("#container");
for (let i = 0; i < 16; i++) {
  const row = document.createElement("div");
  row.style.display = "flex";
  for (let j = 0; j < 16; j++) {
    const col = document.createElement("div");
    col.classList.add("allcol");
    row.appendChild(col);
  }
  div.appendChild(row);
}

const div2 = document.querySelector("#container");
div2.addEventListener("mousemove", (e) => {
  if (e.target.classList.contains("allcol")) {
    e.target.style.backgroundColor = "red";
  }
});
