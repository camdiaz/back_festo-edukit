const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const userRoutes = require('./routes/user_route');
const tankRoutes = require('./routes/tank_route');
const sensorRoutes = require('./routes/sensor_route');
const bombRoutes = require('./routes/bomb_route');
const { swaggerDocs: SwaggerDocsV1 } = require('./routes/swagger');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3030; //Ejecution PORT

SwaggerDocsV1(app, PORT);

// Middleware ----- These are using authentication. TAKE CARE ABOUT THE ORDER
app.use(cors());
app.use(express.json());
app.use(userRoutes);
app.use(tankRoutes);
app.use(sensorRoutes);
app.use(bombRoutes);

app.get('/', (req, res) => res.status(200).send({
  message: 'FESTO EDUKIT API',
}));

app.listen(PORT, () => {
  console.log(`⚡ Server listening on port ${PORT}`);
});
