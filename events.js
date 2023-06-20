// --------------------------Sticking the navbar on top--------------------------
window.addEventListener("scroll", function() {
  var navbar = this.document.getElementById("navbar");
  navbar.classList.add("sticky", window.scrollY > 100)
})

//-------------------------Skills Section------------------------------
var tab_links = document.getElementsByClassName("skills_links");
var tab_contents = document.getElementsByClassName("skills_list");

function opentab(tabName) {
  for (var tab_link of tab_links) {
    tab_link.classList.remove("active_links");
  }
  for (var tab_content of tab_contents) {
    tab_content.classList.remove("active_tab");
  }

  event.currentTarget.classList.add("active_links");
  document.getElementById(tabName).classList.add("active_tab");
}

//-------------------------Form Submission---------------------------------

const scriptURL = 'https://sheetdb.io/api/v1/zq4jwpfg819nq'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
      msg.innerHTML = "Submitted Successfully"
      setTimeout(function() {
        msg.innerHTML = ""
      }, 5000)
      form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})


// cursor animation script 
// const cursor = document.querySelector(".cursor");
// var timeout;

//follow cursor on mousemove
document.addEventListener("mousemove", (e) => {
  let x = e.pageX;
  let y = e.pageY;

  cursor.style.top = y + "px";
  cursor.style.left = x + "px";
  cursor.style.display = "block";

  //cursor effects when mouse stopped
  function mouseStopped() {
    cursor.style.display = "none";
  }
  clearTimeout(timeout);
  timeout = setTimeout(mouseStopped, 1000);
});

//cursor effects when mouseout
document.addEventListener("mouseout", () => {
  cursor.style.display = "none";
});

var menu = document.getElementById("sidemenu");
function openmenu(){
  menu.style.right = "0";
}
function closemenu(){
  menu.style.right = "-200px";
}