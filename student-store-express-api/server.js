const app = require("./app")
var cors = require('cors')

const port = process.env.PORT || 3001

app.listen(port, () => {
  console.log(`🚀 Server listening on port ` + port)
})

app.use(cors())