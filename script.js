const title = document.getElementById("big_title");
title.innerHTML = "Just Enjoy Food !";

title.style.color = "blue";

const home = document.getElementById("home_link");

const TextChange = (action) => {
    home.innerHTML = action;
}
home.addEventListener('click', TextChange("Go Back to Top !"));