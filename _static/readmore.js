jQuery(document).ready(function($) {
    $('.readmore').on('click touchstart', function(event) {
        event.preventDefault();
        $more = 'Read More';
        $less = 'Show Less';
        $bio = $(this).siblings('.bio-content');
        if ($(this).hasClass('clicked')) {
        	$(this).toggleClass('clicked').text($more);
        }else{
        	$(this).toggleClass('clicked').text($less);
        }
        $bio.toggleClass('open');
    });
});