let buttonStart = document.querySelector('#buttonStart');
let backgroundStart = document.querySelector('.backgroundStart');
let containerModal = document.querySelector('.containerModal');
let modalButton = document.querySelector('#modalButton');

//при неправильном ответе
let error_answer = document.getElementById('error_answer');
//при правильном ответе
let right_answer = document.getElementById('right_answer');

// //старт
// let start_music_1 = document.getElementById('start_music_1');
// //пауза
// let pause_music_1 = document.getElementById('pause_music_1');

//1 мелодия в лесу родилась елочка
let myAudio_1 = document.getElementById('myAudio_1');
let myAudio_1_after = document.getElementById('myAudio_1_after');

//2 мелодия Расскажи, Снегурочка
let myAudio_2 = document.getElementById('myAudio_2');
let myAudio_2_after = document.getElementById('myAudio_2_after');

//3 мелодия Кабы не было зимы
let myAudio_3 = document.getElementById('myAudio_3');
let myAudio_3_after = document.getElementById('myAudio_3_after');

//4 мелодия Маленькой елочке холодно зимой
let myAudio_4 = document.getElementById('myAudio_4');
let myAudio_4_after = document.getElementById('myAudio_4_after');

//5 мелодия НГ к нам мчится
let myAudio_5 = document.getElementById('myAudio_5');
let myAudio_5_after = document.getElementById('myAudio_5_after');

//6 мелодия Песня о снежинке
let myAudio_6 = document.getElementById('myAudio_6');
let myAudio_6_after = document.getElementById('myAudio_6_after');

//7 мелодия зима-холода
let myAudio_7 = document.getElementById('myAudio_7');
let myAudio_7_after = document.getElementById('myAudio_7_after');

//8 мелодия потолок ледяной дверь скрепучая
let myAudio_8 = document.getElementById('myAudio_8');
let myAudio_8_after = document.getElementById('myAudio_8_after');

//9 мелодия Три белых коня
let myAudio_9 = document.getElementById('myAudio_9');
let myAudio_9_after = document.getElementById('myAudio_9_after');

//10 мелодия звенит январьская вьюга
let myAudio_10 = document.getElementById('myAudio_10');
let myAudio_10_after = document.getElementById('myAudio_10_after');

let balls = 0;

//1 в лесу родилась елочка+
//2 Расскажи, Снегурочка +
//3 Кабы не было зимы+
//4«Маленькой елочке холодно зимой»+
//5 НГ к нам мчится +
//6 Песня о снежинке+
//7 зима-холода+
//8 потолок ледяной дверь скрепучая +
//9 Три белых коня +
//10 звенит январьская вьюга +


buttonStart.onclick = function(){
    backgroundStart.style.display = 'none';
    containerModal.style.display = 'block';
}

modalButton.onclick = function(){
    containerModal.style.display = 'none';
    $('#music_level_1').css('display', 'block');
    $('#gir').css('display', 'block');
}
  


function gir() {
    let nums = document.getElementById('gir').className; 
    if(nums == 'gir_1') {document.getElementById('gir').className='gir_2';}  
    if(nums == 'gir_2') {document.getElementById('gir').className='gir_3';}  
    if(nums == 'gir_3') {document.getElementById('gir').className='gir_1';} 
}  
setInterval(gir, 500); 


//-----------------1 уровень------------------

myAudio_1.pause();
//для старта и паузы
// $('#start1').click(function(){
//   myAudio_1.play();
//   $('#start1').css('display', 'none');
//   $('#pause1').css('display', 'block');
// });

// $('#pause1').click(function(){
//   myAudio_1.pause();
//   $('#pause1').css('display', 'none');
//   $('#start1').css('display', 'block');
// });

let isPlaying1 = false;
//для старта и паузы
$('.but_start_pause').onclick = func_start_pause_1;
function func_start_pause_1() {
  isPlaying1 ? myAudio_1.pause() : myAudio_1.play();
};

myAudio_1.onplaying = function() {
  isPlaying1 = true;
  $('#start1').css('display', 'none');
  $('#pause1').css('display', 'block');
};
myAudio_1.onpause = function() {
  isPlaying1 = false;
  $('#start1').css('display', 'block');
  $('#pause1').css('display', 'none');
};

  // if(myAudio_1.paused){
  //   myAudio_1.play();
  //   $('#start1').css('display', 'block');
  //   $('#pause1').css('display', 'none');
  // } else {
  //   myAudio_1.pause();
  //   $('#start1').css('display', 'none');
  //   $('#pause1').css('display', 'block');
  // }



  
//1 уровень
//1 ответ - не прав.
$('#music1_1').click(function () {
//звук проигрыша
  $('#pause1').css('display', 'none');
  $('#start1').css('display', 'block');

  error_answer.play();
  myAudio_1.pause();

  function audio_music(){
  myAudio_1_after.play();
  }
  setTimeout(audio_music, 1000);
  
  //появление кнопки "следующий уровень"
  function button_next_level_1(){
    $('#next_level_1_2').addClass('next_level_error');
  }//ПОНЕМЯТЬ ВРЕМЯ
  setTimeout(button_next_level_1, 1000);

  $('#music1_1').addClass('error');
  $('#music1_2').addClass('error_right_answer');

  $('#music1_1').attr('disabled', true);
  $('#music1_2').attr('disabled', true);
  $('#music1_3').attr('disabled', true);
  $('.but_start_pause').attr('disabled', true);

});

