const showNavbar = document.querySelector(".expand-navbar");

showNavbar.onclick = ()=>
{
    document.querySelector(".pop-up-navbar").style.display = "flex";
    document.querySelector(".pop-up-navbar").style.width = "100%";
    document.querySelector(".pop-up-navbar").style.left = "0%";
    document.querySelector(".pop-up-navbar").style.position = "fixed";
}

function hideNavbar()
{
    document.querySelector(".pop-up-navbar").style.width = "0%";
    document.querySelector(".pop-up-navbar").style.left = "-20%";
}

const home = document.getElementById("home");
const about = document.getElementById("about");
const contact = document.getElementById('contacts')

const home_page = document.getElementById("home-page")
const about_page = document.getElementById("about-page")

home.onclick = () => {
    console.log("hi")
   window.scrollTo(0, home_page.offsetHeight);
}

about.onclick = () => {
    console.log("Hello")
    window.scrollTo(0, about_page.offsetHeight);
    console.log(about_page.offsetHeight)
}

contact.onclick = () => {
    window.scrollTo(contact_page.offsetHeight, 0);
}
