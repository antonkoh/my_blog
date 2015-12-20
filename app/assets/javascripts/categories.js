

$(document).ready(function() {
   $('a.edit_category_link').click(function() {
       toggleSection($(this));
   });
    $('a.cancel_edit_category_link').click(function() {
        toggleSection($(this));
    });
});