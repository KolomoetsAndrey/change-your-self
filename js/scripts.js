// preloader
$(window).on('load', function () {
    var $preloader = $('.loader'),
        $spinner = $preloader.find('.loader_inner');
    $spinner.delay(50).fadeOut('slow');
    $preloader.delay(50).fadeOut('slow');
});

// Main Menu
function openNav() {
    var x = window.matchMedia("(max-width:900px)");

    if (x.matches) {
        document.getElementById("mySidepanel").style.width = "80%";
    } else {
        document.getElementById("mySidepanel").style.width = "40%";
    }
};
    
function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
};

$('.scroll-button').click(function(){
    document.getElementById("mySidepanel").style.width = "0";
});

$(document).ready(function() {

    $('#results-slider').owlCarousel({
        items: 1,
        adaptiveHeight: true,
        dots: false,
        nav: true,
        autoplay: true,
        smartSpeed: 1000,
        onChanged: function ( event ) {
            var currentIndex = event.item.index + 1
            var countIndex = event.item.count;
            if ( currentIndex < 10 ) {
                currentIndex = '0' + currentIndex;
            }
            if ( countIndex < 10 ) {
                countIndex = '0' + countIndex;
            }
            $('#results-slider-counter-current').text(currentIndex);
            $('#results-slider-counter-count').text('/' + countIndex);
        }
    });

    $('#f-phones-list').find('li:not(:first-child)').slideUp();

    $('#f-phones-toggle').click(function() {
        $(this).toggleClass('active');
        $('#f-phones-list').find('li:not(:first-child)').slideToggle();
    });

    $('#menu-toggler').click(function() {
        $('#h-top-menu').fadeToggle();
    });

    $('.scroll-button').click(function() {
        var targetId = $(this).attr('href');
        $("html, body").animate({ scrollTop: $(targetId).offset().top }, 1200);
    });

    $(window).scroll(function() {
        var windowHeight = $(window).outerHeight();
        if ($(window).scrollTop() > 90 ) {
            $('header').addClass('h-fixed-h');
        } else {
            $('header').removeClass('h-fixed-h');
        }
        if ($(window).scrollTop() > windowHeight/2 ) {
            $('header').addClass('h-fixed');
        } else {
            $('header').removeClass('h-fixed');
        }
        if ($(window).scrollTop() > windowHeight) {
            $('header').addClass('h-fixed-v');
        } else {
            $('header').removeClass('h-fixed-v');
        }
    });

    /*$('#questions-form-popup').validate({
        submitHandler: function(form) {
            $(form).ajaxSubmit();
        },
        rules: {
            name: "required",
            email: {
                required: true,
                email: true
            }
        }
    });*/
    
    /*$("#questions-form").validate({
            rules: {
                name: {
                    required: true
                },
                surname: {
                    required: true
                },
                city: {
                    required: false
                },
                phone: {
                    required: true
                },
                email: {
                    email: true
                }
            },
            messages: {
                name: '',
                phone: '',
                title: '',
                textarea: ''
            },
            submitHandler: function(form) {
                var form = $(form);
                $.ajax({
                    type: 'POST',
                    url: '/sendmessage.php',
                    data: form.serialize(),
                    success: function( data ) {
                        if ( data == "true" ) {
                            
                        }
                    }
                });
            },
        });*/
        
    $("#questions-form").validate({
        rules: {
            name: {
                    required: true
                },
                surname: {
                    required: true
                },
                city: {
                    required: false
                },
                phone: {
                    required: true
                },
                email: {
                    email: true
                }

        },
        messages: {
            name: '',
            surname: '',
            city: '',
            phone: '',
            email: ''
        },
        errorPlacement: function(error, element) {},
        submitHandler: function(form) {
            var forma = $(form);
            //forma.find('button').replaceWith("<em>РѕС‚РїСЂР°РІРєР°...</em>");

            $.ajax({
                type: 'POST',
                url: '/sendmessage.php',
                data: forma.serialize(),
                success: function(data) { $('#form-1').find('input[type="text"]').val('');
                    if (data == "true") {
                        
                        $(form).html('<div class="thenks">Спасибо за заявку. В ближайшее время с вами свяжутся</div>');
                        setTimeout("$.fancybox.close()", 4000);
                    }
                }
            });
            



        },
        success: function() {

        },
        highlight: function(element, errorClass) {
            $(element).addClass('error');
        },
        unhighlight: function(element, errorClass, validClass) {
            $(element).removeClass('error');
        }
    });
    
    $("#questions-form-popup").validate({
        rules: {
            name: {
                    required: true
                },
                surname: {
                    required: true
                },
                city: {
                    required: false
                },
                phone: {
                    required: true
                },
                email: {
                    email: true
                }

        },
        messages: {
            name: '',
            surname: '',
            city: '',
            phone: '',
            email: ''
        },
        errorPlacement: function(error, element) {},
        submitHandler: function(form) {
            var forma = $(form);

            $.ajax({
                type: 'POST',
                url: '/sendmessage.php',
                data: forma.serialize(),
                success: function(data) { $('#form-1').find('input[type="text"]').val('');
                    if (data == "true") {
                        
                        $(form).html('<div class="thenks">Спасибо за заявку. В ближайшее время с вами свяжутся</div>');
                        setTimeout("$.fancybox.close()", 4000);
                    }
                }
            });
            



        },
        success: function() {

        },
        highlight: function(element, errorClass) {
            $(element).addClass('error');
        },
        unhighlight: function(element, errorClass, validClass) {
            $(element).removeClass('error');
        }
    });

    $('input[name="phone"]').mask('+38 (099) 999-99-99');


});
