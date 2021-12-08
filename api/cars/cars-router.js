// DO YOUR MAGIC
const express = require('express');
const Cars = require('./cars-model');
const {
        checkCarId,
        checkCarPayload,
        checkVinNumberValid,
        checkVinNumberUnique

    } = require('./cars-middleware');


    const router = express.Router();

  router.get('/', async (req, res, next) =>{
    try{
        const fetch = await Cars.getAll()
        res.status(200).json(fetch)

    }catch(err){
        res.status(500).json({
            message:`unknown server-side error. failure to GET`,
            error:err
        });
    }
  });

  router.get('/:id',checkCarId ,async (req, res, next) =>{
    try{
        res.status(200).json(req.checksOut)
    
    }catch(err){
        res.status(500).json({
            message:`unknown server-side error. failure to GET`,
            error:err
        });
    }
  });

 /* router.get('/', (req, res, next) =>{

  });
*/

  module.exports = router