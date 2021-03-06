/*-----------------------------------------------------------------------------------
/*
/* Init JS
/*
-----------------------------------------------------------------------------------*/

$(document).ready($ => {
  /*----------------------------------------------------*/
  /* FitText Settings
------------------------------------------------------ */

  setTimeout(() => {
    $('h1.responsive-headline').fitText(1, { minFontSize: '40px', maxFontSize: '90px' });
  }, 100);

  /*----------------------------------------------------*/
  /* Smooth Scrolling
------------------------------------------------------ */

  $('.smoothscroll').on('click', function(e) {
    e.preventDefault();

    const target = this.hash;

    const $target = $(target);

    $('html, body')
      .stop()
      .animate(
        {
          scrollTop: $target.offset().top,
        },
        800,
        'swing',
        () => {
          window.location.hash = target;
        }
      );
  });

  /*----------------------------------------------------*/
  /* Highlight the current section in the navigation bar
------------------------------------------------------*/

  const sections = $('section');
  const navigation_links = $('#nav-wrap a');

  sections.waypoint({
    handler(event, direction) {
      let active_section;

      active_section = $(this);
      if (direction === 'up') active_section = active_section.prev();

      const active_link = $(`#nav-wrap a[href="#${active_section.attr('id')}"]`);

      navigation_links.parent().removeClass('current');
      active_link.parent().addClass('current');
    },
    offset: '35%',
  });

  /*----------------------------------------------------*/
  /*	Make sure that #header-background-image height is
/* equal to the browser height.
------------------------------------------------------ */

  $('header').css({ height: $(window).height() });
  $(window).on('resize', () => {
    $('header').css({ height: $(window).height() });
    $('body').css({ width: $(window).width() });
  });

  /*----------------------------------------------------*/
  /*	Fade In/Out Primary Navigation
------------------------------------------------------*/

  $(window).on('scroll', () => {
    const h = $('header').height();
    const y = $(window).scrollTop();
    const nav = $('#nav-wrap');

    if (y > h * 0.2 && y < h && $(window).outerWidth() > 768) {
      nav.fadeOut('fast');
    } else if (y < h * 0.2) {
      nav.removeClass('opaque').fadeIn('fast');
    } else {
      nav.addClass('opaque').fadeIn('fast');
    }
  });

  /*----------------------------------------------------*/
  /*	Modal Popup
------------------------------------------------------*/

  $('.item-wrap a').magnificPopup({
    type: 'inline',
    fixedContentPos: false,
    removalDelay: 200,
    showCloseBtn: false,
    mainClass: 'mfp-fade',
  });

  $(document).on('click', '.popup-modal-dismiss', e => {
    e.preventDefault();
    $.magnificPopup.close();
  });
});
