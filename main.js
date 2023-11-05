let data = [
  {
    name: 'fotosesia1',
    category:'portret',
    folder: 'fotosesia1',
    count: 5
  },
  {
    name: 'fotosesia2',
    category:'portret',
    folder: 'fotosesia2',
    count: 5
  },
  {
    name: 'fotosesia3',
    category:'portret',
    folder: 'fotosesia3',
    count: 5
  },
  {
    name: 'fotosesia4',
    category:'wedding',
    folder: 'fotosesia4',
    count: 5
  },
  {
    name: 'fotosesia5',
    category:'wedding',
    folder: 'fotosesia5',
    count: 5
  },
  {
    name:'fotoses6',
    category:'portret',
    folder: 'fotoses6',
    count: 3
  }
];


$(document).ready(function(){
  setTimeout(function(){
    $('.preloader').css('top','-110vh')
  },1500)
})
$('.portfolioGroup').hide(0)
$('#portfolio').click(function(){
    $('.portfolioGroup').slideToggle(500)
})
$('#contactItem').click(function(){
    $('.homePageContainer').css('display','none')
    $('.contactPage').css('display','flex')
})
$('.logo').click(function(){
    $('.homePageContainer').css('display','flex')
    $('.contactPage').css('display','none')
})
// FORM

    let form = document.getElementById("my-form");
    
    async function handleSubmit(event) {
      event.preventDefault();
      let data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        if (response.ok) {
            showPopup('Повідомлення відправлено')
          form.reset()
        } else {
          response.json().then(data => {
            if (Object.hasOwn(data, 'errors')) {
              showPopup('Помилка при відправлені')
            } else {
              showPopup('Помилка')
            }
          })
        }
      }).catch(error => {
        
      });
    }
    form.addEventListener("submit", handleSubmit)
// popupFunction
function showPopup(msg){
    $('.notificationPopup').css('display','flex')
    $('.notificationPopup').text(msg)
    setTimeout(function(){
        $('.notificationPopup').css('display','none') 
    },3000)
}
// sliderImage
let photoCount = 3;
let currentPhoto = 1;

$('#nextPhoto').click(function(){
    if(currentPhoto < photoCount){
        currentPhoto++
    $('.sliderContainer').css('backgroundImage',`url(./img/${currentPhoto}.JPG)`)
    }else{
        currentPhoto = 1
        $('.sliderContainer').css('backgroundImage',`url(./img/${currentPhoto}.JPG)`)
    }
    $('.currentSlide').text(currentPhoto)
})
$('#prewPhoto').click(function(){
    if(currentPhoto > 1){
        currentPhoto--
    $('.sliderContainer').css('backgroundImage',`url(./img/${currentPhoto}.JPG)`)
    }else{
        currentPhoto = 3
        $('.sliderContainer').css('backgroundImage',`url(./img/${currentPhoto}.JPG)`)
    }
    $('.currentSlide').text(currentPhoto)
})



// $('#portret').click(function(){
//   $('.portretContainer').empty();
//   $('.sliderContainer').css('display','none')
//   for(let el of data){
//     if (el.category == 'portret'){
//       $('.portretContainer').append(`<div class = 'photosesionItem' style="background-image: url(./img/${el.folder}/1.JPG)";></div>`)
//     }
//   }
//   console.log('ok')
  

// })
let categoryExplaine = {
  portret: 'Портрети',
  wedding: 'Весілля'

};
$('.navItem').click(function(e){
  let category = e.target.id;
  $('.portretContainer').empty();
  $('.sliderContainer').css('display','none')
  $('.portretContainer').css('display','flex')
  $('.portretHeaderContainer').text(`${categoryExplaine[`${category}`]}`)
  for(let el of data){
    if (el.category == category){
      $('.portretContainer').append(`<div class = 'photosesionItem' style="background-image: url(./img/${el.folder}/1.JPG)";></div>`)
    }
  }
  $('.photosesionItem').click(function(e){
    
    let bgImg = e.target.style.backgroundImage;
    let startSlice = bgImg.indexOf('img/')+4;
    let endSlice = bgImg.lastIndexOf('/');
    let folderSrc = bgImg.slice(startSlice,endSlice)
      console.log(folderSrc)
      $('.portretContainer').empty();
      for(el of data){
        if(el.folder == folderSrc){
          for(let i = 1; i<=el.count; i++){
            $('.portretContainer').append(`<img class='fotosesionPhoto' src='./img/${folderSrc}/${i}.JPG'>`)
          }
        }
      }
  })
$('.navBar').css('left','-20%')
$('.homePageContainer').css('width','100%')
$('.homePageContainer').css('left','0')
})
let menuOpen = true;
$('.menu').click(function(){
  let screenWidth = ($('.wrap').css('width')).slice(0,($('.wrap').css('width')).indexOf('px'))

  console.log(screenWidth)
  if(screenWidth>1200){
    if(menuOpen == true){
      $('.navBar').css('left','-20%')
      $('.homePage').css('width','100%')
      $('.homePage').css('left','0')
      $('.menu').css('left','0')
      menuOpen = false;
    }
    else if(menuOpen == false){
      $('.navBar').css('left','0')
      $('.homePage').css('width','100%')
      $('.homePage').css('left','20%')
      $('.menu').css('left','20%')
      menuOpen = true
    }
  }else{
    if(menuOpen == true){
      $('.homePage').css('width','100%')
      $('.homePage').css('left','0')
      $('.homePageContainer').css('display','flex')
      $('.navBar').css('left','-20%')
      $('.menu').css('left','0')
      menuOpen = false;
    }else if(menuOpen == false){
      $('.homePageContainer').css('display','none')
      $('.navBar').css('width','80%')
      $('.navBar').css('left','0')
      $('.menu').css('left','80%')
      menuOpen = true
    }
    
  }
 
  
})