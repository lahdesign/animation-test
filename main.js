const onCharacterClick = function () {
   console.log('got into function')
   document.querySelector(".svgClass").getSVGDocument().getElementById("character").setAttribute("fill", "red")
  //   $('#message').text('Welcome to the moon.')
  //   $('#message').css('background-Color', 'blue')
  //   setTimeout(() => $('#message').text(''), 3000)
  //   $('.container').addClass('animated rollOut');
  //   $('#welcomePage').addClass('animated rollIn')
  }

const addHandlers = () => {
    $('#character').on('click', onCharacterClick)
  }

  $(() => {
    addHandlers()
  })
