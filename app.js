// Menu slider //

window.onload = () => {
    setTimeout(() => {
      document.querySelector("body").classList.add("display");
    }, 1);
  };

document.querySelector(".hamburger").
addEventListener("click", () => {
    document.querySelector(".menu-continer").classList.toggle("change");
});

  
