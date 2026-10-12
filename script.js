const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

menuButton?.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
  menuButton.textContent = isOpen ? "✕" : "☰";
});

nav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton?.setAttribute("aria-expanded", "false");
    if (menuButton) {
      menuButton.setAttribute("aria-label", "Abrir menu");
      menuButton.textContent = "☰";
    }
  });
});

// DEMO: substitua pelo WhatsApp oficial do consultório antes de publicar.
// Formato: https://wa.me/5511999999999 (somente números, com código do país).
const whatsappNumber = "5517982099458";
const defaultMessage = "Olá! Gostaria de informações sobre uma consulta odontológica.";
const whatsappUrl = whatsappNumber
  ? `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`
  : "https://www.google.com.br/maps/place/Dr+Pedro+Patriani+-+Cirurgi%C3%A3o+Dentista+-+24+Horas/@-21.1383466,-48.9875261,15z/";

document.querySelectorAll(".whatsapp-link").forEach((link) => {
  link.href = whatsappUrl;
  if (!whatsappNumber) {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      alert("Esta é uma página de demonstração. Insira o WhatsApp oficial do consultório no arquivo script.js antes de publicar.");
    });
  }
});
