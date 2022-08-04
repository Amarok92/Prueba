function likeButton(){
    let heart = document.querySelector('.heart');
    let likes = document.querySelector('.likes');
    if (heart.src.match("heart.png")){
      heart.src = "heart_red.png";
      likes.innerHTML = "6,389 likes";
    }
    else{
    heart.src = "heart_red.png";
    likes.innerHTML = "6,388 likes";
    }
}

  var Swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    effect: "fade",
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

function Post(){
  document.getElementById('Post').display = 'block';
}

