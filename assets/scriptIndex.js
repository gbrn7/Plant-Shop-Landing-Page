const x = document.querySelector(".menuOpen");
x.addEventListener("click", function () {
    console.log(x);
    const a = document.querySelector(".menu-wrapper");
    a.classList.add("active");
    console.log(a);
    const y = document.querySelector(".menuClose");
    y.addEventListener("click", function () {
        a.classList.remove("active");
    });
});

const y = document.querySelector(".navbar");

y.addEventListener('click', function(){
    console.log(y.scrollTop);
    console.log(y.clientHeight);
    // if (this.scrollTop() > y.clientHeight) {
    //     y.classList.add("active");
    // }
});
