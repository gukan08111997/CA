// Adding Animation on Scroll

const observer1 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const square = entry.target.querySelector(".welcome-div1");

    if (entry.isIntersecting) {
      square.classList.add("welcome-div1-animation");
      return; // if we added the class, exit the function
    }

    /* We're not intersecting, so remove the class! if you want to apply animation 
    every time we scroll to that element then include below line */
    // square.classList.remove("welcome-div1-animation");
  });
});

observer1.observe(document.querySelector(".welcome-div"));
const observer2 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const square = entry.target.querySelector(".welcome-div2");

    if (entry.isIntersecting) {
      square.classList.add("welcome-div2-animation");
      return; // if we added the class, exit the function
    }

    // We're not intersecting, so remove the class!
    // square.classList.remove("welcome-div2-animation");
  });
});

observer2.observe(document.querySelector(".welcome-div"));
const observer3 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const square = entry.target.querySelector(".welcome-div3");

    if (entry.isIntersecting) {
      square.classList.add("welcome-div3-animation");
      return; // if we added the class, exit the function
    }

    // We're not intersecting, so remove the class!
    // square.classList.remove("welcome-div3-animation");
  });
});

observer3.observe(document.querySelector(".welcome-div"));

// card-animation on scroll

const observer4 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const square = entry.target.querySelector(".card1");

    if (entry.isIntersecting) {
      square.classList.remove("opacity");
      square.classList.add("card-animation");
      return; // if we added the class, exit the function
    }

    // We're not intersecting, so remove the class!
    // square.classList.remove("card-animation");
    // square.classList.add("opacity");
  });
});

observer4.observe(document.querySelector(".card-container"));
const observer5 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const square = entry.target.querySelector(".card2");

    if (entry.isIntersecting) {
      setTimeout(() => {
        square.classList.remove("opacity");
        square.classList.add("card-animation");
      }, 1000);

      return; // if we added the class, exit the function
    }

    // We're not intersecting, so remove the class!
    // square.classList.remove("card-animation");
    // square.classList.add("opacity");
  });
});

observer5.observe(document.querySelector(".card-container"));
const observer6 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const square = entry.target.querySelector(".card3");

    if (entry.isIntersecting) {
      setTimeout(() => {
        square.classList.remove("opacity");
        square.classList.add("card-animation");
      }, 1500);

      return; // if we added the class, exit the function
    }

    // We're not intersecting, so remove the class!
    // square.classList.remove("card-animation");
    // square.classList.add("opacity");
  });
});

observer6.observe(document.querySelector(".card-container"));
const observer7 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const square = entry.target.querySelector(".card4");

    if (entry.isIntersecting) {
      setTimeout(() => {
        square.classList.remove("opacity");
        square.classList.add("card-animation");
      }, 2000);
      return; // if we added the class, exit the function
    }

    // We're not intersecting, so remove the class!
    // square.classList.remove("card-animation");
    // square.classList.add("opacity");
  });
});

observer7.observe(document.querySelector(".card-container"));
const observer8 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const square = entry.target.querySelector(".team-section>img");

    if (entry.isIntersecting) {
      square.classList.remove("opacity");
      square.classList.add("phone-animation");

      return; // if we added the class, exit the function
    }

    // We're not intersecting, so remove the class!
    // square.classList.remove("phone-animation");
    // square.classList.add("opacity");
  });
});

observer8.observe(document.querySelector(".team-section"));

const observer9 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const square = entry.target.querySelector(".team-container>div:nth-child(1)");

    if (entry.isIntersecting) {
      setTimeout(() => {
      square.classList.remove("opacity");
      square.classList.add("card-animation");
    }, 1000);
      return; // if we added the class, exit the function
    }

    // We're not intersecting, so remove the class!
    // square.classList.remove("card-animation");
    // square.classList.add("opacity");
  });
});

observer9.observe(document.querySelector(".team-container"));
const observer10 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const square = entry.target.querySelector(".team-container>div:nth-child(2)");

    if (entry.isIntersecting) {
      setTimeout(() => {
      square.classList.remove("opacity");
      square.classList.add("card-animation");
    }, 1500);
      return; // if we added the class, exit the function
    }

    // We're not intersecting, so remove the class!
    // square.classList.remove("card-animation");
    // square.classList.add("opacity");
  });
});

observer10.observe(document.querySelector(".team-container"));
const observer11 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const square = entry.target.querySelector(".team-container>div:nth-child(3)");

    if (entry.isIntersecting) {
      setTimeout(() => {
      square.classList.remove("opacity");
      square.classList.add("card-animation");
    }, 2000);
      return; // if we added the class, exit the function
    }

    // We're not intersecting, so remove the class!
    // square.classList.remove("card-animation");
    // square.classList.add("opacity");
  });
});

observer11.observe(document.querySelector(".team-container"));


//   Slick Animation Effect
$(document).ready(function ($) {
  var alterClass = function() {
    var ww = document.body.clientWidth;
    if (ww < 400) {
      $('#slick-carousel').removeClass('autoplay');
      $('#contact-submit-btn').removeClass('w-25');
      //add the class for mobile width  
      $('#slick-carousel').addClass('mobile-slick');
    } else if (ww >= 401) {
      $('#slick-carousel').addClass('autoplay');
      $('#contact-submit-btn').addClass('w-25');
    };
  };
  $(window).resize(function(){
    alterClass();
  });
  //Fire it when the page first loads:
  alterClass();
  $(".autoplay").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  });
  //slick specification for mobile width
  
  $(".mobile-slick").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  });

  
 
});

jQuery(document).ready(function($) {
 
});





