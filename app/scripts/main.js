$(function() {
    'use strict';
    var visitorInterval = null;
    var counter;
    var isActive = false;
    var $tabBadge = $('.main-tabs .badge');
    $('body').on('click', '#visitor-button', function() {
        var $this = $(this);
        var $badge = $this.find('.btn-badge');
        if (isActive) {
            isActive = false;
            clearInterval(visitorInterval);
            $badge.hide().detach();
            $tabBadge.text('');
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
            $tabBadge.text('0');
            $this
                .removeClass('numeric')
                .addClass('btn-attention small')
                .html("\"Hi, can you help<br>me with this?\"")
                .append($badge)
            ;
            visitorInterval = setInterval(function() {
                counter += 1;
                $tabBadge.text('' + counter);
                $badge.text('' + counter);
            }, 1000);
        }
    });
});
