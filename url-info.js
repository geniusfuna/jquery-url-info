;(function($) {
    $.fn.url_info = function(options) {
        return this.each(function(index) {
            var target = this,urls = [],
            links = $('a', target).filter(function() {
                var re = new RegExp("^http");
                var text = $(this).text().trim();
                if(re.test(text)){
                    return this;
                }
            });

            links.each(function(i,e){
                urls.push($(links[i]).text().trim());
            });

            $(urls).map(function(i){
                $.ajax({
                    url:'//url-info-staging.wpic-tools.com/' + urls[i],
                    method: 'GET',
                    dataType: '*',
                    success: function(data) {
                        var link = $('<a href="' + links[i].text + '">' + links[i].text + '</a>'),
                        title = $('<h4>' + data.title + '</h4>'),
                        img = $('<img class="img-responsive" src="'+ data.screenshotUrl.replace('.png','_600x350.png') + '" style="display:none" onload="this.style.display=\'\'">'),
                        desc= $('<div class="hidden-xs">' + data.description + '</div>'),
                        right = $('<div class="col-md-10 col-xs-12" role="url-info-right"></div>').append(link).append(desc).append($(links[i]).parent().find('[aria-label="Manage report"]:last')),
                        left = $('<div class="col-md-2 col-xs-12" role="url-info-left"></div>').append(img),
                        obj = $('<div role="url-info" class="row" style="margin-top:10px;margin-bottom:10px;"></div>').append(left).append(right);
                        
                        $(links[i]).parent().append(obj);
                        ($(links[i]).parent().find('[role="url-info-right"]')).append($(links[i]).siblings().find('.label-info'));
                        title.insertBefore($(links[i]).siblings('[role="url-info"]'));
                        $(links[i]).detach();
                    }
                });
            });
        });
    };
}(jQuery));
