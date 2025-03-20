import app from './src/app/index.js'

import { PORT } from './src/constants/index.js'

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
