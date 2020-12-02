const app = require('express')();

const setCacheControlFor = (res) => {
  const header = 'Cache-Control';
  const value = 's-max-age=1, stale-while-revalidate';
  res.setHeader(header, value);
};

app.use((req, res, next) => {
  setCacheControlFor(res);
  req.query['middlewareIntercepted'] = true;
  next();
});

app.get('/api/deployed', (_, res) => {
  res.send(true);
});

app.get('/api/greeting', (_, res) => {
  res.send('Greetings from the backend!');
});

module.exports = app;
