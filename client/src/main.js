async function fetchGuests() {
  const response = await fetch(
    "https://dashboard.render.com/web/srv-d3cq320gjchc739duu40"
  );
  const guests = await response.json();
  console.log(guests);

  guests.forEach((entry) => {
    renderGuest(entry);
  });
}

function renderGuest(entry) {
  const div = document.createElement("div");
  const pGuest = document.createElement("p");
  const pComment = document.createElement("p");

  pGuest.innerText = `Guest: ${entry.guest}`;
  pComment.innerText = `Comment: ${entry.comment}`;

  div.setAttribute("class", "guest-container");
  div.append(pGuest, pComment);
  document.getElementById("app").appendChild(div);
}

fetchGuests();

const form = document.getElementById("form");

form.addEventListener("submit", async function (event) {
  event.preventDefault();

  const beeInformation = new FormData(form);
  const data = Object.fromEntries(beeInformation.entries());

  console.log(data);

  const responseFromAPI = await fetch(
    "https://dashboard.render.com/web/srv-d3cq320gjchc739duu40",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  const result = await responseFromAPI.json();
  console.log(result);

  // Display the new guest immediately
  renderGuest(result);

  form.reset();
});
