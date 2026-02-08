
// Call it for header and footer
loadHTML("header", "header.html");
loadHTML("footer", "footer.html");



// Function that loads a file and puts it inside an element
function loadHTML(id, file) {
  fetch(file) // ask the browser to get the file
    .then(response => response.text()) // convert the response to text
    .then(data => {
      document.getElementById(id).innerHTML = data; // insert into page
      if(id==="header") {
        runJS();
      }

    })
    .catch(error => console.log("Error loading file:", error));
}

function runJS() {
}


