
let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

let sections=document.querySelectorAll('section');
let navLinks=document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top=window.scrollY;
        let offset=sec.offsetTop-200;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');
        if(top>=offset && top<offset+height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+id+']').classList.add('active');
            });

            sec.classList.add('show-animate');
        }else{
            sec.classList.remove('show-animate');
        }
    });
    let header=document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY>200);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    let footer=document.querySelector('footer');
    footer.classList.toggle('show-animate',this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
   
    
}

const form = document.querySelector("#contact-form");
form.addEventListener("submit", event => {
    event.preventDefault();
    openMailClient();
})

function openMailClient() {
    const email = 'julyhtwe6250@gmail.com'; // recipient's email
    const subject = encodeURIComponent(form.subject.value); // subject of the email
    const body = encodeURIComponent(form.message.value);
    
    const mailtoLink = `mailto:${email}?subject=${subject}&body=${body}`;
    
    window.location.href = mailtoLink;
}