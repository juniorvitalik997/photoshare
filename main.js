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
    $('.sliderContainer').css('backgroundImage',`url(./img/${currentPhoto}.jpeg)`)
    }else{
        currentPhoto = 1
        $('.sliderContainer').css('backgroundImage',`url(./img/${currentPhoto}.jpeg)`)
    }
    $('.currentSlide').text(currentPhoto)
})
$('#prewPhoto').click(function(){
    if(currentPhoto > 1){
        currentPhoto--
    $('.sliderContainer').css('backgroundImage',`url(./img/${currentPhoto}.jpeg)`)
    }else{
        currentPhoto = 3
        $('.sliderContainer').css('backgroundImage',`url(./img/${currentPhoto}.jpeg)`)
    }
    $('.currentSlide').text(currentPhoto)
})
$('#burger').click(function(){
  $('.navBar').slideToggle(500);        
  $('.navBar').css('witdh','100%');
  $('.navBar').css('height','100vh');
  $('#exit').css('margin-left','95%');
  $('.sliderContainer').css('display','none');
  $('footer').css('display','none');
  $('#burger').css('display','none');
  $('#exit').css('display','flex')
  $('#exit').css('position','fixed')
})
$('#exit').click(function(){
  $('.navBar').hide(0)
  $('#burger').css('display','flex');
  $('#exit').css('display','none')
  $('.sliderContainer').css('display','flex');
  $('footer').css('display','flex');
})