//NodeList علشان تحولها ل Array استخدم Array.From()
let imgs =Array.from(document.querySelectorAll(".item img")) ;

let next = document.getElementById("nextBtn");
let prev = document.getElementById("prevBtn");

let lightboxcontainer = document.getElementById("lightbox-container");

 let lightboxitem = document.getElementById("lightbox-item");

 let closeBtn = document.getElementById("closeBtn");
 var  CursorPhoto ;

for(let i=0 ; i< imgs.length ; i++){
    imgs[i].addEventListener("click",(eventinfo)=>{
        //eventinfo الصوره الي انا واقف عليها 
         CursorPhoto= imgs.indexOf(eventinfo.target);
       

         let Bdel = eventinfo.target.getAttribute("src");
         lightboxitem.style.backgroundImage="url("+Bdel+")";
         
         lightboxcontainer.style.display="flex";
    });
}

function NextPhoto(){
    if(CursorPhoto==imgs.length ) {CursorPhoto=0;}
    CursorPhoto++; //1
    let nextindex = imgs[CursorPhoto].getAttribute("src"); 
    lightboxitem.style.backgroundImage="url("+nextindex+")" ;
}
function PrevPhoto(){
    if(CursorPhoto < 0 ) {CursorPhoto=imgs.length-1}
    CursorPhoto--; //1
    
    lightboxitem.style.backgroundImage="url("+imgs[CursorPhoto].getAttribute("src");+")" ;
}
prev.addEventListener("click",PrevPhoto);
next.addEventListener("click",NextPhoto);
 function close(){
    lightboxcontainer.style.display="none";
 }
closeBtn.addEventListener("click",close)
// lightboxcontainer.addEventListener("click",()=>{
//     lightboxcontainer.style.display="none";
// })

document.addEventListener("keydown",(e)=>{
    if(e.code == "ArrowRight") {NextPhoto();}
    else if(e.code=="ArrowLeft") {PrevPhoto();}
    else if(e.code == "Escape") {close();}
})