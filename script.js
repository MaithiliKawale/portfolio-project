
var rellax = new Rellax('.rellax', {
// center: true
callback: function(position) {
    // callback every position change
    console.log(position);
}
});

// AOS.init();


const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})



function message(){
  event.preventDefault(); // Prevent form submission

  var Name = document.getElementById('username');
  var email = document.getElementById('email');
  var msg = document.getElementById('msg');
  const success = document.getElementById('success');
  const danger = document.getElementById('danger');

  if(Name.value === '' || email.value === '' || msg.value === ''){
      danger.style.display = 'block';
  }
  else{
      setTimeout(() => {
          Name.value = '';
          email.value = '';
          msg.value = '';
      }, 2000);

      success.style.display = 'block';
  }


  setTimeout(() => {
      danger.style.display = 'none';
      success.style.display = 'none';
  }, 4000);

}