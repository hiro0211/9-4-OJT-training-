        // カルーセル機能
        const carousel = document.querySelector('.carousel-inner');
        const items = carousel.querySelectorAll('.carousel-item');
        const prevBtn = document.querySelector('.carousel-control.prev');
        const nextBtn = document.querySelector('.carousel-control.next');
        let currentIndex = 0;

        function showSlide(index) {
            carousel.style.transform = `translateX(-${index * 100}%)`;
        }

        function nextSlide() {
            currentIndex = (currentIndex + 1) % items.length;
            showSlide(currentIndex);
        }

        function prevSlide() {
            currentIndex = (currentIndex - 1 + items.length) % items.length;
            showSlide(currentIndex);
        }

        nextBtn.addEventListener('click', (e) => {
            e.preventDefault();
            nextSlide();
        });

        prevBtn.addEventListener('click', (e) => {
            e.preventDefault();
            prevSlide();
        });

        // 自動スライド（オプション）
        setInterval(nextSlide, 5000);