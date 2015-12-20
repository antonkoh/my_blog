function toggleSection($link) {
    $object_with_id = $link.closest('.read_section');
    if ($object_with_id == undefined) {
        $object_with_id = $link.closest('.edit_section');
    };

    object_id = $object_with_id.attr('data-id');
    $('.edit_section').addClass('hidden');
    $('.read_section').removeClass('hidden');

    if ($object_with_id.is('.read_section')) {


        $edit_section = $('.edit_section[data-id="' + object_id + '"]');
        $edit_section.removeClass('hidden');
        $read_section = $('.read_section[data-id="' + object_id + '"]');
        $read_section.addClass('hidden');
    };
};