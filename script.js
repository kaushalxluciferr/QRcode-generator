const txt=document.querySelector("#txt")
const btn=document.querySelector(".btn")
const img=document.querySelector("#imaj");
const cl=document.querySelector(".img");

btn.addEventListener("click",()=>{
    if(txt.value!="")
        {
        cl.style.display= 'block';
            img.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+txt.value;
        }
        
else{
    alert("eneter something");
}
})
