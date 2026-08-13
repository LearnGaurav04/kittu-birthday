const musicBtn=document.getElementById("musicBtn");
musicBtn.addEventListener("click",()=>{window.open("https://www.youtube.com/watch?v=Oe4Ic7fHWf8","_blank","noopener,noreferrer")});
const revealBtn=document.getElementById("revealBtn");
const revealBox=document.getElementById("revealBox");
revealBtn.addEventListener("click",()=>{revealBox.classList.add("show");revealBtn.style.display="none"});
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));
function heart(){const h=document.createElement("span");h.className="heart";h.textContent=Math.random()>.35?"♡":"♥";h.style.left=Math.random()*100+"vw";h.style.fontSize=(12+Math.random()*22)+"px";h.style.animationDuration=(4+Math.random()*4)+"s";document.getElementById("hearts").appendChild(h);setTimeout(()=>h.remove(),8000)}
setInterval(heart,1100);
