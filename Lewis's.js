const tl = gsap.timeline({ defaults: { ease: "power1.out" } });
tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 });
tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");
tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 });
tl.fromTo(".big-text", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");
function addContact() 
   { const name = document.getElementById('name').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const listItem = document.createElement('li');
    listItem.innerHTML = `${name}: ${phoneNumber}`;
    document.getElementById('contactList').appendChild(listItem);
    document.getElementById('name').value = '';
    document.getElementById('phoneNumber').value = '';
}
document.getElementById('addContact').addEventListener('click', addContact);