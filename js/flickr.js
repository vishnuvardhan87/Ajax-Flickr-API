$(document).ready(function(){
$('button').click(function(){
	$('button').removeClass("selected");
	$(this).addClass("selected");
	var flickrAPI ="https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
	var animal = $(this).text();
	var flickrOptions = {
		tags:animal,
		format:"json"
	};
	function displayPhotos(data){
		var photoHTMl='<ul>';
		$.each(data.items,function(i,photo){
        photoHTMl += '<li class="grid-25 tablet-grid-100">';
        photoHTMl += 'a href="' +photo.link+ '" class="image">';
        photoHTMl += '<img src ="' +photo.media.m + '"></a></li>';
		});
		photoHTMl +='</ul>';
		$('#photos').html(photoHTMl);
	}
	$.getJSON(flickrAPI,flickrOptions,displayPhotos);
});
}); // end of ready