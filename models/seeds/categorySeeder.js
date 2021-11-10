const db = require('../../config/mongoose')
const Category = require('../category')

const category = [{
    name: '家居物業',
    icon: 'fas fa-home'
  },
  {
    name: '交通通勤',
    icon: 'fas fa-shuttle-van'
  },
  {
    name: '休閒娛樂',
    icon: 'fas fa-grin-beam'
  },
  {
    name: '餐飲食品',
    icon: 'fas fa-utensils'
  },
  {
    name: '其他',
    icon: 'fas fa-pen'
  }
]

db.once('open', () => {
  console.log('mongodb connected!')
  Category.create(category).then(() => {
    console.log('done inserting category')
    db.close()
  })
})