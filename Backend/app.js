const express = require('express')
const cors = require('cors')
require('dotenv').config()
require('./DB/mongoDb')

const app = express()
app.use(express.json());
app.use(cors());
app.use('/uploads', express.static('Uploads'));

const authRouter = require('./Routers/authRouter');
const projectRouter = require('./Routers/projectRouter')
const referenceRouter = require('./Routers/referenceRouter')
const forumRouter = require('./Routers/forumRouter')


app.use('/', authRouter);
app.use('/', projectRouter);
app.use('/', referenceRouter)
app.use('/', forumRouter)




const port = process.env.PORT || 4000
app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})