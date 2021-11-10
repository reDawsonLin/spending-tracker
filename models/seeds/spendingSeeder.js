const db = require('../../config/mongoose')
const Spending = require('../spending')

const spending = [{
    name: '早餐',
    date: '2021-05-05',
    category: '餐飲食品',
    amount: 60
  },
  {
    name: '晚餐',
    date: '2021-05-05',
    category: '餐飲食品',
    amount: 120
  },
  {
    name: '機車加油',
    date: '2021-05-05',
    category: '交通出行',
    amount: 100
  },
  {
    name: '射飛鏢',
    date: '2021-05-05',
    category: '休閒娛樂',
    amount: 200
  },
  {
    name: '房租',
    date: '2021-05-05',
    category: '家居物業',
    amount: 12000
  },
]

db.once('open', () => {
  console.log('mongodb connected!')
  Spending.create(spending).then(() => {
    console.log('done inserting spending')
    db.close()
  })
})