const db = require('../../data/db-config');


async function getAll () {
  // DO YOUR MAGIC
  let data = await db('cars');
  
  if(data.length){
    return data
  }else{
    const arr = []
    return arr
  }
}

async function getById (id) {
  // DO YOUR MAGIC
  const obj = await db('cars').where('id', id).first()
  if(obj){
    return obj
  }else{
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