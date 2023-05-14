const hamMenu = document.querySelector(".hamburgerMenu");
const offScreen = document.querySelector(".offScreen");
hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreen.classList.toggle("active");
  document.querySelector('body').classList.toggle('hidden');
});

const sr = ScrollReveal({
origin: 'top',
distance: '60px',
duration: 2500,
delay: 300,
});

sr.reveal(`.mainFirst`);
sr.reveal(`.mainSecond`, {delay: 600, interval: 200, origin: 'right'});
sr.reveal(`.mainThird`, {delay: 900, interval: 200, origin: 'left'});
sr.reveal(`.mainFourth`, {delay: 1100, interval: 200});
sr.reveal(`.mainFifth`, {delay: 700, origin: 'bottom', interval: 200});
sr.reveal(`.mainSixth`, {interval: 100});
sr.reveal(`.mainSeventh`, {origin: 'left', interval: 200});
sr.reveal(`.firstRowimg`);
sr.reveal(`.secondRowimg`, {origin: 'left'});
sr.reveal(`.thirdRowimg`, {origin: 'right'});
sr.reveal(`.fourthRowimg`, {origin: 'left'});