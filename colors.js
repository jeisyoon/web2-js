var Links = {
  setColor:function(color) {
    //   var alist = document.querySelectorAll('a');
    //   var i = 0;
    //   while(i < alist.length) {
    //    alist[i].style.color = color;
    //    i = i + 1;
    // }
    $('a').css('color',color);
  }
}
var Body = {
  setColor:function (color){
    // document.querySelector('body').style.color = color;
    $('body').css('color',color);
  },
  setBackGroundColor:function (color){
    // document.querySelector('body').style.backgroundColor = color;
    $('body').css('backgroundColor',color)
  }
}

function nightDayHandler(self){
  var taget = document.querySelector('body');
  if(self.value==='night'){
    Body.setBackGroundColor('black');
    Body.setColor('white');
    self.value='day';
    Links.setColor('powderblue');
  } else {
    Body.setBackGroundColor('White');
    Body.setColor('black');
    self.value='night';
    Links.setColor('blue');
    }
  }
