'use strict';
/*
 'use strict' is not required but helpful for turning syntactical errors into true errors in the program flow
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
*/

/*
 Modules make it possible to import JavaScript files into your application.  Modules are imported
 using 'require' statements that give you a reference to the module.

  It is a good idea to list the modules that your application depends on in the package.json in the project root
 */
var util = require('util');
var builder = require('xmlbuilder');
const jsf = require('json-schema-faker');
const chance = require('chance')
const faker = require('faker')
jsf.extend('chance', () => new chance.Chance());
jsf.extend('faker', () => faker);

/*
 Once you 'require' a module you can reference the things that it exports.  These are defined in module.exports.

 For a controller in a127 (which this is) you should export the functions referenced in your Swagger document by name.

 Either:
  - The HTTP Verb of the corresponding operation (get, put, post, delete, etc)
  - Or the operationId associated with the operation in your Swagger document

  In the starter/skeleton project the 'get' operation on the '/hello' path has an operationId named 'hello'.  Here,
  we specify that in the exports of this module that 'hello' maps to the function named 'hello'
 */
module.exports = {
  listBets: getBets,
  listPersonVideos: getPersonVideos,
  listStatistics: getStatistics, 
  stats: getExtraStats
};

/*
  Functions in a127 controllers used for operations should take two parameters:

  Param 1: a handle to the request object
  Param 2: a handle to the response object
 */
function getBets(req, res) {
  // variables defined in the Swagger document can be referenced using req.swagger.params.{parameter_name}
  var personBet = { 
                  "id": "1234", "takeOffId": 230, "personMoney": "235$", 
                  "time": "2020-05-01T12:00", "status": "win"
                  }
  res.json([personBet]);
}

function getPersonVideos(req, res) {
  // variables defined in the Swagger document can be referenced using req.swagger.params.{parameter_name}
  // var name = req.swagger.params.tea.value || 'white';
  var personVideo = { "time": "1 hour 3 minutes", "name": "Barselona vs Real Madrid" }
  res.json([personVideo]);
}


function getStatistics(req, res) {
  // variables defined in the Swagger document can be referenced using req.swagger.params.{parameter_name}
  // var name = req.swagger.params.tea.value || 'white';
  var statistic = { 
      "goals":"34", 
      "geo": `${faker.address.longitude()};${faker.address.latitude()}`, 
      "team":"http://capl.washjeff.edu/2/l/5069.jpg", 
      "personMoney": ["234$ via bets", "3 million dollars"] }
  res.json([statistic]);
}


function getExtraStats(req, res) {
  // variables defined in the Swagger document can be referenced using req.swagger.params.{parameter_name}
  // var name = req.swagger.params.tea.value || 'white';
  var doc = builder.create('bets')
    .ele('bet')
      .att('date', '2020-04-01T17:40')
      .att('sport', 'football')
      .att('who', 'Real Madrid vs Uventus')
      .up()
    .ele('bet')
      .att('date', '2020-04-01T17:40')
      .att('sport', 'basketball')
      .att('who', 'Rockets vs Traiden New-York')
      .up()  
  .end({ pretty: true });

  res.type('application/xml');
  res.set('x-template', 'bets.xsl')
  res.send(doc.toString());
}
