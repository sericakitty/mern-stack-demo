require('dotenv').config()

const MONGOOSE_URL = process.env.MONGOOSE_URL

const PORT = process.env.PORT

const ALLOWED_ORIGINS = process.env.ALLOWED_ORIGINS


module.exports = {
    MONGOOSE_URL,
    PORT,
    ALLOWED_ORIGINS
}
