var newman = require('newman');


function runcollection(callback){
   newman.run({
   collection: 'C:\\newman\\PMP Dependency latest collection\\Updated\\TestCollection.postman_collection.json',
   environment: 'C:\\newman\\PMP Dependency latest collection\\Updated\\Test.postman_environment.json',
   iterationCount :1
   },function(error, summary){
      callback(summary);
   })
   .on('beforeRequest', function(err, req){
      if(req.request.url.path[4] === 'voucher_creation'){
         const jbody = req.request.body.raw;
         const arrybody= JSON.parse(jbody);
         arrybody.actor.id = 45878
         req.request.body.raw = JSON.stringify(arrybody);
      }
   })
}

describe('newman', function () {
    var res = new Array();
   // done on the next line is a function that marks the current test as asynchronous
   it('Generate voucher with 200 response', function (done) {
      runcollection(function(result){
         x = result.run.executions[0].response.stream.toString();
        handleData(x)
        done();
     });

     function handleData(data) {
        console.log(data);
      }

   });

   it('Generate voucher with 200 response', function (done) {
      console.log('2nd test passed');
      done();
   });
});
