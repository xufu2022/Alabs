# Alabs


$('#btnSearch').on('click', function () {
    var $button = $(this);
    $button.prop('disabled', true);

    divLoading('searchResultsContainer', true); // shows the overlay + ajax-progress.gif

    $.ajax({
        url: '/Search/Results',
        type: 'GET',
        data: { keyword: $('#txtSearch').val() },
        success: function (results) {
            // render results here
        },
        error: function (jqXHR) {
            // handle error here
        }
    }).always(function () {
        $button.prop('disabled', false);
        divLoading('searchResultsContainer', false); // hides it, success or error
    });
});