//3 ответ - не прав.
$('#music1_3').click(function () {
  
  $('#pause1').css('display', 'none');
  $('#start1').css('display', 'block');

  //звук проигрыша
  error_answer.play();
  myAudio_1.pause();

  function audio_music(){
    myAudio_1_after.play();
  }
  setTimeout(audio_music, 1000);

  //появление кнопки "следующий уровень"
  function button_next_level_1(){
    $('#next_level_1_2').addClass('next_level_error');
  }//ПОНЕМЯТЬ ВРЕМЯ
  setTimeout(button_next_level_1, 1000);

  $('#music1_3').addClass('error');
  $('#music1_2').addClass('error_right_answer');
  
  $('#music1_1').attr('disabled', true);
  $('#music1_2').attr('disabled', true);
  $('#music1_3').attr('disabled', true);
  $('.but_start_pause').attr('disabled', true);
});

//2 ответ - прав.

$('#music1_2').click(function () {
  if(balls == 0){
    balls++;
    console.log(balls);
  }
  
  // $('#pause1').css('display', 'none');
  // $('#start1').css('display', 'none');

  $('.containerMusic').css('margin', 30 + 'px');
  //звук выигрыша
  right_answer.play();
  myAudio_1.pause();
  //правильный ответ музыка
  function audio_music(){
    myAudio_1_after.play();
  }
  setTimeout(audio_music, 1000);

  //появление кнопки "следующий уровень"
  function button_next_level_1(){
    $('#next_level_1_2').css('display', 'block');
  }//ПОНЕМЯТЬ ВРЕМЯ
  setTimeout(button_next_level_1, 1000);

  $('#music1_1').css('display', 'none');
  $('#music1_3').css('display', 'none');
   $('.but_start_pause').css('display', 'none');
  $('.but_start_pause').addClass('great_not_the_right_answer');
  $('#music1_2').addClass('great');  
});

//функция кнопки след уровень
$('#next_level_1_2').click(function () {
  $('#music_level_1').css('display', 'none');
  $('#music_level_2').css('display', 'block');
  myAudio_1.pause();
  myAudio_1_after.pause();
  //isPlaying = false;
  // $('.Button_musics').add('Button_musics');
  // $('#start_music_2').css('display', 'block');
  //$('.but_start_pause').css('display', 'block');
  $('.next_level_1_2').removeClass('next_level_error')
  $('#pause1').css('display', 'none');
  $('#start1').css('display', 'none');
  $('#start2').css('display', 'block');
  $('.but_start_pause').attr('disabled', false);
  
});




//-----------------2 уровень------------------
// myAudio_2.pause();
// //для старта и паузы
// $('#start2').click(function(){
//   myAudio_2.play();
//   $('#start2').css('display', 'none');
//   $('#pause2').css('display', 'block');
// });

// $('#pause2').click(function(){
//   myAudio_2.pause();
//   $('#pause2').css('display', 'none');
//   $('#start2').css('display', 'block');
// });

let isPlaying2 = false;
//для старта и паузы
$('.but_start_pause').onclick = func_start_pause_2;
function func_start_pause_2() {
  isPlaying2 ? myAudio_2.pause() : myAudio_2.play();
};

myAudio_2.onplaying = function() {
  isPlaying2 = true;
  $('#start2').css('display', 'none');
  $('#pause2').css('display', 'block');
};
myAudio_2.onpause = function() {
  isPlaying2 = false;
  $('#start2').css('display', 'block');
  $('#pause2').css('display', 'none');
};


//1 ответ - не прав.
$('#music2_1').click(function () {
//звук проигрыша
  error_answer.play();
  myAudio_2.pause();

  $('#pause2').css('display', 'none');
  $('#start2').css('display', 'block');

  function audio_music(){
  myAudio_2_after.play();
  }
  setTimeout(audio_music, 1000);
  
  //появление кнопки "следующий уровень"
  function button_next_level_2(){
    $('#next_level_2_3').addClass('next_level_error');
    //$('.next_level').addClass('next_level_error');
    // $('.next_level').css('display', 'block');
  }//ПОНЕМЯТЬ ВРЕМЯ
  setTimeout(button_next_level_2, 1000);

  $('#music2_1').addClass('error');
  $('#music2_3').addClass('error_right_answer');

  $('#music2_1').attr('disabled', true);
  $('#music2_2').attr('disabled', true);
  $('#music2_3').attr('disabled', true);
  $('.but_start_pause').attr('disabled', true);
});

//2 ответ - не прав.
$('#music2_2').click(function () {
  //звук проигрыша
  error_answer.play();
  myAudio_2.pause();

  $('#pause2').css('display', 'none');
  $('#start2').css('display', 'block');

  function audio_music(){
    myAudio_2_after.play();
  }
  setTimeout(audio_music, 1000);

  //появление кнопки "следующий уровень"
  function button_next_level_2(){
    $('#next_level_2_3').addClass('next_level_error');
  }//ПОНЕМЯТЬ ВРЕМЯ
  setTimeout(button_next_level_2, 1000);

  $('#music2_2').addClass('error');
  $('#music2_3').addClass('error_right_answer');
  
  $('#music2_1').attr('disabled', true);
  $('#music2_2').attr('disabled', true);
  $('#music2_3').attr('disabled', true);
  $('.but_start_pause').attr('disabled', true);
});

