let dynamic = document.querySelector(".dynamic-island");
let call = document.querySelector(".call");
let vid = document.querySelector(".vid")

window.onload = function(){
    setTimeout(
        function(){
            dynamic.classList.toggle("active");
            vid.style.display = "block"

        }
    , 1500)

    setTimeout(
        function(){
            dynamic.classList.toggle("rem")
        }
    , 9500)

    setTimeout(
        function(){
            // dynamic.classList.toggle("notfi")
        }
    ,11000)
}

