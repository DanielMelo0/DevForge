document.querySelector(".load-more").addEventListener("click", function () {
  const hiddenItems = document.querySelectorAll(".hidden");
  const button = document.querySelector(".load-more");

  hiddenItems.forEach((item) => {
    if (item.style.display === "none" || item.style.display === "") {
      item.style.display = "block";
      button.textContent = "Ver menos";
    } else {
      item.style.display = "none";
      button.textContent = "Ver mais";
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".navbar .links");

  // Função para alternar a visibilidade do menu
  function toggleMenu() {
    navLinks.classList.toggle("active");
  }

  // Adiciona evento de clique ao botão hambúrguer
  hamburger.addEventListener("click", toggleMenu);

  // Adiciona evento de clique aos links para fechar o menu após o clique
  navLinks.addEventListener("click", function (e) {
    if (e.target.tagName === "A") {
      // Certifica-se de que o clique é em um link
      toggleMenu();
    }
  });

  // Evento de clique para fechar o menu se clicar fora dele
  document.addEventListener("click", function (e) {
    if (
      !hamburger.contains(e.target) &&
      !navLinks.contains(e.target) &&
      navLinks.classList.contains("active")
    ) {
      toggleMenu();
    }
  });
});
