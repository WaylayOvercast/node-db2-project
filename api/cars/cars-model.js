const db = require('../../data/db-config');


const getAll = () => {
  // DO YOUR MAGIC
  let data = db('cars');
  return data
}

async function getById (id) {
  // DO YOUR MAGIC
  try{
    let data = db('cars');
    const car = await data.where('id', id)
    return car
  }catch{
    const arr = []
    return arr
  }  
}   

const create = (car) => {
  // DO YOUR MAGIC
  return db('cars')
  .insert(car)
  .then(([id]) => getById(id));
}

module.exports = {
  getAll,
  getById,
  create
}