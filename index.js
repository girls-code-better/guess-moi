var inquirer = require('inquirer');
inquirer
  .prompt([
    /* Pass your questions in here */
	{
	type: 'number',
	name: 'num',
	message: 'Guess a number ranging from 1-6'
	}
  ])
  .then(answers => {
	function getRandom(min, max) {
	  return Math.floor(Math.random() * (max - min + 1) ) + min;
	}
	var comNum = getRandom(1, 6);
	if(comNum == answers.num) console.log('Whoa! That\'s correct');
	else console.log(`Ooops. The number was: ${comNum}`);
  })
  .catch(error => {
	console.log(error)
  });
