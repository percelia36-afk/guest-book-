async function fetchGuests() {
  const response = await fetch("https://localhost:8080/guests");
  const jokes = await response.json();
  console.log(guests);
}

fetchGuests();
