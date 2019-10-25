const ul = document.getElementById("authors");
const url = "https://randomuser.me/api/?results=10";

function createNode(element) {
  return document.createElement(element);
}
function append(parent, el) {
  return parent.appendChild(el);
}

fetch(url)
  .then(resp => resp.json())
  .then(function(data) {
    let people = data.results; //gets results
    return people.map(function(author) {
      //maps through results and for each run the code below
      let li = createNode("li"), //create elements needed
        img = createNode("img"),
        span = createNode("span");
      img.src = author.picture.medium; //add the source of the img to be the src of the img element
      span.innerHTML = `${author.name.first} ${author.name.last}`; //make the html of the span to be the first and last name of the author
      append(li, img); //append the elements
      append(li, span);
      append(ul, li);
    });
  })
  .catch(function(error) {
    console.log(error);
  });
