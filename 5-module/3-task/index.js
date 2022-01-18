function initCarousel() {
  let arrowRight = document.querySelector('.carousel__arrow_right');
  let arrowLeft = document.querySelector('.carousel__arrow_left');
  let slide = document.querySelector('.carousel__inner');
  let slideCount = 4;
  let slideNumber = 1;
  let slideWidth = slide.offsetWidth;

  arrowLeft.style.display = 'none';
  arrowRight.onclick =  function() {
      
      if (slideNumber <= slideCount ) {
        
        slide.style.transform = `translateX(-${slideWidth * slideNumber + 'px'})`;
        arrowLeft.style.display = 'flex';
   
        slideNumber++;
        
        if (slideNumber == slideCount) {
          this.style.display = 'none';
          arrowLeft.style.display = 'flex';
         
        }
      
      }
      
  }
  arrowLeft.onclick =  function(){
      
    if (slideNumber <= slideCount ) {
      slideNumber -=1;
      slide.style.transform = `translateX(${slideWidth - slideWidth * slideNumber  + 'px'})`;
            
      if (slideNumber == 1) {
        this.style.display = 'none';
      
      }
      if (slideNumber < slideCount) { 
        arrowRight.style.display = 'flex';
      }
    }
     
  }

  
}

