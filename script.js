


let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');

}

window.onscroll = () =>{
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
  
}


const typed = new Typed('.multiple-text', {
    strings: ['Web Designer', 'Content Designer','Graphics Designer','Web Developer'],
    typeSpeed: 80,
    backSpeed: 80,
    backDelay:1200,
    loop: true,
  });




















  document.addEventListener("DOMContentLoaded", () => {
    const skills = [
        { id: "html-progress", percent: 50 },
        { id: "css-progress", percent: 40 },
        { id: "bootstrap-progress", percent: 50 },
        { id: "tailwind-progress", percent: 45 }


    ];

    skills.forEach(skill => {
        const progressBar = document.getElementById(skill.id);
        progressBar.style.width = `${skill.percent}%`;

        const percentText = document.getElementById(skill.id.replace("progress", "percent"));
        percentText.textContent = `${skill.percent}%`;
    });
});
