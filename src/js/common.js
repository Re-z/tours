$(document).ready(function() {
//js for slider-main
    $('.slider-main').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '.slider-sec'
    });
//js for sec-slider
    $('.slider-sec').slick({
        slidesToShow: 8,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.slider-main',
        variableWidth: true
    });

//google map
    function initMap() {
        var myLatLng = {lat: 39.6570100, lng: 19.8421400};

        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 17,
            center: myLatLng,
            zoomControlOptions: {
                position: google.maps.ControlPosition.LEFT_CENTER
            },
            streetViewControlOptions: {
                position: google.maps.ControlPosition.LEFT_BOTTOM
            }
        });

        var marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            title: 'Hotel'
        });
    }
    initMap();

    //closing hint on click
    $('.hint__close').on('click', function(){
        $('.hint').empty().css('opacity', '0')
    });


    //adding text replacing on changing descinations
    $('.searchbar__from select').change(function(){
            var selectedText = $('.searchbar__from select option:selected').text();
            $('.searchbar__from .js-text-holder').text(selectedText)
        });

    $('.searchbar__to select').change(function(){
        var selectedText = $('.searchbar__to select option:selected').text();
        $('.searchbar__to .js-text-holder').text(selectedText)
    });

    $('.searchbar__duration select').change(function(){
        var selectedText = $('.searchbar__duration select option:selected').text();
        $('.searchbar__duration .js-text-holder').text(selectedText)
    });

    //adding jquery-ui datepicker
        $( "#datepicker" ).datepicker();


});