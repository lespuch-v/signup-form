const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
  console.log(req);
});

app.post('/', (req, res) => {
  const fName = req.body.yourname;
  const lName = req.body.yoursurname;
  const email = req.body.email;
  res.send(`
  <p>Your name is ${fName}</p>
  <p>Your name is ${lName}</p>
  <p>Your name is ${email}</p>
  `);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
