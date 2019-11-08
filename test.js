var newman = require('newman');

function runcollection(callback){
   newman.run({
      collection: 'C:\\newman\\PMP Dependency latest collection\\Updated\\TestCollection.postman_collection.json',
      environment: 'C:\\newman\\PMP Dependency latest collection\\Updated\\Test.postman_environment.json',
      iterationCount :1
   },function(error, summary){
      callback(summary)
   })
   // if you want to modify any request you can do using below code
   // .on('beforeRequest', function(err, req){
   //    if(req.request.url.path[4] === 'name of the request to be modify'){
   //       const jbody = req.request.body.raw;
   //       const arrybody= JSON.parse(jbody);
   //       arrybody.actor.id = 45878
   //       req.request.body.raw = JSON.stringify(arrybody);
   //    }
   // })
}

describe('newman', function () {
   // done on the next line is a function that marks the current test as asynchronous
   it('Generate voucher with 200 response', function () {
      runcollection(result => {console.log(result.run.executions[0].response.stream.toString())})
       //runcollection(result)

   });

   it('generate voucher with 502', function () {
      //runcollection(result => console.log(result.run.executions[0].response.stream.toString()))
     
   });
});
