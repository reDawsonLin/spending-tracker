const express = require('express')
const router = express.Router()

const Record = require('../../models/record')
const Category = require('../../models/category')
const sumUpAmount = require('../../controller/sumUpAmount')

router.get('/', (req, res) => {
  // console.log('req.query', req.query  )
  const filterd = {}
  const category = req.query.category
  // console.log('pre category', category)
  if (category) filterd.category = category
  // console.log('filterd', filterd)
  //若值為空 = 找全部
  Record.find(filterd)
    .lean()
    .sort({ date: 'desc' })
    .then(records => {
      // console.log('record filter', records)
      Category.find()
        .lean()
        .sort({ _id: 'asc' })
        .then(categories => {
          const totalAmount = sumUpAmount(records)
          const categoryData = {}
          
          //加上icon
          categories.forEach(category => (categoryData[category.name] = category.icon))
          records.forEach(record => (record.icon = categoryData[record.category]))

          res.render('index', {
            records,
            totalAmount,
            categories,
            category
          })
        })
    })
    .catch(error => console.log(error))
})



module.exports = router