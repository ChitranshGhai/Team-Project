const express = require("express");
const port = 9998;
const app = express();
require("./config/dbConn");
const Item = require("./config/User")
const Bulk = require('./config/Bulk');
const customer = require("./config/User1");
const cors = require("cors");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth2").Strategy;
const session = require("express-session");
const clientid =
  "409808503130-pq2n4itufa5d43reguacsbrhg3agrknu.apps.googleusercontent.com";
const clientsecret = "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";
// connectDB()
app.use(cors({
    origin: 'http://localhost:3000',
    methods: 'GET,POST,PUT,DELETE',
    credentials: true
  }));
app.use(express.json());

/* Setup Session */
app.use(
  session({
    secret: "145682dlgdkgfjsjdjh",
    resave: false,
    saveUninitialized: true,
  })
);

//Setup Passport
app.use(passport.initialize());
app.use(passport.session());
const adminEmails = ['vaibhavi_sharma_bca22s2@jimsindia.org']
passport.use(
  new GoogleStrategy(
    {
      clientID: clientid,
      clientSecret: clientsecret,
      callbackURL: "/auth/google/callback",
      scope: ["profile", "email"],
    },
    async (accessToken, refreshToken, profile, done) => {
     
      /* console.log(profile); */
      try {
        let user = await customer.findOne({ GoogleId: profile.id });
        if (!user) {
          user = new customer({
            GoogleId: profile.id,
            name: profile.displayName,
            email: profile.emails[0].value,
            image: profile.photos[0].value,
            isAdmin: adminEmails.includes(profile.emails[0].value)
          });
          await user.save();
        }
        return done(null, user);
      } catch (error) {
        return done(error, null);
      }
    }
  )
);
function isAdmin(req,res,next){
  if(req.isAuthenticated() && req.user.isAdmin){
    return next()
  }
  res.status(403).json({ message: "Forbidden: Admins only"})
}
passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

//initial Google Auth Login
app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    successRedirect: "http://localhost:3000/",
    failureRedirect: "http://localhost:3000/Login",
  })
);

app.get("/login/success", async(req,res)=>{
   /*  console.log(req.customer) */
    
    if(req.user){
        res.status(200).json({message:"user Login",user:req.user})
    }
    else{
        res.json({message:"Currently Not Logged In"})
    }
})


/* Logout Api */
app.get("/logout",async (req,res)=>{
  req.logout(function(error){
     if(error){
      return next(error)
     }
     else{
      res.redirect("http://localhost:3000")
     }
  })
})

//login api
// Updated login api
app.post("/api/Login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await customer.findOne({ email: email });
    if (user) {
      if (user.password === password) {
        res.json({
          data: "Success",
          user: {
            name: user.name,
            email: user.email,
            GoogleId: user.GoogleId || null,
            country: user.country || "India", // Default to "India" if not present
            language: user.language || "English", // Default to "English" if not present
          },
        });
      } else {
        res.json({ data: "The Password is Incorrect" });
      }
    } else {
      res.json({ data: "No user Found" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ data: "An error occurred", error: err.message });
  }
});


//signup api
app.post("/api/SignUp", async (req, res) => {
  const obj = req.body;
  try {
    const newCustomer = new customer(obj);
    const save = await newCustomer.save();
    res.send(save);
  } catch (err) {
    console.log(err);
  }
});




// POST API to handle form submissions
app.post('/api/bulkorders', async (req, res) => {
  try {
    const newBulkOrder = new Bulk(req.body);
    await newBulkOrder.save();
    res.status(201).json({ success: true });
  } catch (error) {
    console.error("Error saving bulk order:", error.message, req.body); // Add req.body to see what is being sent
    res.status(500).json({ success: false, message: 'Error saving bulk order' });
  }
});


// GET API to retrieve all orders
app.get('/api/getbulkorders', async (req, res) => {
  try {
    const orders = await Bulk.find(); // Fetch all orders
    res.status(200).json(orders); // Return the data
  } catch (error) {
    console.error("Error retrieving bulk orders:", error);
    res.status(500).json({ success: false, message: 'Error retrieving bulk orders' });
  }
});



//listening port
app.listen(port, (err) => {
  if (err) {
    console.log("Something Went Wrong");
  } else {
    console.log(`Server is Running on ${port}`);
  }
});