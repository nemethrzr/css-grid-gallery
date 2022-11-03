let pictures=
[
    "kep.jpg",
    "kep2.jpg",
    "kep3.jpg",
    "kep4.jpg",
    "kep5.jpg",
    "kep6.jpg",
    "kep7.jpg",
    "kep8.jpg",
    "kep9.jpg",
    "kep10.jpg",
    "kep11.jpg",
    "kep12.jpg",
    "kep13.jpg",
];
let galleryElements=[];
let galleryDiv = document.querySelector('.gallery');
const imagePath = 'images/';

const createGalleryElement = (element)=>{
    return `
    <div class="gallery-item">
    <img src="images/thumbs/${element}" alt="${element}" loading="lazy">
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, cum accusantium quidem id iusto esse repellendus fuga aliquid consectetur! Sit harum quaerat ex necessitatibus doloremque suscipit, magnam facilis dicta neque.</p>   
    </div>`;
    
}

const renderGallery = (gallery)=>{
    let renderHTML='';
    for( let element in gallery){
        
        console.log(element)
        renderHTML += gallery[element];
    }

    galleryDiv.innerHTML = renderHTML;
}

for(let picture in pictures){
    galleryElements.push(createGalleryElement(pictures[picture]));
}

renderGallery(galleryElements);








let closeModalFormBtn = document.getElementById('closeModalForm');
let modalForm = document.querySelector('.modalForm');

const gallerItem = document.querySelectorAll('.gallery-item');
gallerItem.forEach((item)=>{
    item.addEventListener('click',(e)=>{
        e.preventDefault();
        let srcImage  = e.target.attributes[0].value;
        let helper = srcImage.split('/');
        let fullImage = helper[0]+'/'+helper[helper.length-1];
        
        let text= e.path[1].innerText;

        /*console.log(fullImage);
        console.dir(e.target.attributes[0].value);*/
        modalForm.querySelector('.image img').src = fullImage;


        
        console.dir();
        modalForm.querySelector('.image p').innerText = text
        console.log(modalForm.querySelector('.image img'));


        /*console.log(window.innerHeight);
        console.log(window.pageYOffset);*/
        /*modalForm.style.top=(window.pageYOffset) + "px";*/
        
        modalForm.classList.toggle('active');

        
        
        
    })
});

/* 
* Ez valami "magic" folytán nem müködik :( , helyette a felső forEach ciklussal 
* oldottam meg az egyes elemekehez az eseménykezelő hozzárendelését.

for(let element in gallerItem){
    gallerItem[element].addEventListener('click',function(){
        modalForm.classList.toggle('active');
    },false);
}
*/
closeModalFormBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    //remove active class from modalForm 
    modalForm.querySelector('.image img').src = "";
    modalForm.classList.toggle('active');

});


const pageRight = document.querySelector('.pageRight');
const pageLeft = document.querySelector('.pageLeft');




modalForm.addEventListener('keyup',(e)=>{
    alert();
    console.log(e.code);
    if(e.keyCode==""){

    }
});

pageRight.addEventListener('click',(e)=>{
    e.preventDefault();
    let img = e.target.parentElement.parentElement.parentElement.children[0];

    //console.log((e.target.parentElement.parentElement.parentElement).querySelector('+div'));

    let srcImage  = img.src;
    let helper = srcImage.split('/');
    let imageName = helper[helper.length-1];


    for(let i in pictures){
        if(pictures[i]===imageName){            
            if(++i<=pictures.length-1){                
                img.src = imagePath + pictures[i];  
            }else{
                console.log('belefutottam'+i);                
            }
        }
    }
    console.dir(imageName);
});

pageLeft.addEventListener('click',(e)=>{
    console.log('ok');
    e.preventDefault();
    let img = e.target.parentElement.parentElement.parentElement.children[0];
    let srcImage  = img.src;
    let helper = srcImage.split('/');
    let imageName = helper[helper.length-1];


    for(let i in pictures){
        if(pictures[i]===imageName){            
            if(--i>=0){                
                img.src = imagePath + pictures[i];  
            }else{
                console.log('belefutottam'+i);                
            }
        }
    }
    console.dir(imageName);
});

//galéria lapozás



