

$(document).ready(function() {
   $('a.edit_category_link').click(function() {
       toggleSection($(this).parent().parent());
   });
    $('a.cancel_edit_category_link').click(function() {
        toggleSection($(this).parent().parent());
    });
});