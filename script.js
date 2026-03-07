let password=document.getElementById("password")
let strength=document.getElementById("strength")
let message=document.getElementById("message")
let toggle=document.getElementById("toggle")

let generate=document.getElementById("generate")
let copy=document.getElementById("copy")
let breach=document.getElementById("breach")
let breachResult=document.getElementById("breachResult")


password.addEventListener("input",()=>{

let val=password.value
let score=0

if(val.length>=8)score++
if(/[A-Z]/.test(val))score++
if(/[0-9]/.test(val))score++
if(/[!@#$%^&*]/.test(val))score++

if(score==1){
strength.style.width="25%"
strength.style.background="red"
message.innerText="Weak Password"
}

else if(score==2){
strength.style.width="50%"
strength.style.background="orange"
message.innerText="Medium Password"
}

else if(score==3){
strength.style.width="75%"
strength.style.background="yellow"
message.innerText="Strong Password"
}

else if(score==4){
strength.style.width="100%"
strength.style.background="#00ffff"
message.innerText="Very Strong Password"
}

else{
strength.style.width="0%"
message.innerText=""
}

})


toggle.onclick=()=>{

if(password.type==="password"){
password.type="text"
toggle.innerText="🙈"
}else{
password.type="password"
toggle.innerText="👁"
}

}


generate.onclick=()=>{

let chars="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*"

let pass=""

for(let i=0;i<12;i++){
pass+=chars[Math.floor(Math.random()*chars.length)]
}

password.value=pass

}


copy.onclick=()=>{

navigator.clipboard.writeText(password.value)

alert("Password copied")

}


async function sha1(msg){

const msgBuffer=new TextEncoder().encode(msg)

const hashBuffer=await crypto.subtle.digest("SHA-1",msgBuffer)

const hashArray=Array.from(new Uint8Array(hashBuffer))

return hashArray.map(b=>b.toString(16).padStart(2,"0")).join("").toUpperCase()

}


breach.onclick=async()=>{

let val=password.value

if(val===""){
breachResult.innerText="Enter password first"
return
}

let hash=await sha1(val)

let prefix=hash.substring(0,5)
let suffix=hash.substring(5)

let res=await fetch(`https://api.pwnedpasswords.com/range/${prefix}`)

let data=await res.text()

if(data.includes(suffix)){
breachResult.innerHTML="❌ Password found in data breaches"
breachResult.style.color="red"
}else{
breachResult.innerHTML="✅ Password not found in breaches"
breachResult.style.color="lightgreen"
}

}


/* MATRIX BACKGROUND */

const canvas=document.getElementById("matrix")
const ctx=canvas.getContext("2d")

canvas.height=window.innerHeight
canvas.width=window.innerWidth

const letters="01"
const fontSize=14
const columns=canvas.width/fontSize

const drops=[]

for(let x=0;x<columns;x++) drops[x]=1

function draw(){

ctx.fillStyle="rgba(0,0,0,0.05)"
ctx.fillRect(0,0,canvas.width,canvas.height)

ctx.fillStyle="#00ffff"
ctx.font=fontSize+"px monospace"

for(let i=0;i<drops.length;i++){

const text=letters[Math.floor(Math.random()*letters.length)]

ctx.fillText(text,i*fontSize,drops[i]*fontSize)

if(drops[i]*fontSize>canvas.height && Math.random()>0.975)
drops[i]=0

drops[i]++

}

}

setInterval(draw,33)