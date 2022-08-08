const express = require('express');
const underscore = require('underscore')
const lodash = require('lodash')

const router = express.Router();



router.get('/movies', function(req, res){
    const movies = ["Rang de basanti","The shining","Lord of the rings","Batman begins"]
   console.log(JSON.stringify(movies))

   res.send('Hello there thats it!')
})

router.get('/movies/:indexNumber', function(req, res){
    let movies = ["Rang de basanti","The shining","Lord of the rings","Batman begins"]   
    if(req.params.indexNumber<movies.length){
        console.log(movies[req.params.indexNumber])
     } else{
        console.log('invalid index')
    }
    res.send('Hello there do it!')
})

//router.get('/movies/:indexNumber', function(req, res){
     //let movies = ["Rang de basanti","The shining","Lord of the rings","Batman begins"]
    //console.log(req)
    
    //res.send(movies[req.params.indexNumber])
    //let movies = ["Rang de basanti","The shining","Lord of the rings","Batman begins"]
    //console.log(req)
   // if(req.params.indexNumber >= movies.length)
    //{
      //  res.send('not found') 
    //} else{
       // res.send(movies[req.params.indexNumber])
    //}
//})

router.get('/films', function(req, res){
    let films = [ {
        "id": 1,
        "name" : "The Shining"
       }, {
        id: 2,
        "name": "ncendies"
       }, {
        "id": 3,
        "name": "Rang de Basanti"
       }, {
        "id": 4,
        "name": "Finding Nemo"
       }]
       
   console.log(JSON.stringify(films))

   res.send(films)
})

router.get('/films/:filmId', function(req, res){ 
    let films = [ {
        "id": 1,
        "name" : "The Shining"
       }, {
        id: 2,
        "name": "ncendies"
       }, {
        "id": 3,
        "name": "Rang de Basanti"
       }, {
        "id": 4,
        "name": "Finding Nemo"
       }]
       if ( 0 >= req.params.filmId ||  films.length < req.params.filmId) {
        res.send("No movie exists with this id");
        console.log("No movie exists with this id")
      } else {
        const filmData = films.find(ele => ele.id === +req.params.filmId)
        res.send(filmData);
        console.log(filmData);
      }
        })
        module.exports = router;