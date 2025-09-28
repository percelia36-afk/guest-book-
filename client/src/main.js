async function fetchGuests() {
  const response = await fetch("http://localhost8080:/guests");
  const jokes = await response.json();
  console.log(guests);
}

fetchGuests();
