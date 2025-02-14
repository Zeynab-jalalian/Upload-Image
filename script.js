const wrapper=document.querySelector(".wrapper");
const img=document.querySelector(".img img");
const cancel=document.querySelector(".cancel");
const fileName=document.querySelector(".fileName");
const file=document.querySelector(".file");
const btn=document.querySelector(".btn");
let regExp=/[0-9a-zA-Z\~\!\@\#\$\%\^\&\*\(\)\-\=\+\[\]\'\{\}\,\.]+$/
btn.addEventListener("click",function(){
    file.click();
})
file.addEventListener("change",function(){
    const choosenFile=this.files[0];
    if(choosenFile){
        const reader=new FileReader();
        reader.onload=function(){
            const result=reader.result;
            img.src=result;     
            wrapper.classList.add("active");
        }
        cancel.addEventListener("click",function(){
            img.src="";
            wrapper.classList.remove("active");
        })
        reader.readAsDataURL(choosenFile);
    }
    if(this.value){
        let valueStore=this.value.match(regExp);
        fileName.textContent=valueStore;
    }
  
    
})