(function($) {

  $.fn.menumaker = function(options) {
      
      var cssmenu = $(this), settings = $.extend({
        title: "Menu",
        format: "dropdown",
        sticky: false
      }, options);

      var count = 0;
      return this.each(function() {
            cssmenu.prepend('<div id="menu-button'+count+'" class="menu-button">' + settings.title + '</div>');
            $(this).find(".menu-button").on('click', function(){
              $(this).toggleClass('menu-opened');
              var mainmenu = $(this).next('ul');
              if (mainmenu.hasClass('open')) { 
                mainmenu.slideUp().removeClass('open');
              }
              else {
                mainmenu.slideDown().addClass('open');
                if (settings.format === "dropdown") {
                  mainmenu.find('ul').slideDown();
                }
              }
              count++; 
        });
           

        cssmenu.find('li ul').parent().addClass('has-sub');

        multiTg = function() {
          cssmenu.find(".has-sub").prepend('<span class="submenu-button"></span>');
          cssmenu.find('.submenu-button').on('click', function() {
            $(this).toggleClass('submenu-opened');
            if ($(this).siblings('ul').hasClass('open')) {
              $(this).siblings('ul').removeClass('open').slideUp();
            }
            else {
              $(this).siblings('ul').addClass('open').slideDown();
            }
          });
        };

        if (settings.format === 'multitoggle') multiTg();
        else cssmenu.addClass('dropdown');

        if (settings.sticky === true) cssmenu.css('position', 'fixed');

        resizeFix = function() {
          if ($( window ).width() > 800) {
            cssmenu.find('ul').show();
          }

          if ($(window).width() <= 800) {
            cssmenu.find('ul').hide().removeClass('open');
          }
        };
        resizeFix();
        return $(window).on('resize', resizeFix);

      });
  };
})(jQuery);

(function($){
    $(document).ready(function(){

      
            
          $(".cssmenu").each(function(){
              var title = ($(this).data('title'))? $(this).data('title') : "Menu";
              $(this).menumaker({
                title: title,
                format: "multitoggle"
              });
          })

          

        $(".menu-line-on").prepend("<div class='menu-line'></div>");

        var foundActive = false, activeElement, linePosition = 0, menuLine = $(".menu-line-on > .menu-line"), lineWidth, defaultPosition, defaultWidth;

        $(".menu-line-on > ul > li").each(function() {
          if ($(this).hasClass('active')) {
            activeElement = $(this);
            foundActive = true;
          }
        });

        if (foundActive === false) {
          activeElement = $(".menu-line-on > ul > li").first();
        }

        defaultWidth = lineWidth = activeElement.width();

        defaultPosition = linePosition = activeElement.position().left - 4;

        menuLine.css("width", lineWidth);
        menuLine.css("left", linePosition);

        $(".menu-line-on > ul > li").hover(function() {
            activeElement = $(this);
            lineWidth = activeElement.width();
            linePosition = activeElement.position().left - 4;
            menuLine.css("width", lineWidth);
            menuLine.css("left", linePosition);
        }, 
        function() {
          menuLine.css("left", defaultPosition);
          menuLine.css("width", defaultWidth);
        });

   


    });
})(jQuery);


  // $(".mainmenu ul#nav li ").hover(function(){
  //     $(this).find("ul").slideToggle(400);
  // });