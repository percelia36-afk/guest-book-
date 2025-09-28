async function fetchGuests() {
  const response = await fetch("http://localhost:8080/guests");
  const guests = await response.json();
  console.log(guests);
}

fetchGuests();
