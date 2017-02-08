/*! font-size adapter jquery plugin - v0.1.0
* https://github.com/matijamrkaic/font-size-adapter
* Copyright (c) 2017 Matija Mrkaić; Licenced MIT
*/

(function ($){
	"use strict";

	$.fn.fontSizeAdapter = function( options ){
		var $el = this;

		// Default Settings
		var settings = $.extend({
			fontMax: 0, // Set maximum font-size limit
			fontMin: 0, // Set minimum font-size limit
			enlarge: true, // Enable font-size to be increased from it's original size
			onResize: true // Enable automatic recalculation on $(window).resize();
		}, options);

		var fontOriginal;
		var fontAdapted;
		var biggest = {};



		// Calculate values and find biggest item (relative to available space)
		function setup(){

			// reset data
			fontOriginal = $el.css('font-size','').css('font-size');
			fontOriginal = parseInt(fontOriginal, 10);
			biggest.coefficient = settings.enlarge ? 999 : 1;

			// Find biggest item in selection, relatively to it's parent
			$el.each(function(){
				// pay attention to margins/paddings of elements
				var width = $(this).outerWidth(true);
				var parentWidth = $(this).parent().width();
				var coefficient = parentWidth / width;

				if( coefficient < biggest.coefficient ){
					biggest = {el: this, coefficient: coefficient};
				}
			});

			apply();
		}



		// Apply to all elements
		function apply(){
			fontAdapted = Math.floor( biggest.coefficient * fontOriginal );

			if( settings.fontMax ){
				fontAdapted = Math.min( fontAdapted, parseInt(settings.fontMax) );
			}

			if( settings.fontMin ){
				fontAdapted = Math.max( fontAdapted, parseInt(settings.fontMin) );
			}

			if( fontAdapted != fontOriginal ){
				$el.css('font-size', fontAdapted);
			}

			// Add 'finished' class to elements
			$el.addClass('font-size-adapted');
		}




		// Start
		setup();

		// If $(window).resize watch enabled
		if( settings.onResize ){
			$(window).resize(setup);
		}

		// Enable chaining and finish
		return this;
	};

}(jQuery));
