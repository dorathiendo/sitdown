$(document).ready(function(){
    $('#search select').change(function(e){
       console.log(e);
       var option = $(this).find('option:selected').val();
        switch(option){
            case 'name':
                $('#search input').attr('placeholder', 'Search team member name...');
                break;
            case 'role':
                $('#search input').attr('placeholder', 'Search role...');
                break;
            case 'date':
                $('#search input').attr('placeholder', 'Search date...');
                break;
        }
    });
   $('#search input').keyup(function(e){
       //console.log(e.target.value);
       var val = e.target.value.toUpperCase();
       var option = $('#search select option:selected').val();
       $('.mid .' + option).each(function(){
          if($(this).text().toUpperCase().indexOf(val) < 0){
              $(this).parents('.wrapper').fadeOut();
          } else {
              $(this).parents('.wrapper').fadeIn();
          }
       });
   });
});