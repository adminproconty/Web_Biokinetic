$(document).ready( function () {

// READ MORE

  var heights = [];
    $('.tx').each(function() {
      heights[$(this).prop('id')] = $(this).height();
      $(this).css('height', '44px');
    });


  $('h6.more-btn, div.more-btn').click(function() {   
    

  
    var id = $(this).data('text');
    var currentHeight = $('#'+id).height();
    if(currentHeight == 44) $('#'+id).animate({height: heights[id]});
    else $('#'+id).animate({height: "44px"});
     $('.tx').each(function() {
      if($(this).prop('id') !== id) $(this).animate({height: "44px"});
    });
     
    if($('h6.more-btn[data-text="' + id + '"]').text() == 'CERRAR') {
      $('h6.more-btn[data-text="' + id + '"]').text('LEER MÁS');
      $('h6.more-btn[data-text="' + id + '"]').removeClass('active');
    }
    else {
      $('h6.more-btn[data-text="' + id + '"]').text('CERRAR');
      $('h6.more-btn[data-text="' + id + '"]').addClass('LEER MÁS');
    } 

     $('h6.more-btn').each(function() {
      if($(this).data('text') !== id) {
        $(this).text('LEER MÁS');  
        $(this).removeClass('active');    
      } 
      
     });
  });

});