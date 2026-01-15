const express = require('express')
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

// Initialize app FIRST
const app = express()
const port = 5170

const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0', // Changed from 'myapi' to 'openapi'
    info: {
      title: 'My API',
      version: '1.0.0',
      description: 'API documentation',
    },
    servers: [
      {
        url: 'http://localhost:5170', // Changed to match your port
      },
    ],
  },
  apis: ['routes.js'], // files containing annotations as above
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));



// Load routes AFTER app is initialized and swagger is set up
require('./routes.js')(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})