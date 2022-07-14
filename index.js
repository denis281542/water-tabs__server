const express = require('express');
const cookieParser = require('cookie-parser');
const PORT = process.env.PORT || 5000; 
const userRouter = require('./routes/user.routes');
const orderRouter = require('./routes/order.routes');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use('/api', userRouter);
app.use('/api', orderRouter);

const start = () => {
    try {
        app.listen(PORT, () => console.log(`start on PORT ${PORT}`))
    } catch (e) {
        console.log(e);
    }
}

start();