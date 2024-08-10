const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e)=>{
    navLinks.classList.toggle("open")

    const isOpen = navLinks.classList.contains("open")
    menuBtnIcon.setAttribute("class", isOpen?"ri-close-line":"ri-menu-3-line");
});

navLinks.addEventListener("click", (e)=>{
    navLinks.classList.remove("open")
    menuBtnIcon.setAttribute("class", "ri-menu-3-line")
});

const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
  };
  
  // header container
  ScrollReveal().reveal(".header_image img", {
    ...scrollRevealOption,
  });
  
  ScrollReveal().reveal(".header_content h4", {
    ...scrollRevealOption,
    delay: 500,
  });
  
  ScrollReveal().reveal(".header_content h1", {
    ...scrollRevealOption,
    delay: 1000,
  });
  
  ScrollReveal().reveal(".header_content p", {
    ...scrollRevealOption,
    delay: 1500,
  });
  
  ScrollReveal().reveal(".header_content .btn", {
    ...scrollRevealOption,
    delay: 2000,
  });

  // About container 
  ScrollReveal().reveal(".about_image img", {
    ...scrollRevealOption,
    origin: "left",
  });

  ScrollReveal().reveal(".about_content .section_header", {
    ...scrollRevealOption,
    delay: 500,
  });

  ScrollReveal().reveal(".about_content p", {
    ...scrollRevealOption,
    delay: 1000,
  });

  ScrollReveal().reveal(".about_content h4", {
    ...scrollRevealOption,
    delay: 1500,
  });

  ScrollReveal().reveal(".about_btns", {
    ...scrollRevealOption,
    delay: 2000,
  });

