const express = require('express');
const bodyParser = require('body-parser');
const usuarioRoutes = require('./routes/usuarioRoutes');
const especializacaoRoutes = require('./routes/especializacaoRoutes');

const app = express();

app.use(bodyParser.json());

app.use('/usuarios', usuarioRoutes);
app.use('/especializacoes', especializacaoRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});