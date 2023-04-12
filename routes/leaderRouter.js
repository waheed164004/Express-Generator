const express = require('express');
const bodyParser =require('body-parser');

const leaderRouter = express.Router();

leaderRouter.use(bodyParser.json());

leaderRouter.route('/')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    res.end('Will send all the leaders to you!');
})
.post((req, res, next) => {
    res.end('Will add the leaders: ' + req.body.name + ' with details: ' + req.body.description);
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /leaders');
})
.delete((req, res, next) => {
    res.end('Deleting all leaders');
});

leaderRouter.route('/:leaderId')
.all((req,res,next) =>{
    res.statusCode=200;
    res.setHeader('content-type','text/plain');
    next();
})
.get((req,res,next)=>{
    res.end("Will send the details of the leader with id "+req.params.leaderId);
})
.post((req,res,next)=>{
    res.statusCode = 403;
    res.end("Adding new leader is not supported");
})
.put((req,res,next)=>{
    res.end("Updated the leader with dish Id: "+req.params.leaderId);
})
.delete((req,res,next)=>{
    res.end("Deleted the leader with dish Id: "+req.params.leaderId);
});

module.exports = leaderRouter;