//3 ответ - прав.
$('#music2_3').click(function () {
  $('.containerMusic').css('margin', 30 + 'px');
  balls++;
  console.log(balls);
  //звук выигрыша
  right_answer.play();
  myAudio_2.pause();

  function audio_music(){
    myAudio_2_after.play();
  }
  setTimeout(audio_music, 1000);

  //появление кнопки "следующий уровень"
  function button_next_level_2(){
    $('#next_level_2_3').css('display', 'block');
  }//ПОНЕМЯТЬ ВРЕМЯ
  setTimeout(button_next_level_2, 1000);

  $('#music2_1').addClass('great_not_the_right_answer');
  $('#music2_2').addClass('great_not_the_right_answer');
  $('.but_start_pause').addClass('great_not_the_right_answer');
  $('#music2_3').addClass('great');
  //$('.but_start_pause').attr('disabled', true);
});

//функция кнопки след уровень
$('#next_level_2_3').click(function () {
  $('#music_level_2').css('display', 'none');
  $('#music_level_3').css('display', 'block');
  myAudio_2.pause();
  myAudio_2_after.pause();
  $('#pause2').css('display', 'none');
  $('#start3').css('display', 'block');
  $('.but_start_pause').attr('disabled', false);
});


//-----------------3 уровень------------------
let isPlaying3 = false;
//для старта и паузы
$('.but_start_pause').onclick = func_start_pause_3;
function func_start_pause_3() {
  isPlaying3 ? myAudio_3.pause() : myAudio_3.play();
};

myAudio_3.onplaying = function() {
  isPlaying3 = true;
  $('#start3').css('display', 'none');
  $('#pause3').css('display', 'block');
};
myAudio_3.onpause = function() {
  isPlaying3 = false;
  $('#start3').css('display', 'block');
  $('#pause3').css('display', 'none');
};


//1 ответ - не прав.
$('#music3_1').click(function () {
//звук проигрыша
  error_answer.play();
  myAudio_3.pause();

  $('#pause3').css('display', 'none');
  $('#start3').css('display', 'block');

  function audio_music(){
  myAudio_3_after.play();
  }
  setTimeout(audio_music, 1000);
  
  //появление кнопки "следующий уровень"
  function button_next_level_3(){
    $('#next_level_3_4').addClass('next_level_error');
  }//ПОНЕМЯТЬ ВРЕМЯ
  setTimeout(button_next_level_3, 1000);

  $('#music3_1').addClass('error');
  $('#music3_3').addClass('error_right_answer');

  $('#music3_1').attr('disabled', true);
  $('#music3_2').attr('disabled', true);
  $('#music3_3').attr('disabled', true);
  $('.but_start_pause').attr('disabled', true);
});

//2 ответ - не прав.
$('#music3_2').click(function () {
  //звук проигрыша
  error_answer.play();
  myAudio_3.pause();

  $('#pause3').css('display', 'none');
  $('#start3').css('display', 'block');

  function audio_music(){
    myAudio_3_after.play();
  }
  setTimeout(audio_music, 1000);

  //появление кнопки "следующий уровень"
  function button_next_level_3(){
    $('#next_level_3_4').addClass('next_level_error');
  }//ПОНЕМЯТЬ ВРЕМЯ
  setTimeout(button_next_level_3, 1000);

  $('#music3_2').addClass('error');
  $('#music3_3').addClass('error_right_answer');
  
  $('#music3_1').attr('disabled', true);
  $('#music3_2').attr('disabled', true);
  $('#music3_3').attr('disabled', true);
  $('.but_start_pause').attr('disabled', true);
});

//3 ответ - прав.
$('#music3_3').click(function () {
  $('.containerMusic').css('margin', 30 + 'px');
  balls++;
  console.log(balls);
  myAudio_3.pause();
  //звук выигрыша
  right_answer.play();
  

  function audio_music(){
    myAudio_3_after.play();
  }
  setTimeout(audio_music, 1000);

  //появление кнопки "следующий уровень"
  function button_next_level_3(){
    $('#next_level_3_4').css('display', 'block');
  }//ПОНЕМЯТЬ ВРЕМЯ
  setTimeout(button_next_level_3, 1000);

  $('#music3_1').addClass('great_not_the_right_answer');
  $('#music3_2').addClass('great_not_the_right_answer');
  $('.but_start_pause').addClass('great_not_the_right_answer');
  $('#music3_3').addClass('great');
  
  //$('.but_start_pause').attr('disabled', true);
});

//функция кнопки след уровень
$('#next_level_3_4').click(function () {
  $('#music_level_3').css('display', 'none');
  $('#music_level_4').css('display', 'block');
  myAudio_3.pause();
  myAudio_3_after.pause();
  $('#pause3').css('display', 'none');
  $('#start4').css('display', 'block');
  $('.but_start_pause').attr('disabled', false);
});


