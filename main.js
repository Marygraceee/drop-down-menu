const menuBtn = document.querySelector('.menu-btn');
const options = document.querySelector('.options');

function showDropDown() {
  menuBtn.addEventListener('click', () => {
    if (menuBtn.className === 'menu-btn') {
      console.log('ciao');
      menuBtn.classList.add('active');
      options.classList.add('showing');
    } else if (menuBtn.classList.contains('active')) {
      menuBtn.classList.remove('active');
      options.classList.remove('showing');
    }
  });
}

showDropDown();
