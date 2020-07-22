const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const port = 3000
const trashTalkGenerator = require('./trashTalkGenerator')

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(express.static('public'))


app.get('/', (req, res) => {
  userChoice = req.query.target
  const trashTalkContent = trashTalkGenerator(userChoice)
  res.render('index', { trashTalkRender: trashTalkContent })
})

app.listen(port, () => {
  console.log(`This app connect on ${port}`)
})
