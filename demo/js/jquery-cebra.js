(function($){
    $.fn.extend({ 
        cebra: function(options) { 
            var defaults = {
                evenColor: '#E8EDFF',
                oddColor: '#FFFFFF',
				hoverColor: '#D0DAFD'
            };
            var options = $.extend(defaults, options);
            return this.each(function() {
                var o =options;
                var obj = $(this);              
				if (obj.prop('tagName')=='TABLE')
				{
	                var childItems = 'tbody tr';
				}
				else
				{
	                var childItems = 'li';
				}
                var items = $(childItems, obj);
                $(childItems + ":even", obj).css('background-color', o.evenColor);
                $(childItems + ":odd", obj).css('background-color', o.oddColor);                     
                items.mouseover(function(){
					$(this).attr('defaultColor',$(this).css('background-color'));
					$(this).css('background-color', o.hoverColor);                     
                }).mouseout(function(){
					$(this).css('background-color', $(this).attr('defaultColor'));
                });                 
            });
        }
    });
})(jQuery);