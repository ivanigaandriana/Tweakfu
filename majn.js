document.addEventListener("DOMContentLoaded",() => {
    const swiper = new Swiper('.slaider', {
        slidesPerView:1,
        // spaceBetween:20,
        pagination:{
            el:'.review-dots',
            bulletActiveClass:'review-dot-active',
            bulletClass:'review-dot',
            clickable:true
        },
    });
    // const burger = document.querySelector('.burger');
    // const menu = document.querySelector('.menu');

    // burger.addEventListener('click', () => {
    //     burger.classList.toggle('is-active');
    //     menu.classList.toggle('open');
    // })

    
});
    

    

 new Swiper('.lenders-list', {
        slidesPerView:3,
        slidesPerGroup: 1,
        freeMode: true,
            centeredSlides: true,
            loop: true,
        navigation:{
            nextEl:'.review-button-next',
            prevEl:'.review-button-prev'
        },
    });
 new Swiper('.slaiders-list', {
        slidesPerView:1,
        navigation:{
            nextEl:'.revi-button-next',
            prevEl:'.revi-button-prev'
        },
      });

      document.addEventListener('DOMContentLoaded', function () {
        var form = document.querySelector('.form-form');

        form.addEventListener('submit', function (event) {
            // Отримайте значення полів форми
            var name = document.querySelector('input[name="your name"]').value.trim();
            var email = document.querySelector('input[name="your email"]').value.trim();
            var topic = document.querySelector('select[name="Choose topic"]').value.trim();
            var message = document.querySelector('textarea[name="message"]').value.trim();

            // Перевірте, чи всі поля заповнені
            if (name === '' || email === '' || topic === '' || message === '') {
                alert('Будь ласка, заповніть всі обов\'язкові поля.');
                event.preventDefault(); // Зупинити відправку форми
            } else {
                // Якщо все в порядку, форма буде відправлена

                // Додайте інші умови валідації за потребою

                // Видаліть наступний рядок або замініть його на відправку форми на сервер
                alert('Форма відправлена успішно!');
            }
        });
    });