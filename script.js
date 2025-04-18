(function () {
    const track = document.getElementById('carouselTrackProjects');
    const cards = document.querySelectorAll('.projetos .card');
    const cardCount = cards.length;
    let currentIndex = 0;
    let autoSlideInterval;

    function getVisibleCards() {
        return window.innerWidth <= 430 ? 1 : 3;
    }

    function moveCarousel(direction) {
        const visibleCards = getVisibleCards();
        const cardWidth = window.innerWidth / visibleCards;

        if (direction === 'next') {
            currentIndex++;
            if (currentIndex >= cardCount - visibleCards + 1) {
                currentIndex = 0;
            }
        } else if (direction === 'prev') {
            currentIndex--;
            if (currentIndex < 0) {
                currentIndex = cardCount - visibleCards;
            }
        }

        track.style.transition = 'transform 0.6s ease-in-out';
        track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
        resetAutoSlide();
    }

    function startAutoSlide() {
        autoSlideInterval = setInterval(() => {
            moveCarousel('next');
        }, 5000);
    }

    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }

    function resetAutoSlide() {
        stopAutoSlide();
        startAutoSlide();
    }

    document.querySelector('.carousel-btn.next').addEventListener('click', function () {
        moveCarousel('next');
    });

    document.querySelector('.carousel-btn.prev').addEventListener('click', function () {
        moveCarousel('prev');
    });

    window.addEventListener('resize', () => {
        const visibleCards = getVisibleCards();
        const cardWidth = window.innerWidth / visibleCards;
        track.style.transition = 'none';
        track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    });

    startAutoSlide();
})();
