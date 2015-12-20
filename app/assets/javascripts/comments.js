$(document).ready(function() {
    $('a.edit_comment_link').click(function() {
        toggleSection($(this));
    });
    $('a.cancel_edit_comment_link').click(function() {
        toggleSection($(this));
    });
});