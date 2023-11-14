// A function that adds and remove the class "active" on the section you click on.
function toggle(e) {
  const element = e.target;
  element.classList.toggle("active");
}

const accordionElement = document.querySelector(".accordion");
//bakgrundfunktion
const addBackgroundColor = (arr) => {
  arr.forEach((element, index) => {
    if (index % 2 == 0) {
      element.style.backgroundColor = "lightblue";
    } else element.style.backgroundColor = "plum";
  });
};
async function getPost() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  data.forEach((datapost) => {
    console.log(datapost);
    const postTitleEl = document.createElement("div");
    postTitleEl.setAttribute("class", "section");
    postTitleEl.innerHTML = `<h2> ${datapost.title} </h2>`;

    postTitleEl.addEventListener("click", toggle);
    accordionElement.appendChild(postTitleEl);

    const postBodyEl = document.createElement("div");
    postBodyEl.setAttribute("class", "description");
    postBodyEl.innerHTML = `<p> ${datapost.body} </p>`;

    postTitleEl.appendChild(postBodyEl);
  });

  const allElements = document.querySelectorAll(".section");
  addBackgroundColor(allElements);
}
getPost();
