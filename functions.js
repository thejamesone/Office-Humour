$(function() {
    setSize()
});


$(window).resize(function() {
    setSize()
});

function setSize() {
    var div = $('#wrapper');
    var width = div.width();
    console.log(width)
    div.css('height', width / 1.777);

}
