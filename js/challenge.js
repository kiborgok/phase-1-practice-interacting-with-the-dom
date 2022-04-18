let counterElement = document.getElementById("counter");
let incrementElement = document.getElementById("plus");
let decrementElement = document.getElementById("minus");
let heartElement = document.getElementById("heart");
let likesElement = document.querySelector(".likes");
let counterValue = parseInt(counterElement.textContent);
let submit = document.getElementById("submit");
let pause = document.getElementById("pause");
let form = document.querySelector("form");
let commentListDiv = document.getElementById("list")

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let commentVal = form.querySelector("#comment-input").value;
  let p = document.createElement("p")
  p.textContent = commentVal
  commentListDiv.appendChild(p)
});

let timeOutId = setInterval(() => {
  counterValue += 1;
  counterElement.textContent = counterValue;
}, 1000);

pause.addEventListener("click", () => {
  if (pause.textContent === "pause") {
    pause.textContent = "resume";
    incrementElement.setAttribute("disabled", true);
    decrementElement.setAttribute("disabled", true);
    heartElement.setAttribute("disabled", true);
    submit.setAttribute("disabled", true);
    clearInterval(timeOutId);
  } else {
    pause.textContent = "pause";
    incrementElement.removeAttribute("disabled");
    decrementElement.removeAttribute("disabled");
    heartElement.removeAttribute("disabled");
    submit.removeAttribute("disabled");
    timeOutId = setInterval(() => {
      counterValue += 1;
      counterElement.textContent = counterValue;
    }, 1000);
  }
});

incrementElement.addEventListener("click", () => {
  counterValue += 1;
  counterElement.textContent = counterValue;
});

decrementElement.addEventListener("click", () => {
  counterValue -= 1;
  counterElement.textContent = counterValue;
});

heartElement.addEventListener("click", (e) => {
  let clicks = 1;
  let lastChild = likesElement.children[likesElement.children.length - 1];
  if (
    lastChild &&
    parseInt(lastChild.textContent) === parseInt(counterElement.textContent)
  ) {
    return (lastChild.textContent = `${parseInt(
      counterElement.textContent
    )} has been liked ${(clicks += 1)} times`);
  }
  let like = document.createElement("li");
  like.textContent = `${parseInt(
    counterElement.textContent
  )} has been liked ${clicks} time`;

  return likesElement.append(like);
});
