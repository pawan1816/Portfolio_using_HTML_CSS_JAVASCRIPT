function changeBG(color){
    let txt=document.getElementsByClassName('text');
    if(color=='#000000'){
        for(let elm of txt){
            elm.style.color='blue';
        }
    }
    else{
        for(let elm of txt){
            elm.style.color='nevy blue';
        }
    }
    document.body.style.backgroundColor = color;
    
  }


  var navbar = document.getElementById('text');
  var lastScrollTop = 0;
  
  window.addEventListener('scroll', function() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
    if (scrollTop > lastScrollTop) {
      // Scrolling down
      navbar.classList.add('transparent');
      navbar.classList.remove('text');
    } else {
      // Scrolling up
      navbar.classList.add('text');
      navbar.classList.remove('transparent');
    }
  
    lastScrollTop = scrollTop;
  });
  
  