// A function that adds and remove the class "active" on the section you click on.
function toggle(e) {
  const element = e.target;
  element.classList.toggle("active");
}

// Selects and HTML element, and calls a function which will be executed when the element is clicked.
const section1Element = document.getElementById("section1");
const section2Element = document.getElementById("section2");
const section3Element = document.getElementById("section3");
const accordionElement = document.querySelector(".accordion");

section1Element.addEventListener("click", toggle);
section2Element.addEventListener("click", toggle);
section3Element.addEventListener("click", toggle);

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
}
getPost();
