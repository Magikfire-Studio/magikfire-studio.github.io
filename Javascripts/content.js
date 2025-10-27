const A_Btn = document.getElementById("A_Btn");
const B_Btn = document.getElementById("B_Btn");
const C_Btn = document.getElementById("C_Btn");
const D_Btn = document.getElementById("D_Btn");
const A_ = document.getElementById("A_");
const B_ = document.getElementById("B_");
const C_ = document.getElementById("C_");
const D_ = document.getElementById("D_");

const videos = document.querySelectorAll('.video');

window.onload = function () {
    A_.style.display = "block";
    B_.style.display = "none";
    C_.style.display = "none";
    D_.style.display = "none";
    var A_Btn = document.getElementById("A_Btn");
    A_Btn.addEventListener("click", function () {
        removeActiveClass();
        this.classList.add("active");

        videos.forEach(video => {
            video.pause();
            video.currentTime = 0;
        });
        // Your code here
    });

    var B_Btn = document.getElementById("B_Btn");
    B_Btn.addEventListener("click", function () {
        removeActiveClass();
        this.classList.add("active");
        // Your code here

        videos.forEach(video => {
            video.pause();
            video.currentTime = 0;
        });
    });

    var C_Btn = document.getElementById("C_Btn");
    C_Btn.addEventListener("click", function () {
        removeActiveClass();
        this.classList.add("active");
        // Your code here

        videos.forEach(video => {
            video.pause();
            video.currentTime = 0;
        });
    });

    var D_Btn = document.getElementById("D_Btn");
    D_Btn.addEventListener("click", function () {
        removeActiveClass();
        this.classList.add("active");
        // Your code here

        videos.forEach(video => {
            video.pause();
            video.currentTime = 0;
        });
    });

    function removeActiveClass() {
        var buttons = document.getElementsByTagName("button");
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].classList.remove("active");
        }
    }
};

A_Btn.addEventListener("click", function () {
    A_.style.display = "block";
    B_.style.display = "none";
    C_.style.display = "none";
    D_.style.display = "none";
    const target = document.getElementById("section");
    target.scrollIntoView({ behavior: "smooth", block: "start" });
});

B_Btn.addEventListener("click", function () {
    A_.style.display = "none";
    B_.style.display = "block";
    C_.style.display = "none";
    D_.style.display = "none";
    const target = document.getElementById("section");
    target.scrollIntoView({ behavior: "smooth", block: "start" });
});

C_Btn.addEventListener("click", function () {
    A_.style.display = "none";
    B_.style.display = "none";
    C_.style.display = "block";
    D_.style.display = "none";
    const target = document.getElementById("section");
    target.scrollIntoView({ behavior: "smooth", block: "start" });
});

D_Btn.addEventListener("click", function () {
    A_.style.display = "none";
    B_.style.display = "none";
    C_.style.display = "none";
    D_.style.display = "block";
    const target = document.getElementById("section");
    target.scrollIntoView({ behavior: "smooth", block: "start" });
});