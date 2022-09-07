$(document).ready(function() {
    $('.docs-list__button').each(function() {
        if ($(this).hasClass('docs-list__button_active')) {
            $(this).parent().next().show();
            $(this).children('.docs-list__add-icon').removeClass('docs-list__add-icon_active');
            $(this).children('.docs-list__remove-icon').addClass('docs-list__remove-icon_active');
        } else {
            $(this).parent().next().hide();
            $(this).children('.docs-list__add-icon').addClass('docs-list__add-icon_active');
            $(this).children('.docs-list__remove-icon').removeClass('docs-list__remove-icon_active');
        }
    })

    $('.docs-list__button').on('click', function(e) {
        if ($(this).hasClass('docs-list__button_active')) {
            $(this).removeClass('docs-list__button_active');
            $(this).parent().next().slideUp();
            $(this).children('.docs-list__add-icon').addClass('docs-list__add-icon_active');
            $(this).children('.docs-list__remove-icon').removeClass('docs-list__remove-icon_active');
            return false;
        } else {
            $(this).addClass('docs-list__button_active');
            $(this).parent().next().slideDown();
            $(this).children('.docs-list__add-icon').removeClass('docs-list__add-icon_active');
            $(this).children('.docs-list__remove-icon').addClass('docs-list__remove-icon_active');
            return false;
        }
    })
})