//-----------------4 уровень------------------
let isPlaying4 = false;
//для старта и паузы
$('.but_start_pause').onclick = func_start_pause_4;
function func_start_pause_4() {
  isPlaying4 ? myAudio_4.pause() : myAudio_4.play();
};

myAudio_4.onplaying = function() {
  isPlaying4 = true;
  $('#start4').css('display', 'none');
  $('#pause4').css('display', 'block');
};
myAudio_4.onpause = function() {
  isPlaying4 = false;
  $('#start4').css('display', 'block');
  $('#pause4').css('display', 'none');
};


//3 ответ - не прав.
$('#music4_3').click(function () {
//звук проигрыша
  error_answer.play();
  myAudio_4.pause();

  $('#pause4').css('display', 'none');
  $('#start4').css('display', 'block');

  function audio_music(){
  myAudio_4_after.play();
  }
  setTimeout(audio_music, 1000);
  
  //появление кнопки "следующий уровень"
  function button_next_level_4(){
    $('#next_level_4_5').addClass('next_level_error');
  }//ПОНЕМЯТЬ ВРЕМЯ
  setTimeout(button_next_level_4, 1000);

  $('#music4_3').addClass('error');
  $('#music4_1').addClass('error_right_answer');

  $('#music4_1').attr('disabled', true);
  $('#music4_2').attr('disabled', true);
  $('#music4_3').attr('disabled', true);
  $('.but_start_pause').attr('disabled', true);
});

//2 ответ - не прав.
$('#music4_2').click(function () {
  //звук проигрыша
  error_answer.play();
  myAudio_4.pause();

  $('#pause3').css('display', 'none');
  $('#start4').css('display', 'block');

  function audio_music(){
    myAudio_4_after.play();
  }
  setTimeout(audio_music, 1000);

  //появление кнопки "следующий уровень"
  function button_next_level_4(){
    $('#next_level_4_5').addClass('next_level_error');
  }//ПОНЕМЯТЬ ВРЕМЯ
  setTimeout(button_next_level_4, 1000);

  $('#music4_2').addClass('error');
  $('#music4_1').addClass('error_right_answer');
  
  $('#music4_1').attr('disabled', true);
  $('#music4_2').attr('disabled', true);
  $('#music4_3').attr('disabled', true);
  $('.but_start_pause').attr('disabled', true);
});

//1 ответ - прав.
$('#music4_1').click(function () {
  $('.containerMusic').css('margin', 30 + 'px');
  balls++;
  console.log(balls);
  //звук выигрыша
  right_answer.play();
  myAudio_4.pause();

  function audio_music(){
    myAudio_4_after.play();
  }
  setTimeout(audio_music, 1000);

  //появление кнопки "следующий уровень"
  function button_next_level_4(){
    $('#next_level_4_5').css('display', 'block');
  }//ПОНЕМЯТЬ ВРЕМЯ
  setTimeout(button_next_level_4, 1000);

  $('#music4_3').addClass('great_not_the_right_answer');
  $('#music4_2').addClass('great_not_the_right_answer');
  $('.but_start_pause').addClass('great_not_the_right_answer');
  $('#music4_1').addClass('great');
  //$('.but_start_pause').attr('disabled', true);
});

//функция кнопки след уровень
$('#next_level_4_5').click(function () {
  $('#music_level_4').css('display', 'none');
  $('#music_level_5').css('display', 'block');
  myAudio_4.pause();
  myAudio_4_after.pause();
  $('#pause4').css('display', 'none');
  $('#start5').css('display', 'block');
  $('.but_start_pause').attr('disabled', false);
});


//-----------------5 уровень------------------
let isPlaying5 = false;
//для старта и паузы
$('.but_start_pause').onclick = func_start_pause_5;
function func_start_pause_5() {
  isPlaying5 ? myAudio_5.pause() : myAudio_5.play();
};

myAudio_5.onplaying = function() {
  isPlaying5 = true;
  $('#start5').css('display', 'none');
  $('#pause5').css('display', 'block');
};
myAudio_5.onpause = function() {
  isPlaying5 = false;
  $('#start5').css('display', 'block');
  $('#pause5').css('display', 'none');
};

//1 ответ - не прав.
$('#music5_1').click(function () {
//звук проигрыша
  error_answer.play();
  myAudio_5.pause();

  $('#pause5').css('display', 'none');
  $('#start5').css('display', 'block');

  function audio_music(){
  myAudio_5_after.play();
  }
  setTimeout(audio_music, 1000);
  
  //появление кнопки "следующий уровень"
  function button_next_level_5(){
    $('#next_level_5_6').addClass('next_level_error');
  }//ПОНЕМЯТЬ ВРЕМЯ
  setTimeout(button_next_level_5, 1000);

  $('#music5_1').addClass('error');
  $('#music5_3').addClass('error_right_answer');

  $('#music5_1').attr('disabled', true);
  $('#music5_2').attr('disabled', true);
  $('#music5_3').attr('disabled', true);
  $('.but_start_pause').attr('disabled', true);
});

