$(document).ready(function() {
    $('a.edit_post_link').click(function() {
        toggleSection($(this).parent().parent().parent());
    });
    $('a.cancel_edit_post_link').click(function() {
        toggleSection($(this).parent().parent().parent());
    });
});