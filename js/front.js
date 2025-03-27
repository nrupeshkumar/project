function navigateToPage2(event) {
    let circle = document.createElement("div");
    circle.classList.add("circle");

    let x = event.clientX;
    let y = event.clientY;

    circle.style.left = `${x}px`;
    circle.style.top = `${y}px`;

    document.body.appendChild(circle);

    setTimeout(() => {
        circle.style.transform = "scale(30)";
    }, 10);

    setTimeout(() => {
        window.location.href = "hero.html";
    }, 700);
}
document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.querySelector(".menu-btn");
    const sidebar = document.querySelector(".sidebar");
    // const content = document.querySelector(".content");

    let menuOpen = false;

    menuBtn.addEventListener("click", () => {
        if (!menuOpen) {
            gsap.to(".sidebar", { right: "0", duration: 0.5, ease: "power2.out" });
            // gsap.to(".content", { marginLeft: "80px", duration: 0.5 });
            menuOpen = true;
        } else {
            gsap.to(".sidebar", { right: "-80px", duration: 0.5, ease: "power2.in" });
            // gsap.to(".content", { marginLeft: "80px", duration: 0.5 });
            menuOpen = false;
        }
    });
});
const texts = [
    " Frontend Developer ",
    " wordpress developer ",
    " web developer ",
];
let textIndex = 0;
let charIndex = 0;
function typeEffect() {
    if (charIndex < texts[textIndex].length) {
        document.querySelector(".typing").textContent = texts[textIndex].slice(0, charIndex++);
        setTimeout(typeEffect, 100);

    } else {
        setTimeout(eraseEffect, 2000);
    }
}
function eraseEffect() {
    if (charIndex > 0) {
        document.querySelector(".typing").textContent = texts[textIndex].slice(0, --charIndex);
        setTimeout(eraseEffect, 50);
    } else {
        textIndex = (textIndex + 1) % texts.length;
        setTimeout(typeEffect, 500);
    }
}
typeEffect();

        // document.addEventListener("mousemove", (e) => {
        //     const bubble = document.createElement("div");
        //     bubble.classList.add("bubble");
        //     document.body.appendChild(bubble);
            
        //     const size = Math.random() * 10 + 5;
        //     bubble.style.width = `${size}px`;
        //     bubble.style.height = `${size}px`;
        //     bubble.style.left = `${e.clientX}px`;
        //     bubble.style.top = `${e.clientY}px`;
            
        //     setTimeout(() => {
        //         bubble.remove();
        //     }, 3000);
        // });