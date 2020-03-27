import { app } from './src/app'
import { SERVER_PORT } from './src/config'

app.listen(SERVER_PORT, () => console.log(`Server is running on port: ${SERVER_PORT}`))
