const API_URL = "https://guest-book-gept.onrender.com/guests";

async function fetchGuests() {
  try {
    const response = await fetch(API_URL);
    const guests = await response.json();
    guests.forEach(renderGuest);
  } catch (error) {
    console.error("Error fetching guests:", error);
  }
}

function renderGuest(entry) {
  const div = document.createElement("div");
  const pGuest = document.createElement("p");
  const pComment = document.createElement("p");

  pGuest.innerText = `Guest: ${entry.guest}`;
  pComment.innerText = `Comment: ${entry.comment}`;

  div.className = "guest-container";
  div.append(pGuest, pComment);
  document.getElementById("app").appendChild(div);
}

fetchGuests();

const form = document.getElementById("form");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    renderGuest(result); // Use server response
    form.reset();
  } catch (error) {
    console.error("Error submitting guest:", error);
  }
});
