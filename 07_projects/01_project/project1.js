const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach((button) => {
  // console.log(button);
  button.addEventListener('click', (e) => {
    // console.log(e);
    console.log(e.target);
    if (e.target.id == 'red') {
      body.style.backgroundColor = '#e40303';
    }
    if (e.target.id == 'orange') {
      body.style.backgroundColor = '#ff8c00';
    }
    if (e.target.id == 'yellow') {
      body.style.backgroundColor = '#ffed00';
    }
    if (e.target.id == 'green') {
      body.style.backgroundColor = '#008026';
    }
    if (e.target.id == 'blue') {
      body.style.backgroundColor = '#24408e';
    }
    if (e.target.id == 'purple') {
      body.style.backgroundColor = '#732982';
    }
  });
});
