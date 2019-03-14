$( document ).ready(function() {
    $('body').fadeIn("slow");
    var nameProject = "High Soft México";
    var imageProject = "assets/images/image1.jpg";
    $('#imageProject').attr('src', imageProject)
    $('.title-project').text(nameProject);
    $('#imageProject').css('visibility','visible').hide().fadeIn("slow");
    $('.title-project').css('visibility','visible').hide().fadeIn("slow");
});