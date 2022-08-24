
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

