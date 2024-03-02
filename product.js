const dropDown = document.querySelectorAll('.dropDown');

dropDown.forEach(dropdown => {
    const sortList = dropdown.querySelector('.sortList');
    const icon = dropdown.querySelector('.iconDropDown');
    const options = dropdown.querySelectorAll('.sortList li');
    const select = dropdown.querySelector('.select');
    const selectedOption = dropdown.querySelector('.selectedOption');

    select.addEventListener('click', () => {
        select.classList.toggle('select-clicked');
        icon.classList.toggle('iconDropDown-rotate');
        sortList.classList.toggle('sortList-open');
    });

    options.forEach(option => {
        option.addEventListener('click', () => {
            selectedOption.innerText = option.innerText;
            select.classList.remove('select-clicked');
            icon.classList.remove('iconDropDown-rotate');
            sortList.classList.remove('sortList-open');
            options.forEach(option => {
                option.classList.remove('active');
            });

            option.classList.add('active');
        });
    });
});

function showMenu() {
    document.querySelector('.menuButton').classList.toggle('open');
    document.querySelector('.navBar').classList.toggle('active');
}