//2 ответ - не прав.
$('#music5_2').click(function () {
  //звук проигрыша
  error_answer.play();
  myAudio_5.pause();

  $('#pause5').css('display', 'none');
  $('#start5').css('display', 'block');

  function audio_music(){
    myAudio_5_after.play();
  }
  setTimeout(audio_music, 1000);

  //появление кнопки "следующий уровень"
  function button_next_level_5(){
    $('#next_level_5_6').addClass('next_level_error');
  }//ПОНЕМЯТЬ ВРЕМЯ
  setTimeout(button_next_level_5, 1000);

  $('#music5_2').addClass('error');
  $('#music5_3').addClass('error_right_answer');
  
  $('#music5_1').attr('disabled', true);
  $('#music5_2').attr('disabled', true);
  $('#music5_3').attr('disabled', true);
  $('.but_start_pause').attr('disabled', true);
});

//3 ответ - прав.
$('#music5_3').click(function () {
  $('.containerMusic').css('margin', 30 + 'px');
  balls++;
  console.log(balls);
  myAudio_5.pause();
  //звук выигрыша
  right_answer.play();
  
  function audio_music(){
    myAudio_5_after.play();
  }
  setTimeout(audio_music, 1000);

  //появление кнопки "следующий уровень"
  function button_next_level_5(){
    $('#next_level_5_6').css('display', 'block');
  }//ПОНЕМЯТЬ ВРЕМЯ
  setTimeout(button_next_level_5, 1000);

  $('#music5_1').addClass('great_not_the_right_answer');
  $('#music5_2').addClass('great_not_the_right_answer');
  $('.but_start_pause').addClass('great_not_the_right_answer');
  $('#music5_3').addClass('great');
  
  //$('.but_start_pause').attr('disabled', true);
});

//функция кнопки след уровень
$('#next_level_5_6').click(function () {
  $('#music_level_5').css('display', 'none');
  $('#music_level_6').css('display', 'block');
  myAudio_5.pause();
  myAudio_5_after.pause();
  $('#pause5').css('display', 'none');
  $('#start6').css('display', 'block');
  $('.but_start_pause').attr('disabled', false);
});


//-----------------6 уровень------------------
let isPlaying6 = false;
//для старта и паузы
$('.but_start_pause').onclick = func_start_pause_6;
function func_start_pause_6() {
  isPlaying6 ? myAudio_6.pause() : myAudio_6.play();
};

myAudio_6.onplaying = function() {
  isPlaying6 = true;
  $('#start6').css('display', 'none');
  $('#pause6').css('display', 'block');
};
myAudio_6.onpause = function() {
  isPlaying6 = false;
  $('#start6').css('display', 'block');
  $('#pause6').css('display', 'none');
};

//6 уровень
//1 ответ - не прав.
$('#music6_1').click(function () {
//звук проигрыша
$('#pause6').css('display', 'none');
  $('#start6').css('display', 'block');

  error_answer.play();
  myAudio_6.pause();

  function audio_music(){
  myAudio_6_after.play();
  }
  setTimeout(audio_music, 1000);
  
  //появление кнопки "следующий уровень"
  function button_next_level_6(){
    $('#next_level_6_7').addClass('next_level_error');
  }//ПОНЕМЯТЬ ВРЕМЯ
  setTimeout(button_next_level_6, 1000);

  $('#music6_1').addClass('error');
  $('#music6_2').addClass('error_right_answer');

  $('#music6_1').attr('disabled', true);
  $('#music6_2').attr('disabled', true);
  $('#music6_3').attr('disabled', true);
  $('.but_start_pause').attr('disabled', true);

});

//3 ответ - не прав.
$('#music6_3').click(function () {
  
  $('#pause6').css('display', 'none');
  $('#start6').css('display', 'block');

  //звук проигрыша
  error_answer.play();
  myAudio_6.pause();

  function audio_music(){
    myAudio_6_after.play();
  }
  setTimeout(audio_music, 1000);

  //появление кнопки "следующий уровень"
  function button_next_level_6(){
    $('#next_level_6_7').addClass('next_level_error');
  }//ПОНЕМЯТЬ ВРЕМЯ
  setTimeout(button_next_level_6, 1000);

  $('#music6_3').addClass('error');
  $('#music6_2').addClass('error_right_answer');
  
  $('#music6_1').attr('disabled', true);
  $('#music6_2').attr('disabled', true);
  $('#music6_3').attr('disabled', true);
  $('.but_start_pause').attr('disabled', true);
});

//2 ответ - прав.
$('#music6_2').click(function () {
  balls++;
  console.log(balls);
  $('.containerMusic').css('margin', 30 + 'px');
  //звук выигрыша
  right_answer.play();
  myAudio_6.pause();
  //правильный ответ музыка
  function audio_music(){
    myAudio_6_after.play();
  }
  setTimeout(audio_music, 1000);

  //появление кнопки "следующий уровень"
  function button_next_level_6(){
    $('#next_level_6_7').css('display', 'block');
  }//ПОНЕМЯТЬ ВРЕМЯ
  setTimeout(button_next_level_6, 1000);

  $('#music6_1').css('display', 'none');
  $('#music6_3').css('display', 'none');
   $('.but_start_pause').css('display', 'none');
  $('.but_start_pause').addClass('great_not_the_right_answer');
  $('#music6_2').addClass('great');  
});

