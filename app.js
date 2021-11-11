const express = require('express')
const exphbs = require('express-handlebars')
const isEqual = require('./controller/isEqual')
const methodOverride = require('method-override')
const routes = require('./routes')

require('./config/mongoose')


const app = express()
const PORT = process.env.PORT || 3000

app.engine('hbs', exphbs({
  defaultLayout: 'main',
  extname: '.hbs',
  helpers: { isEqual }
}))
app.set('view engine', 'hbs')


app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.use(routes)



// 設定 port 3000
app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`)
})
