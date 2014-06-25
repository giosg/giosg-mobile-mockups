$(function() {
    'use strict';
    var visitorInterval = null;
    var counter;
    var isActive = false;
    $('body').on('click', '#visitor-button', function() {
        var $this = $(this);
        var $badge = $this.find('.btn-badge');
        if (isActive) {
            isActive = false;
            clearInterval(visitorInterval);
            $this.removeClass('btn-attention');
            $badge.hide();
        } else {
            isActive = true;
            counter = 0;
            $badge.text('0').show();
            $this.addClass('btn-attention');
            visitorInterval = setInterval(function() {
                counter += 1;
                $badge.text('' + counter);
            }, 1000);
        }
    });
});