//функция кнопки след уровень
$('#next_level_6_7').click(function () {
  $('#music_level_6').css('display', 'none');
  $('#music_level_7').css('display', 'block');
  myAudio_6.pause();
  myAudio_6_after.pause();
  $('.next_level_6_7').removeClass('next_level_error')
  $('#pause6').css('display', 'none');
  $('#start6').css('display', 'none');
  $('#start7').css('display', 'block');
  $('.but_start_pause').attr('disabled', false);
  
});


//-----------------7 уровень------------------
let isPlaying7 = false;
//для старта и паузы
$('.but_start_pause').onclick = func_start_pause_7;
function func_start_pause_7() {
  isPlaying7 ? myAudio_7.pause() : myAudio_7.play();
};

myAudio_7.onplaying = function() {
  isPlaying7 = true;
  $('#start7').css('display', 'none');
  $('#pause7').css('display', 'block');
};
myAudio_7.onpause = function() {
  isPlaying7 = false;
  $('#start7').css('display', 'block');
  $('#pause7').css('display', 'none');
};

//7 уровень
//1 ответ - не прав.
$('#music7_1').click(function () {

$('#pause7').css('display', 'none');
  $('#start7').css('display', 'block');
  
  //звук проигрыша
  error_answer.play();
  myAudio_7.pause();

  function audio_music(){
  myAudio_7_after.play();
  }
  setTimeout(audio_music, 1000);
  
  //появление кнопки "следующий уровень"
  function button_next_level_7(){
    $('#next_level_7_8').addClass('next_level_error');
  }//ПОНЕМЯТЬ ВРЕМЯ
  setTimeout(button_next_level_7, 1000);

  $('#music7_1').addClass('error');
  $('#music7_2').addClass('error_right_answer');

  $('#music7_1').attr('disabled', true);
  $('#music7_2').attr('disabled', true);
  $('#music7_3').attr('disabled', true);
  $('.but_start_pause').attr('disabled', true);

});

//3 ответ - не прав.
$('#music7_3').click(function () {
  
  $('#pause7').css('display', 'none');
  $('#start7').css('display', 'block');

  //звук проигрыша
  error_answer.play();
  myAudio_7.pause();

  function audio_music(){
    myAudio_7_after.play();
  }
  setTimeout(audio_music, 1000);

  //появление кнопки "следующий уровень"
  function button_next_level_7(){
    $('#next_level_7_8').addClass('next_level_error');
  }//ПОНЕМЯТЬ ВРЕМЯ
  setTimeout(button_next_level_7, 1000);

  $('#music7_3').addClass('error');
  $('#music7_2').addClass('error_right_answer');
  
  $('#music7_1').attr('disabled', true);
  $('#music7_2').attr('disabled', true);
  $('#music7_3').attr('disabled', true);
  $('.but_start_pause').attr('disabled', true);
});

//2 ответ - прав.
$('#music7_2').click(function () {
  balls++;
  console.log(balls);
  //звук выигрыша
  right_answer.play();
  myAudio_7.pause();
  //правильный ответ музыка
  function audio_music(){
    myAudio_7_after.play();
  }
  setTimeout(audio_music, 1000);

  //появление кнопки "следующий уровень"
  function button_next_level_7(){
    $('#next_level_7_8').css('display', 'block');
  }//ПОНЕМЯТЬ ВРЕМЯ
  setTimeout(button_next_level_7, 1000);

  $('#music7_1').css('display', 'none');
  $('#music7_3').css('display', 'none');
  $('.but_start_pause').css('display', 'none');
  $('.but_start_pause').addClass('great_not_the_right_answer');
  $('#music7_2').addClass('great');  
});

//функция кнопки след уровень
$('#next_level_7_8').click(function () {
  $('#music_level_7').css('display', 'none');
  $('#music_level_8').css('display', 'block');
  myAudio_7.pause();
  myAudio_7_after.pause();
  $('.next_level_7_8').removeClass('next_level_error')
  $('#pause7').css('display', 'none');
  $('#start7').css('display', 'none');
  $('#start8').css('display', 'block');
  $('.but_start_pause').attr('disabled', false);
  
});


//-----------------8 уровень------------------
let isPlaying8 = false;
//для старта и паузы
$('.but_start_pause').onclick = func_start_pause_8;
function func_start_pause_8() {
  isPlaying8 ? myAudio_8.pause() : myAudio_8.play();
};

myAudio_8.onplaying = function() {
  isPlaying8 = true;
  $('#start8').css('display', 'none');
  $('#pause8').css('display', 'block');
};
myAudio_8.onpause = function() {
  isPlaying8 = false;
  $('#start8').css('display', 'block');
  $('#pause8').css('display', 'none');
};

//8 уровень
//3 ответ - не прав.
$('#music8_3').click(function () {
  $('#pause8').css('display', 'none');
  $('#start8').css('display', 'block');

//звук проигрыша
  error_answer.play();
  myAudio_8.pause();

  function audio_music(){
  myAudio_8_after.play();
  }
  setTimeout(audio_music, 1000);
  
  //появление кнопки "следующий уровень"
  function button_next_level_8(){
    $('#next_level_8_9').addClass('next_level_error');
  }//ПОНЕМЯТЬ ВРЕМЯ
  setTimeout(button_next_level_8, 1000);

  $('#music8_3').addClass('error');
  $('#music8_1').addClass('error_right_answer');

  $('#music8_1').attr('disabled', true);
  $('#music8_2').attr('disabled', true);
  $('#music8_3').attr('disabled', true);
  $('.but_start_pause').attr('disabled', true);
});

