// AUTO MOVE FROM PAGE 1 TO PAGE 2
setTimeout(()=>{
  nextPage(2);
},2500);

function nextPage(num){
  document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));
  document.getElementById("p"+num).classList.add("active");

  if(num===5){
    startTyping();
  }
}

function restart(){
  nextPage(1);
  setTimeout(()=>nextPage(2),2500);
}

// TYPING EFFECT
const text = "I just wanted to remind you that you are special, appreciated, and loved more than you know. Never forget that ❤️";
let i = 0;

function startTyping(){
  const typing = document.getElementById("typing");
  typing.innerHTML="";
  i=0;
  let interval = setInterval(()=>{
    if(i<text.length){
      typing.innerHTML+=text.charAt(i);
      i++;
    } else {
      clearInterval(interval);
    }
  },40);
}
