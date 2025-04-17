(function () {
    const track = document.getElementById('carouselTrackProjects');
    const cards = document.querySelectorAll('.projetos .card');
    const cardCount = cards.length;
    const visibleCards = 3; // Quantos cards são visíveis ao mesmo tempo
    let currentIndex = 0;
    let autoSlideInterval;

    // Função para mover o carrossel manualmente
    function moveCarousel(direction) {
        const cardWidth = window.innerWidth / visibleCards; // Largura do card baseado na quantidade visível

        // Mover para o próximo card ou para o anterior
        if (direction === 'next') {
            currentIndex++;
            if (currentIndex >= cardCount - visibleCards + 1) {
                currentIndex = 0; // Volta para o início
            }
        } else if (direction === 'prev') {
            currentIndex--;
            if (currentIndex < 0) {
                currentIndex = cardCount - visibleCards; // Vai para o último
            }
        }

        // Aplica a transição para mover os cards
        track.style.transition = 'transform 0.6s ease-in-out';
        track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;

        // Reinicia o intervalo de slide automático após uma interação do usuário
        resetAutoSlide();
    }

    // Função para iniciar o movimento automático do carrossel
    function startAutoSlide() {
        autoSlideInterval = setInterval(() => {
            moveCarousel('next');
        }, 5000); // Intervalo de 3 segundos
    }

    // Função para parar o movimento automático do carrossel
    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }

    // Função para reiniciar o intervalo automático
    function resetAutoSlide() {
        stopAutoSlide();
        startAutoSlide();
    }

    // Função para os botões de navegação
    document.querySelector('.carousel-btn.next').addEventListener('click', function () {
        moveCarousel('next');
    });

    document.querySelector('.carousel-btn.prev').addEventListener('click', function () {
        moveCarousel('prev');
    });

    // Ajustar a posição quando a janela é redimensionada
    window.addEventListener('resize', () => {
        const cardWidth = window.innerWidth / visibleCards;
        track.style.transition = 'none'; // Retira a transição durante o resize
        track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    });

    // Inicia o slide automático ao carregar a página
    startAutoSlide();
})();