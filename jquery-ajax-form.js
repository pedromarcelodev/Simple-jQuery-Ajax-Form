/**
| Simple jQuery Ajax Form v1.0
| Author: Pedro Marcelo
| License: MIT
*/
(function($){
	$.extend($.fn, {
		simpleAjaxForm: function(options)
		{
			var defaults = {
				context: '',
				statusCode: {
					404: function(){},
					500: function(){},
					502: function(){}
				},
				before: function(){},
				after: function(){},
				success: null,
				erro: null
			};

			if (options === undefined) options = {};

			$.simpleAjaxForm.vars = $.extend({}, defaults, options);

			if (typeof $.simpleAjaxForm.vars.success !== 'function')
			{
				$.simpleAjaxForm.vars.success = function(data)
				{
					$($.simpleAjaxForm.vars.context).html(data);
				};
			}

			if (typeof $.simpleAjaxForm.vars.error !== 'function')
			{
				$.simpleAjaxForm.vars.error = function(data)
				{
					$($.simpleAjaxForm.vars.context).html(data);
				};
			}

			if (typeof $.simpleAjaxForm.vars.before !== 'function')
			{
				$.simpleAjaxForm.vars.before = function(){};
			}

			if (typeof $.simpleAjaxForm.vars.after !== 'function')
			{
				$.simpleAjaxForm.vars.after = function(){};
			}

			var form = this;

			form.submit(function()
			{
				$.simpleAjaxForm.vars.before();
		
				$.ajax(
					form.attr('action'),
					{
						type: form.attr('method'),
						statusCode: $.extend({}, $.simpleAjaxForm.vars.statusCode),
						data: form.serialize(),
						dataType: 'html',
						context: jQuery($.simpleAjaxForm.vars.context),
						success: function(data)
						{
							$.simpleAjaxForm.vars.success(data);
							$.simpleAjaxForm.vars.after();
						},
						error: function(data)
						{
							$.simpleAjaxForm.vars.error(data);
							$.simpleAjaxForm.vars.after();
						}
					}
				);
				
				return false;
			});
		}
	});
})(jQuery);

(function($){
	$.extend($.fn, {
		simpleAjaxFormSubmit: function(options)
		{
			return $(this).simpleAjaxForm(options);
		}
	});
});

(function ($)
{
	$.simpleAjaxForm = function(options, form)
	{
		return $(form).simpleAjaxFormSubmit(options);
	};
})(jQuery);