$(document).ready(function() {
    $('a.edit_post_link').click(function() {
        toggleSection($(this));
    });
    $('a.cancel_edit_post_link').click(function() {
        toggleSection($(this));
    });
});