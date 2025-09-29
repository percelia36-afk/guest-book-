async function fetchGuests() {
  const response = await fetch("http://localhost:8080/guests");
  const guests = await response.json();
  console.log(guests);

  guests.forEach((entry) => {
    const div = document.createElement("div");
    const pGuest = document.createElement("p");
    const pComment = document.createElement("p");

    pGuest.innerText = `Guest: ${entry.guest}`;
    pComment.innerText = `Comment: ${entry.comment}`;

    div.setAttribute("class", "guest container-container");
    div.append(pGuest, pComment);
    document.body.appendChild(div);
  });
}

fetchGuests();
// dealing with form submissions
const form = document.getElementById("form");
// listen for the form submit event

form.addEventListener("submit", async function (event) {
  event.preventDefault();

  const beeInformation = new FormData(form);
  //
  const data = Object.fromEntries(beeInformation);

  console.log(data);
  // we want to send the data varible to the server.
  // we will send a post request to the server along with our bee data.
  // if you dont give it a second argument, fetch will always do a get request.
  const responseFromAPI = await fetch(`http://localhost:8080/bees`, {
    // tell it what method we're making this request with
    method: "POST",
    // what tpe of data are we sending
    headers: {
      "Content-Type": "application/json",
    },
    // we always put the main data of the request - in this case the information from the form, in the 'body' of the request
    body: JSON.stringify(data),
  });
});
