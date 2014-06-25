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
            $badge.hide().detach();
            $this
                .addClass('numeric')
                .removeClass('btn-attention small')
                .text('15')
                .append($badge)
            ;
        } else {
            isActive = true;
            counter = 0;
            $badge.text('0').detach().show();
            $this
                .removeClass('numeric')
                .addClass('btn-attention small')
                .html("\"Hi, can you help<br>me with this?\"")
                .append($badge)
            ;
            visitorInterval = setInterval(function() {
                counter += 1;
                $badge.text('' + counter);
            }, 1000);
        }
    });
});