//2 ответ - не прав.
$('#music8_2').click(function () {
  //звук проигрыша
  error_answer.play();
  myAudio_8.pause();

  $('#pause8').css('display', 'none');
  $('#start8').css('display', 'block');

  function audio_music(){
    myAudio_8_after.play();
  }
  setTimeout(audio_music, 1000);

  //появление кнопки "следующий уровень"
  function button_next_level_8(){
    $('#next_level_8_9').addClass('next_level_error');
  }//ПОНЕМЯТЬ ВРЕМЯ
  setTimeout(button_next_level_8, 1000);

  $('#music8_2').addClass('error');
  $('#music8_1').addClass('error_right_answer');
  
  $('#music8_1').attr('disabled', true);
  $('#music8_2').attr('disabled', true);
  $('#music8_3').attr('disabled', true);
  $('.but_start_pause').attr('disabled', true);
});

//1 ответ - прав.
$('#music8_1').click(function () {
  balls++;
  console.log(balls);
  //звук выигрыша
  right_answer.play();
  myAudio_8.pause();
  $('.containerMusic').css('margin', 30 + 'px');

  function audio_music(){
    myAudio_8_after.play();
  }
  setTimeout(audio_music, 1000);

  //появление кнопки "следующий уровень"
  function button_next_level_8(){
    $('#next_level_8_9').css('display', 'block');
  }//ПОНЕМЯТЬ ВРЕМЯ
  setTimeout(button_next_level_8, 1000);

  $('#music8_3').addClass('great_not_the_right_answer');
  $('#music8_2').addClass('great_not_the_right_answer');
  $('.but_start_pause').addClass('great_not_the_right_answer');
  $('#music8_1').addClass('great');
  //$('.but_start_pause').attr('disabled', true);
});

//функция кнопки след уровень
$('#next_level_8_9').click(function () {
  $('#music_level_8').css('display', 'none');
  $('#music_level_9').css('display', 'block');
  myAudio_8.pause();
  myAudio_8_after.pause();
  $('#pause8').css('display', 'none');
  $('#start9').css('display', 'block');
  //$('.next_level').removeClass('next_level_error');
  //$('.next_level').css('display', 'none');
  $('.but_start_pause').attr('disabled', false);
});



//-----------------9 уровень------------------
let isPlaying9 = false;
//для старта и паузы
$('.but_start_pause').onclick = func_start_pause_9;
function func_start_pause_9() {
  isPlaying9 ? myAudio_9.pause() : myAudio_9.play();
};

myAudio_9.onplaying = function() {
  isPlaying9 = true;
  $('#start9').css('display', 'none');
  $('#pause9').css('display', 'block');
};
myAudio_9.onpause = function() {
  isPlaying9 = false;
  $('#start9').css('display', 'block');
  $('#pause9').css('display', 'none');
};

//9 уровень
//1 ответ - не прав.
$('#music9_1').click(function () {

$('#pause9').css('display', 'none');
  $('#start9').css('display', 'block');
  
  //звук проигрыша
  error_answer.play();
  myAudio_9.pause();

  function audio_music(){
  myAudio_9_after.play();
  }
  setTimeout(audio_music, 1000);
  
  //появление кнопки "следующий уровень"
  function button_next_level_9(){
    $('#next_level_9_10').addClass('next_level_error');
  }//ПОНЕМЯТЬ ВРЕМЯ
  setTimeout(button_next_level_9, 1000);

  $('#music9_1').addClass('error');
  $('#music9_2').addClass('error_right_answer');

  $('#music9_1').attr('disabled', true);
  $('#music9_2').attr('disabled', true);
  $('#music9_3').attr('disabled', true);
  $('.but_start_pause').attr('disabled', true);

});

//3 ответ - не прав.
$('#music9_3').click(function () {
  
  $('#pause9').css('display', 'none');
  $('#start9').css('display', 'block');

  //звук проигрыша
  error_answer.play();
  myAudio_9.pause();

  function audio_music(){
    myAudio_9_after.play();
  }
  setTimeout(audio_music, 1000);

  //появление кнопки "следующий уровень"
  function button_next_level_9(){
    $('#next_level_9_10').addClass('next_level_error');
  }//ПОНЕМЯТЬ ВРЕМЯ
  setTimeout(button_next_level_9, 1000);

  $('#music9_3').addClass('error');
  $('#music9_2').addClass('error_right_answer');
  
  $('#music9_1').attr('disabled', true);
  $('#music9_2').attr('disabled', true);
  $('#music9_3').attr('disabled', true);
  $('.but_start_pause').attr('disabled', true);
});

