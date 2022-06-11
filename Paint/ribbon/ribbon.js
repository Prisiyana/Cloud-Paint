(function( $ ){
	$.fn.ribbon = function(id) {
		if (!id) {
			if (this.attr('id')) {
				id = this.attr('id');
			}
		}
		
		var that = function() { 
			return thatRet;
		};

		var thatRet = that;
		
		that.selectedTabIndex = -1;
		
		var tabNames = [];
		
		that.goToBackstage = function() {
			ribObj.addClass('backstage');
		}

		that.returnFromBackstage = function() {
			ribObj.removeClass('backstage');
		}

		var ribObj = null;
		
		that.init = function(id) {
			if (!id) {
				id = 'ribbon';
			}
		
			ribObj = $('#' + id);
			ribObj.find('.ribbon-window-title').after('<div id="ribbon-tab-header-strip"></div>');
			var header = ribObj.find('#ribbon-tab-header-strip');
			
			ribObj.find('.ribbon-tab').each(function(index) {
				var id = $(this).attr('id');
				if (id === undefined || id === null)
				{
					$(this).attr('id', 'tab-' + index);
					id = 'tab-' + index;
				}
				tabNames[index] = id;
			
				var title = $(this).find('.ribbon-title');
				var isBackstage = $(this).hasClass('file');
				header.append('<div id="ribbon-tab-header-' + index + '" class="ribbon-tab-header"></div>');

				var thisTabHeader = header.find('#ribbon-tab-header-' + index);
				thisTabHeader.append(title);
				if (isBackstage) {
					thisTabHeader.addClass('file');
					
					thisTabHeader.click(function() {
						that.switchToTabByIndex(index);
						that.goToBackstage();
					});
				} else {
					if (that.selectedTabIndex === -1) {
						that.selectedTabIndex = index;
						thisTabHeader.addClass('sel');
					}
					
					thisTabHeader.click(function() {
						that.returnFromBackstage();
						that.switchToTabByIndex(index);
					});
				}

				$(this).hide();
			});
			
			ribObj.find('.ribbon-button').each(function(index) {
				var title = $(this).find('.button-title');
				title.detach();
				$(this).append(title);

				if ($(this).find('.ribbon-hot').length === 0) {
					$(this).find('.ribbon-normal').addClass('ribbon-hot');
				}

				$(this).tooltip({
					bodyHandler: function () {
						if (!$(this).isEnabled()) { 
							$('#tooltip').css('visibility', 'hidden');
							return '';
						}
						
						var tor = '';

						if (jQuery(this).children('.button-help').size() > 0)
							tor = (jQuery(this).children('.button-help').html());
						else
							tor = '';

						if (tor === '') {
							$('#tooltip').css('visibility', 'hidden');
							return '';
						}

						$('#tooltip').css('visibility', 'visible');

						return tor;
					},
					left: 0,
					extraClass: 'ribbon-tooltip'
				});
			});

			that.switchToTabByIndex(that.selectedTabIndex);
		}
		
		that.switchToTabByIndex = function(index) {
			var headerStrip = $('#ribbon #ribbon-tab-header-strip');
			headerStrip.find('.ribbon-tab-header').removeClass('sel');
			headerStrip.find('#ribbon-tab-header-' + index).addClass('sel');

			$('#ribbon .ribbon-tab').hide();
			$('#ribbon #' + tabNames[index]).show();
		}

		$.fn.isEnabled = function() {
			if (this[0] && this[0].isEnabled) {
				return this[0].isEnabled();
			} else {
				return true;
			}
		}

		that.init(id);
		$.fn.ribbon = that;
	};

})( jQuery );

function dropdownPaste() {
	document.getElementById("pasteDropdown").classList.toggle("show");
}

function dropdownSelect() {
	document.getElementById("selectDropdown").classList.toggle("show");
}

function dropdownRotate() {
	document.getElementById("rotateDropdown").classList.toggle("show");
}

function dropdownBrushes() {
	document.getElementById("brushesDropdown").classList.toggle("show");
}

function dropdownSize() {
	document.getElementById("sizeDropdown").classList.toggle("show");
}

window.onclick = function(event) {
	if (!event.target.matches('.button-title')) {
		var dropdowns = document.getElementsByClassName("dropdown-content");
		var i;
		for (i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains('show')) {
				openDropdown.classList.remove('show');
			}
		}
	}
}

function updateBrushIcon(id) {
	document.getElementById('selected-brush').setAttribute('src', document.getElementById(`${id}`).getAttribute('src'));
}

function updateColor(id) {
	document.getElementById('color-1-btn').getElementsByClassName('current-color')[0].style.backgroundColor = document.getElementById(`${id}`).getElementsByClassName('color-size')[0].style.backgroundColor;
}

function updateSelection(id) {
	document.getElementById('select-btn').getElementsByTagName('img')[0].setAttribute('src', document.getElementById(`${id}`).getAttribute('src'));
}
