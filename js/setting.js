const color = [
  {
    name: 'pink',
    code: '#fb839e',
    url: 'css/skins/pink.css',
  },
  {
    name: 'light blue',
    code: '#3e99f4',
    url: 'css/skins/light-blue.css',
  },
  {
    name: 'light green',
    code: '#0dcebd',
    url: 'css/skins/light-green.css',
  },
  {
    name: 'red',
    code: '#cc3a3b',
    url: 'css/skins/red.css',
  },
  {
    name: 'yellow',
    code: '#ff9801',
    url: 'css/skins/yellow.css',
  },
];

$(document).ready(function () {
  setColors();
  function setColors() {
    for (let i = 0; i < color.length; i++) {
      const span = document.createElement('span');
      span.style.backgroundColor = color[i].code;
      $('.colors').append(span);
    }
  }

  $('.colors span').click(function () {
    const index = $(this).index();
    $('.alternate-style').attr('href', color[index].url);
  });
  //   Theme light and dark mode
  $('.theme-mode').change(function () {
    if ($(this).val() == 'light') {
      $('body').removeClass('dark');
    } else {
      $('body').addClass('dark');
    }
  });

  //   toggle setting box
  $('.s-toggle-btn').click(function () {
    $('.setting').toggleClass('open');
  });
});
