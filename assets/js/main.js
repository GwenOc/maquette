const navbar = document.getElementById("navbar");
const navbarToggle = navbar.querySelector(".navbar-toggle");

function openMobileNavbar() {
  navbar.classList.add("opened");
  navbarToggle.setAttribute("aria-label", "Close navigation menu.");
}

function closeMobileNavbar() {
  navbar.classList.remove("opened");
  navbarToggle.setAttribute("aria-label", "Open navigation menu.");
}

navbarToggle.addEventListener("click", () => {
  if (navbar.classList.contains("opened")) {
    closeMobileNavbar();
  } else {
    openMobileNavbar();
  }
});

const navbarMenu = navbar.querySelector(".navbar-menu");
const navbarLinksContainer = navbar.querySelector(".navbar-links");

navbarLinksContainer.addEventListener("click", (clickEvent) => {
  clickEvent.stopPropagation();
});

navbarMenu.addEventListener("click", closeMobileNavbar);

/*=====================================
    Sticky
    ======================================= */
    window.onscroll = function () {
     const nav = document.querySelector(".navbar-container");
      var sticky = nav.offsetTop;

      if (window.pageYOffset > sticky) {
          nav.classList.add("sticky");
      } else {
         nav.classList.remove("sticky");
      }
    }


        // for menu scroll 
        var pageLink = document.querySelectorAll('.page-scroll');
    
        pageLink.forEach(elem => {
            elem.addEventListener('click', e => {
                e.preventDefault();
                document.querySelector(elem.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth',
                    offsetTop: 1 -64,
                });
            });
        });


        