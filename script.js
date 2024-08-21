document.addEventListener("DOMContentLoaded", function() {
    // Obtém o título principal
    const titulo = document.getElementById("titulo-principal");

    // Verifica se o título existe antes de adicionar eventos
    if (titulo) {
        // Altera o texto e a cor do título quando o mouse passa sobre ele
        titulo.addEventListener("mouseover", function() {
            titulo.textContent = "Fico feliz em ter você aqui!";
            titulo.style.color = '#2196F3'; // Azul ao passar o mouse
        });

        // Restaura o texto e a cor do título quando o mouse sai
        titulo.addEventListener("mouseout", function() {
            titulo.textContent = "Bem-vindo ao meu portfólio!";
            titulo.style.color = '#d5006d'; // Cor padrão rosa quando o mouse sai
        });
    }

    // Obtém todos os links do menu de navegação
    const menuLinks = document.querySelectorAll('nav ul li a');

    // Altera a cor dos links e remove o fundo branco quando o mouse passa sobre eles
    menuLinks.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.color = '#2196F3'; // Azul claro quando o mouse passa sobre o link
            link.style.backgroundColor = '#d5006d'; // Mantém o fundo rosa
        });
        link.addEventListener('mouseout', () => {
            link.style.color = '#fff'; // Cor padrão quando o mouse sai do link
            link.style.backgroundColor = '#d5006d'; // Mantém o fundo rosa
        });
    });

    // Aplica um estilo dinâmico para o parágrafo "MARILIA ABRÃO"
    const paragrafoMarilia = document.querySelector('#marilia-abrao');
    
    if (paragrafoMarilia) {
        // Adiciona interação para mudar a cor do texto quando o mouse passa sobre o parágrafo
        paragrafoMarilia.addEventListener('mouseover', () => {
            paragrafoMarilia.style.color = '#d5006d'; // Cor rosa escuro ao passar o mouse
        });
        paragrafoMarilia.addEventListener('mouseout', () => {
            paragrafoMarilia.style.color = '#2196F3'; // Cor azul ao sair do mouse
        });
    }
});
