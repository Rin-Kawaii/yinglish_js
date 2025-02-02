const path = require("path");
const express = require("express");
const app = express();

const translate = require("./yinglish");

app.get("/", (req, res) => {
    const indexPath = path.join(__dirname, "index.html");
    res.sendFile(indexPath);
});

app.use("/assets", express.static(path.join(__dirname, "assets")));

app.get("/api/translate", (req, res) => {
    const { text, licentious } = req.query;

    if (!text) {
        return res.status(400).send("Bad Request: 'text' query parameter is required");
    }
    const translatedText = translate(text, licentious);
    res.json({ translatedText });
});

app.use((req, res) => {
    res.status(404).send("Not Found");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