//2 ответ - прав.
$('#music9_2').click(function () {
  balls++;
  console.log(balls);
  $('.containerMusic').css('margin', 30 + 'px');
  //звук выигрыша
  right_answer.play();
  myAudio_9.pause();
  //правильный ответ музыка
  function audio_music(){
    myAudio_9_after.play();
  }
  setTimeout(audio_music, 1000);

  //появление кнопки "следующий уровень"
  function button_next_level_9(){
    $('#next_level_9_10').css('display', 'block');
  }//ПОНЕМЯТЬ ВРЕМЯ
  setTimeout(button_next_level_9, 1000);

  $('#music9_1').css('display', 'none');
  $('#music9_3').css('display', 'none');
  $('.but_start_pause').css('display', 'none');
  $('.but_start_pause').addClass('great_not_the_right_answer');
  $('#music9_2').addClass('great');  
});

//функция кнопки след уровень
$('#next_level_9_10').click(function () {
  $('#music_level_9').css('display', 'none');
  $('#music_level_10').css('display', 'block');
  myAudio_9.pause();
  myAudio_9_after.pause();
  $('.next_level_9_10').removeClass('next_level_error')
  $('#pause9').css('display', 'none');
  $('#start9').css('display', 'none');
  $('#start10').css('display', 'block');
  $('.but_start_pause').attr('disabled', false);
  
});



//-----------------10 уровень------------------
let isPlaying10 = false;
//для старта и паузы
$('.but_start_pause').onclick = func_start_pause_10;
function func_start_pause_10() {
  isPlaying10 ? myAudio_10.pause() : myAudio_10.play();
};

myAudio_10.onplaying = function() {
  isPlaying10 = true;
  $('#start10').css('display', 'none');
  $('#pause10').css('display', 'block');
};
myAudio_10.onpause = function() {
  isPlaying10 = false;
  $('#start10').css('display', 'block');
  $('#pause10').css('display', 'none');
};

//1 ответ - не прав.
$('#music10_1').click(function () {
//звук проигрыша
  error_answer.play();
  myAudio_10.pause();

  $('#pause10').css('display', 'none');
  $('#start10').css('display', 'block');

  function audio_music(){
  myAudio_10_after.play();
  }
  setTimeout(audio_music, 1000);
  
  //появление кнопки "следующий уровень"
  function button_next_level_10(){
    $('#next_level_10').addClass('next_level_error');
  }//ПОНЕМЯТЬ ВРЕМЯ
  setTimeout(button_next_level_10, 1000);

  $('#music10_1').addClass('error');
  $('#music10_3').addClass('error_right_answer');

  $('#music10_1').attr('disabled', true);
  $('#music10_2').attr('disabled', true);
  $('#music10_3').attr('disabled', true);
  $('.but_start_pause').attr('disabled', true);
});

//2 ответ - не прав.
$('#music10_2').click(function () {
  //звук проигрыша
  error_answer.play();
  myAudio_10.pause();

  $('#pause10').css('display', 'none');
  $('#start10').css('display', 'block');

  function audio_music(){
    myAudio_10_after.play();
  }
  setTimeout(audio_music, 1000);

  //появление кнопки "следующий уровень"
  function button_next_level_10(){
    $('#next_level_10').addClass('next_level_error');
  }//ПОНЕМЯТЬ ВРЕМЯ
  setTimeout(button_next_level_10, 1000);

  $('#music10_2').addClass('error');
  $('#music10_3').addClass('error_right_answer');
  
  $('#music10_1').attr('disabled', true);
  $('#music10_2').attr('disabled', true);
  $('#music10_3').attr('disabled', true);
  $('.but_start_pause').attr('disabled', true);
});

//3 ответ - прав.
$('#music10_3').click(function () {
  $('.containerMusic').css('margin', 30 + 'px');
  balls++;
  console.log(balls);
  myAudio_10.pause();
  //звук выигрыша
  right_answer.play();
  
  function audio_music(){
    myAudio_10_after.play();
  }
  setTimeout(audio_music, 1000);

  //появление кнопки "следующий уровень"
  function button_next_level_10(){
    $('#next_level_10').css('display', 'block');
  }//ПОНЕМЯТЬ ВРЕМЯ
  setTimeout(button_next_level_10, 1000);

  $('#music10_1').addClass('great_not_the_right_answer');
  $('#music10_2').addClass('great_not_the_right_answer');
  $('.but_start_pause').addClass('great_not_the_right_answer');
  $('#music10_3').addClass('great');
  //$('.but_start_pause').attr('disabled', true);
});

//сколько правильных ответов
let ball = document.querySelector('#balls');
//функция кнопки след уровень
$('#next_level_10').click(function () {
  $('#music_level_10').css('display', 'none');
  // $('#music_level_6').css('display', 'block');
  myAudio_10.pause();
  myAudio_10_after.pause();
  $('#pause10').css('display', 'none');
  $('.container_finish').css('display', 'block');
  $('.but_start_pause').attr('disabled', false);
  $('.btn-reload').css('display', 'flex');


  if(balls == 1){
    ball.innerHTML = "Вы правильно угадали " + balls + " мелодию!";
  }
  else if(balls >= 2 || balls <= 4){
    ball.innerHTML = "Вы правильно угадали " + balls + " мелодии!";
  }
  else{
    ball.innerHTML = "Вы правильно угадали " + balls + " мелодий!";
  }

  let btnReload = document.querySelector(".btn-reload");
  //начать игру заново
    btnReload.onclick = function(){
    location.reload();
  };


});
