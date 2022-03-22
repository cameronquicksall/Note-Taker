const express = require('express');

const PORT = process.env.PORT || 3005;
const app = express();

const htmlRoutes = require('./routes/htmlRoutes');
const apiRoutes = require('./routes/apiRoutes');


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.use('/', htmlRoutes);
app.use('/api', apiRoutes);

app.listen(PORT, () => {
    console.log(`API server now running on ${PORT}`);
});