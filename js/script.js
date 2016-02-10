'use strict'

$(function(){
  $('button').on('click',function(event){
    $('.grid').empty();
    var $input = $('.hashname').val();
    var $instapics = '';
    var $getInstagrid = $('.grid');


    $.ajax({
        dataType:'jsonp',
        method: 'GET',
        url:
        'https://api.instagram.com/v1/tags/'+$input+'/media/recent?count=12&client_id=b8586475183a4ad89a5a0ebd4a36fbc2'
         }).done(function(photoData){

    	$.each(photoData.data, function(index, value){
       		  
        $instapics += '<li class="profile-wrapper"><a href="' + value.link + '"><img src="' + value.images.standard_resolution.url + '"/></a>';
        $instapics += '<div class="transparent">' + '<div class="profile-picture">' + '<img src="' + value.user.profile_picture + '" /></div>';
        $instapics += '<div class="profile-data"><p>' + value.user.username + '</p><p><i class="fa fa-comment"></i>' + value.comments.count 
        $instapics += '<i class="fa fa-heart"></i>' + value.likes.count + '</p></div></div></div></li>';

     });

   $getInstagrid.append($instapics).slideDown();
      
    });
  });
});
