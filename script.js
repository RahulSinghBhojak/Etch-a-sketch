const btn = document.querySelector("#gridBtn");
btn.addEventListener("click", () => {
  let box = Number(prompt("how many grid do you want?"));
  const div = document.querySelector("#container");
  div.textContent = "";
  for (let i = 0; i < box; i++) {
    const row = document.createElement("div");
    row.style.display = "flex";
    for (let j = 0; j < box; j++) {
      const col = document.createElement("div");
      col.classList.add("allcol");
      row.appendChild(col);
    }
    div.appendChild(row);
  }
  div.addEventListener("mousemove", (e) => {
    if (e.target.classList.contains("allcol")) {
      e.target.style.backgroundColor = "red";
    }
  });
});
