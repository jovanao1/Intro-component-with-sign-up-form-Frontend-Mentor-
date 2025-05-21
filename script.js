document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault();
  let valid = true;
  var i = 1;
  document.querySelectorAll('form input[type="text"]').forEach(function(input) {
    if (input.value.trim() === '') {
      valid = false;
      if(i == 1){
        document.getElementById('warning1').style.display = 'block';
      }else if(i == 2){
        document.getElementById('warning2').style.display = 'block';
      }else if(i == 3){
        document.getElementById('warning3').style.display = 'block';
      }else if(i == 4){
        document.getElementById('warning4').style.display = 'block';
      }
    }
    if (i == 4 && input.value.trim() !== '' && !validateEmail(input.value.trim())) {
      valid = false;
      document.getElementById('warning5').style.display = 'block';
    }
    i++;
 });
  if (valid) {
    alert('Success!');
  }
});

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email.trim());
}