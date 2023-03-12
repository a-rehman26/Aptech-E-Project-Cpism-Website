// responsive navbar 

let navTop = document.querySelector(".navResicon");

navTop.addEventListener("click", () => navF());

let navbarTop = document.querySelector(".navbarMaindiv");

let navF = () => {
    navbarTop.classList.toggle("activeNavbar");
}


