
//SendEmail
function SendEmail(){
  Email.send({
      Host : "smtp.elasticemail.com",
      Username : 'ke.coder08@gmail.com',
      Password : "E51C4A9C7E4F749A63EEBA8320FC849C4754",
      To : 'ke.coder08@gmail.com',
      From : 'ke.coder08@gmail.com',
      Subject : document.getElementById('subject').value,
      Body : "Name: " + document.getElementById('name').value + "<br>" + "Company Name: " + document.getElementById('companyname').value
          + "<br>" + "Email: " + document.getElementById('email').value + "<br>" +  "Message: " + document.getElementById('message').value
  }).then(
    alert('Successfully Submitted'),
    document.getElementById('myform').reset()
  );
}
