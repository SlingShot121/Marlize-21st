var storedName = localStorage.getItem("name");

$(document).ready(function() {
    $('.rsvp-list').hide();

    $('.checkmark').click(function() {
        $('.cross').animate({'width': '0', 'opacity': '0'}, 2000);
        $('.checkmark').animate({'width': '600px', 'margin-left': '0'}, 2000, function() {
        $('.checkmark').css({'margin': '0 auto'});
        });
        $('body').animate({'margin-top': '-150px'}, 1000);
        $('h1').text('See you there!').css({'text-align': 'center'});
        console.log("Hello " + storedName);
        });

    $('.cross').click(function() {
        $('.checkmark').animate({'width': '0', 'opacity': '0'}, 2000);
        $('.cross').animate({'width': '600px', 'margin-left': '0'}, 2000, function() {
        $('.cross').css({'margin': '0 auto'});
        });
        $('body').animate({'margin-top': '-150px'}, 1000);
        $('h1').text('See you next time!').css({'text-align': 'center'});
        console.log("Hello " + storedName);
        });
    });