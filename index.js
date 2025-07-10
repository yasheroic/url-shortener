const express = require("express");
const { connectToMongoDB } = require("./connect.js");
const path = require('path')
const URL = require("./models/url.js");
const cookieParser = require("cookie-parser")
const {restrictToLoggedinUserOnly} = require("./middlewares/auth.js")
const urlRoute = require("./routes/url.js");
const staticRoute = require("./routes/staticRouter.js")
const userRoute = require("./routes/user.js")

const PORT = 8001;
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(cookieParser())

connectToMongoDB("mongodb://127.0.0.1:27017/short-url").then(() => {
  console.log("MongoDB Connected");
});
app.set("view engine","ejs")
app.set("views", path.resolve("./views"))

app.use("/url",restrictToLoggedinUserOnly, urlRoute);
app.use("/", staticRoute)
app.use("/user", userRoute)

app.get("/test", async (req, res) => {
  const allUrl = await URL.find({});
  return res.render("home",{
    urls: allUrl,
  })
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
  
  if (!entry) {
    return res.status(404).send("URL not found");
  }
  
  res.redirect(entry.redirectURL);
});

app.listen(PORT, () => console.log(`App is listening on PORT: ${PORT}`));
