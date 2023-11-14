// A function that adds and remove the class "active" on the section you click on.
function toggle(e) {
  const element = e.currentTarget;
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
    const containerEl = document.createElement("div");
    containerEl.setAttribute("class", "container");

    const postTitleEl = document.createElement("div");
    postTitleEl.setAttribute("class", "section");

    postTitleEl.innerHTML = `
    <i class="fa-solid fa-angle-down arrow" ></i>
    <h2> ${datapost.title} </h2>`;

    postTitleEl.addEventListener("click", toggle);

    accordionElement.appendChild(containerEl);

    containerEl.appendChild(postTitleEl);

    const postBodyEl = document.createElement("div");
    postBodyEl.setAttribute("class", "description");
    postBodyEl.innerHTML = `<p> ${datapost.body} </p>`;

    containerEl.appendChild(postBodyEl);
    //const angleArrow = document.createElement("i");
    //angleArrow.setAttribute("class", "fa-solid fa-angle-down arrow");

    //containerEl.appendChild(angleArrow);
  });

  const allElements = document.querySelectorAll(".container");
  addBackgroundColor(allElements);
}
getPost();
