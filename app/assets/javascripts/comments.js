$(document).ready(function() {
    $('a.edit_comment_link').click(function() {
        console.log($(this));
        console.log($(this).parent().parent());
        toggleSection($(this).parent().parent());
    });
    $('a.cancel_edit_comment_link').click(function() {
        toggleSection($(this).parent().parent());
    });
});