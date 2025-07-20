const mobileButton = document.getElementById("menuButton");
mobileButton.addEventListener("click", () => {
  const mobileMenu = document.getElementById("mobileMenu");
  const closeIcon = document.getElementById("close");
  const openIcon = document.getElementById("open");
  const content = document.getElementById("content");

  content.classList.toggle("hidden");
  closeIcon.classList.toggle("hidden");
  openIcon.classList.toggle("hidden");
  mobileMenu.classList.toggle("bg-black");
  mobileMenu.getElementsByTagName("ul")[0].classList.toggle("hidden");
  mobileMenu.getElementsByTagName("ul")[0].classList.toggle("flex");
  document.body.classList.toggle("overflow-y-hidden");
});
