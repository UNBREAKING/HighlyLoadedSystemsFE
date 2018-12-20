const express = require('express');
const proxy = require('http-proxy-middleware');

const app = express();
app.use(express.static('client'));

// Add middleware for http proxying 
const apiProxy = proxy('/api', { target: 'http://localhost:8080' });
app.use('/sign-in', apiProxy);
app.use('/sign-out', apiProxy);
app.use('/sign-up', apiProxy);

// Render your site
const renderIndex = (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist/index.html'));
}
app.get('/*', renderIndex);

app.listen(8081, () => {
  console.log('Listening on: http://localhost:8081');
});