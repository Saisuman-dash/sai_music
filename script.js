const btn=document.querySelector(".play");
const next=document.querySelector(".r");
const back=document.querySelector(".l");
let audio;
let i=0;
const getapi=async()=>{
    const res=await fetch('./API/song_api.json')
    const data=await res.json();
   
    return data;
}
const apicall=async(i)=>{
    const arr=await getapi();
   let len=arr.length;
   
    


audio=new Audio(arr[i].link);

btn.addEventListener('click',()=>{
    if(btn.innerText=='Play'){
        btn.innerText='||';
        audio.pause();
        
    }else{
        btn.innerText='Play';
        audio.play();
        
    }
})
next.addEventListener('click',()=>{
    
    i++;
    i%=len;
    audio.src=arr[i].link;
    audio.play();
})
back.addEventListener('click',()=>{
    if(i>=0){
    i--;
    audio.src=arr[i].link;
    audio.play();
    }
})
}


apicall(i)