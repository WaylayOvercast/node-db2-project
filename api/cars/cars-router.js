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

  router.get('/:id' , checkCarId ,async (req, res, next) =>{
    try{
        const car = await Cars.getById(req.params.id)
        res.status(200).json(car)
    
    }catch{
        res.status(500).json({
            message:`unknown server-side error. failure to GET`,
        });
    }
  });

  router.post('/', checkCarPayload, checkVinNumberValid, 
  checkVinNumberValid, async (req, res, next) =>{
        try{
            const newCar = await Cars.create(req.body)
            res.status(201).json(newCar)
        }catch{
            res.status(500).json({
                message:`unknown server-side error. failure to POST`,
            });
        }    

  });


  module.exports = router