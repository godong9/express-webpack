'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.Base.extend({
  prompting: function () {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the ' + chalk.red('express-webpack') + ' generator!'
    ));

    var prompts = [{
      type: 'input',
      name: 'userAnswer',
      message: 'Would you like make ./server in here?(y/N)',
      default: 'y'
    }];

    return this.prompt(prompts).then(function (props) {
      // To access props later use this.props.someAnswer;
      if (props.userAnswer === 'N') {
        process.exit(1);
        return;
      }
      this.props = props;
    }.bind(this));
  },

  writing: function () {
    this.fs.copy(
      this.templatePath('server'),
      this.destinationPath('server')
    );
    this.fs.copy(
      this.templatePath('server/.bowerrc'),
      this.destinationPath('server/.bowerrc')
    );
  },

  install: function () {
    this.installDependencies();
  }
});
