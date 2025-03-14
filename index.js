
document.querySelector(".navbars").innerHTML=`
  <div class="navbar">
  <div class="logo">
      <a href="index.html">DreamZ_Detailing</a>
  </div>
    <div class="hamburger" id="hamburger">
      &#9776;
    </div>
    <ul class="nav-links" id="navLinks">
      <li><a href="form.html">Form</a></li>
      
    </ul>
  </div>   

`

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  if (hamburger && navLinks) {  // Check if elements exist before using them
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }
});