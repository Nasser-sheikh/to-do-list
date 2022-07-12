const button = document.querySelector("button");
const container = document.getElementById("container");
const input = document.querySelector("input");
const form = document.querySelector("form");

form.addEventListener("submit", (eo) => {
  eo.preventDefault();
  const task = `  <div class="task">
  <span class="icon-star icon">
    <h4 class="icon-star-explain">Priority</h4></span
  >
  <p class="task-text">${input.value}</p>
  <div>
    <span class="icon-trash icon">
      <h4 class="icon-trash-explain">Delete</h4></span
    >
    <span class="icon-angry2 icon">
      <h4 class="icon-angry2-explain">Done</h4></span
    >
  </div>
</div>
`;
  //container.append(task); //append add to the top prepend to the bottom
  container.innerHTML += task; //innerHTML to add an html ele
  input.value = "";
});

container.addEventListener("click", (eo) => {
  switch (eo.target.className) {
    case "icon-trash icon":
      eo.target.parentElement.parentElement.remove(); //eo target to target the html ele,
      break;

    case "icon-angry2 icon":
      eo.target.classList.add("dn");
      const heart = `<span class="icon-heart"
      ><h4 class="icon-heart-explain">Not done</h4></span
    > `;
      eo.target.parentElement.parentElement
        .getElementsByClassName("task-text")[0]
        .classList.add("finish");
      eo.target.parentElement.innerHTML += heart; //+= to add after deleting the innerHTML should be at the bottom of the code block if there'is many eo.target
      break;

    case "icon-heart":
      eo.target.parentElement.parentElement
        .getElementsByClassName("task-text")[0]
        .classList.remove("finish");
      eo.target.classList.add("dn");
      const angry = `  <span class="icon-angry2 icon">
      <h4 class="icon-angry2-explain">Done</h4></span
    >`;
      eo.target.parentElement.innerHTML += angry;
      break;

    case "icon-star icon":
      eo.target.classList.add("orange");
      container.prepend(eo.target.parentElement);
      break;

    case "icon-star icon orange":
      eo.target.classList.remove("orange");
      break;

    default:
      break;
  }
});
