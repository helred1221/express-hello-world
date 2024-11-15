const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

const json = {
    msg: 'Hello World!'
}

app.get('/', (req, res) => {
    res.json(json.msg);
});

// app.listen(port, () => {
//     console.log('Hello World!');
// });

app.listen(port, () => console.log(`Aplicação rodando na porta ${port}!`));