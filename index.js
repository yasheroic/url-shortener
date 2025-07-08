const express = require("express");
const urlRoute = require("./routes/url.js");
const { connectToMongoDB } = require("./connect.js");
const URL = require("./models/url.js");

const PORT = 8001;
const app = express();
app.use(express.json());

connectToMongoDB("mongodb://127.0.0.1:27017/short-url").then(() => {
  console.log("MongoDB Connected");
});

app.use("/url", urlRoute);

app.get("/test", async (req, res) => {
  const allUrl = await URL.find({});
  return res.end(`
    <html>
    <head>
    <body>
     <ol>${allUrl
       .map(
         (url) =>
           `<li>${url.shortId} -${url.redirectURL} - ${url.visitHistory.length}</li>`
       )
       .join("")}</ol>
    </body>
    </head>
    </html>`);
});

app.get("/url/:shortId", async (req, res) => {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        visitHistory: {
          timestamp: Date.now(),
        },
      },
    }
  );
  res.redirect(entry.redirectURL);
});

app.listen(PORT, () => console.log(`App is listening on PORT: ${PORT}`));
