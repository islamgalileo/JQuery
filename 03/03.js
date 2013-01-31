$(document).ready(function()
	{

		$('#switcher-default').addClass('selected');
		var toggleSwitcher=function(event)
		{
			if(!$(event.target).is('button'))
				$('#switcher button').toggleClass('hidden');
		};
		$('#switcher').hover(function(){$(this).addClass('hover')},function(){$(this).removeClass('hover')});
		$('#switcher').bind('click',toggleSwitcher);
		$('#switcher').click();


		var setBody=function(cssClassName)
		{
			$('#switcher button').removeClass('selected');
			$('#switcher-'+cssClassName).addClass('selected');
			$('body').removeClass().addClass(cssClassName);
			$('#switcher').unbind('click',toggleSwitcher);
			if(cssClassName== 'default')
				$('#switcher').bind('click',toggleSwitcher);

		}

		$('#switcher button').click(function (event)
			{
				var cssClass=event.target.id.split('-')[1];
				setBody(cssClass);	
			})
	}
)