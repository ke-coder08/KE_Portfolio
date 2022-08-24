
//cursor selector load page
const cursor = document.querySelector(".pointer");

document.addEventListener("mousemove",(event)=>{
        cursor.style.left =
        `${event.clientX}px`;

        cursor.style.top =
        `${event.clientY}px`;

        cursor.style.display="block";
})

document.addEventListener("nomouse",()=>{
    cursor.style.display="none";
})

//Email Contact Form
function SendEmail(){
    Email.send({
        Host : "smtp.yourisp.com",
        Username : "username",
        Password : "password",
        To : 'them@website.com',
        From : "you@isp.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}