const express = require('express')
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const cors = require('cors');

const app = express()
const port = 5170

// ✅ CORS Configuration - PUT THIS BEFORE ROUTES
app.use(cors({
    origin: 'http://localhost:5173', // Your frontend URL
    credentials: true,
    methods: ['GET', 'POST', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use('/uploads', express.static('uploads'));

// ✅ Parse JSON bodies
app.use(express.json());

const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'My API',
      version: '1.0.0',
      description: 'API documentation',
    },
    servers: [
      {
        url: 'http://localhost:5170',
      },
    ],
  },
  apis: ['routes.js'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Load routes
require('./routes.js')(app);

app.listen(port, () => {
    console.log(`✅ Server listening on port ${port}`)
    console.log(`🌐 Frontend allowed from: http://localhost:5173`)
})