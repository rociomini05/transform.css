<script>
  $(document).ready(function(){

  $('body').scrollspy({target: ".navbar", offset: 50});   


  $("#myNavbar a").on('click', function(event) {
  
    if (this.hash !== "") {
  
      event.preventDefault();

      var hash = this.hash;

     
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
       
        window.location.hash = hash;
      });
    }  
  });
});

    $(document).ready(function(){
    $(".fancybox").fancybox({
        openEffect: "none",
        closeEffect: "none"
    });
});

 $(function() {
    $(window).scroll(function() {
      console.log($(window).scrollTop());
      if ($(window).scrollTop() > 180){
        $("#logo_1").fadeIn('slow'); 
      }else{
        $("#logo_1").hide(); 
      }
    });
  });
   
  </script>