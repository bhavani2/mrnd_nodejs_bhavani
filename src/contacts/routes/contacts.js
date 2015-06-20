var express = require('express');
var router = express.Router();
var arr = [];
//var arr[messages]=new Array();

/* GET contacts */
router.get('/:id', function(req, res, next) {
  // console.log("id...");
  // console.log(req);
   var id=req.params.id;
   //console.log(id);

   res.send(JSON.stringify(arr[parseInt(id)]));
   res.json();
});

router.post('/', function(req, res, next) {
	//console.log("In server post ");
	//console.log(" abcd ");
     //console.log(req.body);
     var c=req.body;
     c.messages=new Array();
     arr.push(req.body);
     res.send(arr.length-1+"");
});

router.put('/:id', function(req, res, next) {
	var bodyR=req.body;
	var id=req.params.id;
	var key=Object.keys(bodyR);
	console.log("innn"+bodyR);
	console.log(arr[id].firstName);
	arr[id][key]=bodyR[key];
	console.log(bodyR.firstName);
	res.send(arr[id]);
});

router.post('/:id',function(req,res,next){
	  var id=req.params.id;
      var msg=req.body.message;
      arr[id].messages.push(msg);
      console.log(arr[id]);
      res.send(arr[id].messages[arr[id].messages.length-1]);
});

module.exports = router;
