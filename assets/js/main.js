menu = document.querySelector("[data-menu]");
menuLateral = document.querySelector("[data-menuLateral]");

menu.addEventListener('click', () =>{
    menuLateral.classList.toggle("ativo");
  })
