const db = require('../../config/mongoose')
const Record = require('../record')

const record = [{
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
    category: '交通通勤',
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
  Record.create(record).then(() => {
    console.log('done inserting record')
    db.close()
  })
})