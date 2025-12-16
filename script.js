const buyButtons = document.querySelectorAll(".buy");
const name=document.querySelectorAll("b").innerText

buyButtons.forEach(btn => {
  btn.addEventListener("click", (e) => {
    alert(e.target.name);
  });
});
