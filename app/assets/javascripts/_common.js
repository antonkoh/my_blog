function toggleSection($object_with_id) {

    object_id = $object_with_id.data('id');
    $('.edit_section').addClass('hidden');
    $('.read_section').removeClass('hidden');


    if ($object_with_id.is('.read_section')) {


        $edit_section = $('.edit_section[data-id="' + object_id + '"]');
        $edit_section.removeClass('hidden');
        $read_section = $('.read_section[data-id="' + object_id + '"]');
        $read_section.addClass('hidden');
    };
};