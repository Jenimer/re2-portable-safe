//add sound, there is a specific sound that they use, find it
//build the decals in something, stick them in as background images
//the rpd logo and the arrows
//if the next light is not in sequence then reset
//compare the first number the the next number, if next != n + 1
//figure out the set interval function, the amount of setTimeouts is rediculous
/************************THE SETUP********************************/
const button1 = document.getElementById('btn1');
const button2 = document.getElementById('btn2');
const button3 = document.getElementById('btn3');
const button4 = document.getElementById('btn4');
const button5 = document.getElementById('btn5');
const button6 = document.getElementById('btn6');
const button7 = document.getElementById('btn7');
const button8 = document.getElementById('btn8');
const light1 = document.getElementById('lt1');
const light2 = document.getElementById('lt2');
const light3 = document.getElementById('lt3');
const light4 = document.getElementById('lt4');
const light5 = document.getElementById('lt5');
const light6 = document.getElementById('lt6');
const light7 = document.getElementById('lt7');
const light8 = document.getElementById('lt8');
const valueContainer = document.getElementById('valueContainer');
const originLtColor = 'radial-gradient(at 0% 0%, gray 20%, black 80%)';
const originColor = 'radial-gradient(at 15% 15%, gray 15%, rgb(40, 40, 40) 35%, black 50%)';
const clickedBtnColor = 'radial-gradient(white 25%, gray 25%, black 75%)';
const clickedLtColor = 'radial-gradient(rgb(12, 189, 160), black)';
const wrongCode = 'radial-gradient(rgb( 230, 60, 50), black)';
const resetButton = document.getElementById('reset');

valueContainer.style.display = 'none';

const allButtons = [
  button1,
  button2,
  button3,
  button4,
  button5,
  button6,
  button7,
  button8
]

const allLights = [
  light1,
  light2,
  light3,
  light4,
  light5,
  light6,
  light7,
  light8
]

allLights.map(light => {
  light.style.backgroundImage = originLtColor;
});

allButtons.map(button => {
  button.style.backgroundImage = originColor;
});
/*****************************************************************/
//main function
main = () => {

let solutions = [
  12345678,
  23456781,
  34567812,
  45678123,
  56781234,
  67812345,
  78123456,
  81234567,
];

let list = document.querySelectorAll('li');

let numbers = [];
let convertedNumbers = [];
let converted = Array.from(list);

converted.map(e => {
  item = e.innerText;
  numbers.push(item)
});

numbers.map(n => {
  let number = parseInt(n);
  convertedNumbers.push(number);
});

let combine = convertedNumbers.join('');

if(list.length == 8){
  if(combine == solutions[0] ||
     combine == solutions[1] ||
     combine == solutions[2] ||
     combine == solutions[3] ||
     combine == solutions[4] ||
     combine == solutions[5] ||
     combine == solutions[6] ||
     combine == solutions[7]) {
      
       clearList()
       setTimeout(()=> {
         green()
         resetButtons()
        }, 200)       
        setTimeout(() => {
          alert('Congratulations, you unlocked the safe')
        }, 5000)

    } else {

      clearList()
      setTimeout(() => {
        red()
        resetButtons()
      }, 500)
        
    }
  }
}

/***************FUNCTIONS****************/
btnClick = (light, button) => {
  let value = light.getAttribute('value');
  let node = document.createElement('li');
  let textNode = document.createTextNode(value);
  node.appendChild(textNode);
  document.getElementById('valueContainer').appendChild(node);
  if (button.style.backgroundImage === originColor) {
    button.style.backgroundImage = clickedBtnColor;
    light.style.backgroundImage = clickedLtColor;
  }
  button.disabled = true;
  main()
}

resetButtons = () => {
  allButtons.map(button => {
    button.style.backgroundImage = originColor;
    button.disabled = false;
  }); 
}

let green = () => {
  correctSolutionAnimation()
  setTimeout(() => {
    correctSolutionAnimation()
  }, 1000);
  setTimeout(() => {
    correctSolutionAnimation()
  }, 2000);
  setTimeout(() => {
    allLights.map(light => {
      light.style.backgroundImage = clickedLtColor;
    })
  }, 3500)
  setTimeout(() => {
    allLights.map(light => {
      light.style.backgroundImage = originLtColor;
    })
  }, 4500)
}


//create set interval function for incorrect solutions
let red = () => {
  blink(wrongCode, originLtColor);
  setTimeout(() => {
    blink(wrongCode, originLtColor)
  }, 1000);
  setTimeout(() => {
    blink(wrongCode, originLtColor);
  }, 2000);
}

let blink = (color, defaultColor) => {
  setTimeout(() => {
    allLights.map(light => {
      light.style.backgroundImage = color;
    })
    setTimeout(() => {
      allLights.map(light => {
        light.style.backgroundImage = defaultColor;
      });
    }, 500)
  }, 500);
}

let correctSolutionAnimation = () => {
  setTimeout(() => {
    light1.style.backgroundImage = originLtColor;
    light3.style.backgroundImage = originLtColor;
    light5.style.backgroundImage = originLtColor;
    light7.style.backgroundImage = originLtColor;
    light2.style.backgroundImage = clickedLtColor;
    light4.style.backgroundImage = clickedLtColor;
    light6.style.backgroundImage = clickedLtColor;
    light8.style.backgroundImage = clickedLtColor;

    setTimeout(() => {
      light1.style.backgroundImage = clickedLtColor;
      light3.style.backgroundImage = clickedLtColor;
      light5.style.backgroundImage = clickedLtColor;
      light7.style.backgroundImage = clickedLtColor;
      light2.style.backgroundImage = originLtColor;
      light4.style.backgroundImage = originLtColor;
      light6.style.backgroundImage = originLtColor;
      light8.style.backgroundImage = originLtColor;
    }, 500);
  }, 500);
}

clearList = () => {
  let one = document.querySelectorAll('li')[0];
  let two = document.querySelectorAll('li')[1];
  let three = document.querySelectorAll('li')[2];
  let four = document.querySelectorAll('li')[3];
  let five = document.querySelectorAll('li')[4];
  let six = document.querySelectorAll('li')[5];
  let seven = document.querySelectorAll('li')[6];
  let eight = document.querySelectorAll('li')[7];
  
  allElements = [
    one,
    two,
    three,
    four,
    five,
    six,
    seven,
    eight
  ];
  
  allElements.map(e => {
    e.parentNode.removeChild(e);
  });
}

shadowOverride = (button) => {
  button.style.boxShadow = '10px 10px 10px 0px black'
}

/******************EVENTS****************/

buttonClick = (button, light, index) => {
  button.addEventListener('click', () => {
    btnClick(light[index], button)
    shadowOverride(button)
  })
}

buttonClick(button1, allLights, 4)
buttonClick(button2, allLights, 1)
buttonClick(button3, allLights, 0)
buttonClick(button4, allLights, 3)
buttonClick(button5, allLights, 5)
buttonClick(button6, allLights, 2)
buttonClick(button7, allLights, 7)
buttonClick(button8, allLights, 6)



