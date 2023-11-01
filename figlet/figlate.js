const figlet = require('figlet');

function displaycuteMessage() {
  
    const decorativeText = 'EMPLOYEEDOSSIER';

    figlet(decorativeText, function (err, data) {
      if (err) {
        console.log('Something went wrong...');
        console.dir(err);
      } else {
        console.log(data);
      }
    });
  }

module.exports = { displaycuteMessage };
