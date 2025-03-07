const newman = require('newman');
require ('dotenv').config();

newman.run({
    //collection:'https://api.postman.com/collections/42771747-763a085d-ce69-4491-9742-fcade4bd740b?access_key=${process.env.access_key}',
    
collection:require('./collection/dmoney-REST-API.postman_collection.json'),
reporters: 'htmlextra',
iterationCount: 1,
reporter: {
    htmlextra: {
        export: './Reports/reports.html',
    }
}
}, function (err){
    if (err) { throw err;}
    console.log('collection run complete!');




});