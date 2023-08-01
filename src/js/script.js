document.addEventListener('DOMContentLoaded', () => {
    let inputs = document.querySelectorAll('.input__file');

    Array.prototype.forEach.call(inputs, function (input) {
        let label = input.nextElementSibling,
            labelVal = label.querySelector('.input__file-icon-wrapper span').innerText;


        input.addEventListener('change', (e) => {
            let countFiles = '';

            if (e.target.files && e.target.files.length >= 1)
                countFiles = e.target.files.length;

            if (countFiles) {
                label.querySelector('.input__file-icon-wrapper span').innerText = 'Выбрано файлов: ' + countFiles;
            }
            else {
                label.querySelector('.input__file-icon-wrapper span').innerText = labelVal;
            }
        });
    });

    const accordionItem = document.querySelectorAll('.questions__acordion_item');


    accordionItem.forEach((item) => {

        item.addEventListener('click', (e) =>{
            item.classList.toggle('active')

        })
    })
    
    
    const hambBtn = document.querySelector('.hamburger')
    const menu = document.querySelector('.mobile__menu');
    const closeBtn = document.querySelector('.hamburgerClose')
    const navLink = document.querySelectorAll('.nav__link');
    const headerMobailBtn = document.querySelector('.header__button-nav')
    
    


    hambBtn.addEventListener('click', hambHandler)

    function hambHandler (e){
        e.preventDefault();
        menu.classList.add('active')
    }
    closeBtn.addEventListener('click', (e) =>{
        e.preventDefault();
        menu.classList.remove('active')
    })
    headerMobailBtn.addEventListener('click', (e) =>{
        menu.classList.remove('active')
    })
    navLink.forEach((link) = (e) =>{
        
        e.addEventListener('click', () =>{
            menu.classList.remove('active')
        })

    })

    

   

    const inputPhone = document.querySelector('#phone');

    const phoneMask = new IMask(inputPhone,{
        mask: '+{000} (00)-000-00-00',
    });

})