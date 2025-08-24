// console.log("hello");
document.getElementById("btn-update-text").addEventListener("click", function updateText() {
  //   console.log("btn Clicked");
  const title = document.getElementById("title-text");
  title.innerText = "Text Updated";
});

document.getElementById("update-name").addEventListener("click", function () {
  const inputName = document.getElementById("input-name");
  const name = inputName.value;

  const nameUpdate = document.getElementById("name");
  nameUpdate.innerText = name;
});
