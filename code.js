var AlexaLambdaHandler = require('./lib/alexa');

module.exports.handler = AlexaLambdaHandler.LambdaHandler;
module.exports.CreateStateHandler = AlexaLambdaHandler.CreateStateHandler;
module.exports.StateString = AlexaLambdaHandler.StateString;


var Alexa = require("alexa-sdk");

//-----------------------------------INITIALIZE SKILL-----------------------------------//
exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
};

var handlers = {
    "LaunchRequest": function() {
         this.emit(":ask", "New Application!");
    },
    "functionName": function() {
         this.emit(":tell", "have a good day!");
    }
  };


//-----------------------------------SETUP HANDLERS-----------------------------------//
exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.dynamoDBTableName = "RememberData";
    alexa.registerHandlers(handlers);
    alexa.execute();
};
