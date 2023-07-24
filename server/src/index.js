const http = require('http');
const cors = require('cors');
const mongoose = require('mongoose');

const app = require('./app');
const config = require('./utils/config');
const apiRouter = require('./controllers/user');
const corsMiddleware = require('./middlewares/headers');



mongoose.connect(config.MONGOOSE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('Connected to MongoDB'))
.catch((error) => console.log('Error connecting to MongoDB', error.message));

  
app.use(cors({
    origin: config.ALLOWED_ORIGINS,
    credentials: true
}));


app.use(corsMiddleware);

app.use('/auth', apiRouter);

const server = http.createServer(app);



const port = config.PORT || 5000;
server.listen(port, () => console.log(`Server is running on port ${port}`));