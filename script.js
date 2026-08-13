const musicBtn=document.getElementById("musicBtn");
const audio=document.getElementById("teAmo");
const revealBtn=document.getElementById("revealBtn");
const revealBox=document.getElementById("revealBox");

audio.src="assets/te-amo-instrumental.mp3";
audio.loop=true;
audio.preload="auto";

musicBtn.addEventListener("click", async ()=>{
  try{
    if(audio.paused){
      await audio.play();
      musicBtn.textContent="❚❚ Pause Te Amo";
    }else{
      audio.pause();
      musicBtn.textContent="♪ Play Te Amo";
    }
  }catch(err){
    musicBtn.textContent="♪ Tap to play Te Amo";
  }
});
audio.addEventListener("play",()=>musicBtn.textContent="❚❚ Pause Te Amo");
audio.addEventListener("pause",()=>musicBtn.textContent="♪ Play Te Amo");

revealBtn.addEventListener("click",()=>{
  revealBox.classList.add("show");
  revealBtn.style.display="none";
});

const observer=new IntersectionObserver(entries=>entries.forEach(e=>{
  if(e.isIntersecting)e.target.classList.add("visible")
}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

function heart(){
  const h=document.createElement("span");
  h.className="heart";
  h.textContent=Math.random()>.35?"♡":"♥";
  h.style.left=Math.random()*100+"vw";
  h.style.fontSize=(12+Math.random()*22)+"px";
  h.style.animationDuration=(4+Math.random()*4)+"s";
  document.getElementById("hearts").appendChild(h);
  setTimeout(()=>h.remove(),8000)
}
setInterval(heart,1100);
