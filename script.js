let dynamic = document.querySelector(".dynamic-island");
let call = document.querySelector(".call");
let vid = document.querySelector(".vid")

window.onload = function(){
    setTimeout(
        function(){
            dynamic.classList.toggle("active");
            // vid.style.display = "block"

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

dynamic.addEventListener("", ()=>{
    dynamic.style.width = "160px"
})



let startY;

document.addEventListener('touchstart', function(e) {
  startY = e.touches[0].clientY;
});

document.addEventListener('touchmove', function(e) {
  const currentY = e.touches[0].clientY;
  if (currentY - startY > 50) { // Adjust the threshold as needed
    showNotification();
  }
});

function showNotification() {
  const notification = document.getElementById('notification');
  notification.classList.add('show');
  
  // Hide the notification after 3 seconds
  setTimeout(() => {
    notification.classList.remove('show');
  }, 3000);
}
