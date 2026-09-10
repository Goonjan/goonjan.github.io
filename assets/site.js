// ---------- Resume download ----------
function downloadResume() {
    const link = document.createElement("a");
    link.href = getAssetPath("Gunjan_Vasara_Resume.pdf");
    link.download = "Gunjan_Vasara_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Works whether the page lives at the root or inside /work/
function getAssetPath(file) {
    const isSubpage = window.location.pathname.includes("/work/");
    return (isSubpage ? "../assets/" : "assets/") + file;
}

document.addEventListener("click", (e) => {
    const trigger = e.target.closest("[data-resume-btn]");
    if (trigger) downloadResume();
});

// ---------- Nav scroll background ----------
const nav = document.querySelector(".nav");
if (nav) {
    const onScroll = () => {
        nav.classList.toggle("scrolled", window.scrollY > 30);
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
}

// ---------- Mobile nav toggle ----------
const navToggle = document.querySelector(".nav-mobile-toggle");
const navPanel = document.querySelector(".nav-mobile-panel");
const navToggleIconMenu = document.querySelector(".icon-menu");
const navToggleIconClose = document.querySelector(".icon-close");

function setMobileNav(open) {
    if (!navPanel) return;
    navPanel.classList.toggle("open", open);
    if (navToggleIconMenu && navToggleIconClose) {
        navToggleIconMenu.style.display = open ? "none" : "inline-block";
        navToggleIconClose.style.display = open ? "inline-block" : "none";
    }
}

if (navToggle) {
    navToggle.addEventListener("click", () => {
        const isOpen = navPanel.classList.contains("open");
        setMobileNav(!isOpen);
    });
}

document.querySelectorAll(".nav-mobile-link").forEach((link) => {
    link.addEventListener("click", () => setMobileNav(false));
});

// ---------- Scroll-reveal ----------
const revealEls = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window && revealEls.length) {
    const io = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("in");
                    io.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    revealEls.forEach((el) => io.observe(el));
} else {
    revealEls.forEach((el) => el.classList.add("in"));
}

// ---------- Marquee (duplicate content for seamless loop) ----------
const marqueeTrack = document.querySelector(".marquee-track");
if (marqueeTrack && !marqueeTrack.dataset.doubled) {
    marqueeTrack.innerHTML += marqueeTrack.innerHTML;
    marqueeTrack.dataset.doubled = "true";
}

// ---------- Smooth scroll to hash on load (for #work etc from other pages) ----------
window.addEventListener("DOMContentLoaded", () => {
    const hash = window.location.hash;
    if (hash) {
        const el = document.querySelector(hash);
        if (el) {
            setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 150);
        }
    }
});

document.getElementById("footer-year").textContent =
    "© " + new Date().getFullYear() + " Gunjan Vasara. Crafted with intent.";
