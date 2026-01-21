// Kis animációs logika betöltéskor
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    sections.forEach((sec, i) => {
        sec.style.opacity = 0;
        sec.style.transform = "translateY(30px)";
        setTimeout(() => {
            sec.style.transition = "all 1s ease-out";
            sec.style.opacity = 1;
            sec.style.transform = "translateY(0)";
        }, i * 200);
    });
});

// LIGHTBOX – Képnagyítás
document.addEventListener("DOMContentLoaded", () => {
    const galleryImages = document.querySelectorAll(".gallery img");

    // Lightbox elem létrehozása
    const lightbox = document.createElement("div");
    lightbox.classList.add("lightbox");
    const img = document.createElement("img");
    lightbox.appendChild(img);
    document.body.appendChild(lightbox);

    // Kép kattintásra nagyítás
    galleryImages.forEach(image => {
        image.addEventListener("click", () => {
            img.src = image.src; // aktuális kép betöltése
            lightbox.classList.add("active");
        });
    });

    // Lightbox bezárás kattintással a háttérre
    lightbox.addEventListener("click", (e) => {
        if (e.target !== img) {
            lightbox.classList.remove("active");
        }
    });
});

document.addEventListener("keydown", e => {
    if (e.key === "Escape") lightbox.classList.remove("active");
});

window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    const speed = -0.08; // minél kisebb, annál lassabb

    document.querySelector(".bg").style.transform =
        `translateY(${scrollY * speed}px)`;
});