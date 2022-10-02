
//SendEmail
function SendEmail(){
  var name = document.getElementById('name').value;
  var subject = document.getElementById('subject').value;
  var cname = document.getElementById('companyname').value;
  var email = document.getElementById('email').value;

  if (name === "" || subject === "" || cname === "" || email === ""){
    alert('Please fill all the fields first');
  }

  else{
    Email.send({
      Host : "smtp.elasticemail.com",
      Username : 'ke.coder08@gmail.com',
      Password : "E51C4A9C7E4F749A63EEBA8320FC849C4754",
      To : 'ke.coder08@gmail.com',
      From : 'ke.coder08@gmail.com',
      Subject : subject,
      Body : "Name: " + name + "<br>" + "Company Name: " + cname
          + "<br>" + "Email: " + email
  }).then(
    alert('Successfully Submitted'),
  );
}
  }

 

