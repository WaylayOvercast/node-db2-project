const Cars = require('./cars-model');
const vinCheck = require('vin-validator');

async function checkCarId  (req, res, next)  {
  // DO YOUR MAGIC
  const checkIt = await Cars.getById(req.params.id)
  
  if(!checkIt || checkIt.length <= 0){
    next(res.status(404).json({message:`car with id ${req.params.id} is not found`}))

  }else{
    next()
  }
}

const checkCarPayload = (req, res, next) => {
  // DO YOUR MAGIC
  const body = req.body
  if(!body.make || !body.model || !body.mileage || !body.vin){
    let missing;
    body.make ? null : missing = 'make';
    body.model ? null : missing = 'model';
    body.mileage ? null : missing = 'mileage';
    body.vin ? null : missing = 'vin'
    
    next(res.status(400).json({message: `${missing} is missing`}))
  }else{
    next()
  }
}

const checkVinNumberValid = (req, res, next) => {
  // DO YOUR MAGIC
  const vin = req.body.vin;
  if(vinCheck.validate(vin)){
    next()
  }else{
    next(res.status(400).json({message:`vin ${vin} is invalid`}))
  }
}

async function checkVinNumberUnique (req, res, next) {
  // DO YOUR MAGIC
  const data = await Cars.getAll();
  const problem = await data.map(car =>{ car.vin === req.body.vin })
  if(problem.length > 0){
    next(res.status(400).json({message:`vin ${req.body.vin} already exists`}))
  
  }else{
    next()
  }
  
}

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique
}