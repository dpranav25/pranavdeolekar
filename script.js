// function toggleProjectImages() {

//   const projectImage = document.getElementById("projectImage");
//}

// toggle job images================================================
document.getElementById("contactForm").addEventListener("submit", async function(e) {

e.preventDefault();

const data = {
name: document.getElementById("name").value,
email: document.getElementById("email").value,
subject: document.getElementById("subject").value,
message: document.getElementById("message").value
};

fetch("https://script.google.com/macros/s/AKfycbzDyOBJV0AW6TSmHdP2rxAKcKV91tLqyqTf2m0NgWCZsdvDrRLUblDCeuXKe1OHr9wu/exec", {
method: "POST",
mode: "no-cors",
body: JSON.stringify(data)
});

document.getElementById("formStatus").innerText="Message sent successfully! ✅";
this.reset();

});



// Toggle job images================================================

function toggleImages(){

let images = document.getElementById("jobImages");

if(images.style.display === "flex"){
images.style.display = "none";
}
else{
images.style.display = "flex";
}

// Toggle button text==================================================
}
function toggleProjectImages() {

  const projectImage = document.getElementById("projectImage");

  if (projectImage.style.display === "none" || projectImage.style.display === "") {
    projectImage.style.display = "flex";
  }
  else {
    projectImage.style.display = "none";
  }
}

// Reveal on scroll=======================================================
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));