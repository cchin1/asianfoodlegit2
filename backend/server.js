const express = require("express");
const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/status", (req, res) => {
    res.json({ status: 'ok' })
});

app.listen(PORT, () => {
    console.log('API server now on port ${PORT}!');
});