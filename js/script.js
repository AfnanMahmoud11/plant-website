const copiedBtn = document.querySelectorAll(".copied_btn");
// console.log(copiedBtn);
const copiedText = document.querySelectorAll(".copied-text");
// console.log(copiedText);
copiedBtn.forEach((ele, index) => {
  ele.addEventListener("click", function () {
    copiedText[index].classList.remove("d-none");
    copiedText[index].classList.add("d-inline");
    setTimeout(() => {
      copiedText[index].classList.remove("d-inline");
      copiedText[index].classList.add("d-none");
    }, 2000);
  });
});
