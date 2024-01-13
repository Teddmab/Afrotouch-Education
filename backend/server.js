const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5001;

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello from the backend!');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

app.post('/submit-form', (req, res) => {
    const { email, whatsapp, country, university, programs } = req.body;
    // TODO: Add logic to handle the email and WhatsApp number, e.g., saving to a database or sending an email

    // For now, we'll just log it to the console and send a response back
    console.log(`Email: ${email}, WhatsApp: ${whatsapp}, country: ${country}, university: ${university}, programs: ${programs}`);
    res.status(200).json({ message: 'Form data received' });
});
