const express = require('express');
const app = express();

// КРИТИЧЕСКИ ВАЖНО для Render:
// Приложение должно слушать 0.0.0.0 и использовать порт из process.env.PORT
const port = process.env.PORT || 10000;

app.get('/', (req, res) => {
  res.send('<h1>Docker-контейнер успешно развернут в облаке Render!</h1><p>Сервис работает.</p>');
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Сервер запущен на порту ${port}`);
});