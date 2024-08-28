const result = document.querySelector("#result");
const back = document.querySelector("#back");
const btns = document.querySelectorAll(".num");

let finalResult = "";
back.style.display = "none";

back.addEventListener("click", () => {
  finalResult = finalResult.substring(0, finalResult.length - 1);
  result.textContent = finalResult;
  if (finalResult.length == 0) {
    back.style.display = "none";
  }
});

btns.forEach((i) => {
  i.addEventListener("click", () => {
    back.style.display = "block";
    if (finalResult.length == 10) {
      alert("Max 10 digits allowed!!");
    } else {
      finalResult += i.textContent.trim();
      result.textContent = finalResult;
    }
  });
});
