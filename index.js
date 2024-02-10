const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json())

const db = require("./models");

// Make sure the required routers are implemented correctly in their respective files.
// Check if those files properly export Express router instances.

const activityOneRouter = require('./routes/ActivityOne');
app.use("/activityone", activityOneRouter);
const activityTwoRouter = require('./routes/ActivityTwo');
app.use("/activitytwo", activityTwoRouter);
const activityThreeRouter = require('./routes/ActivityThree');
app.use("/activitythree", activityThreeRouter);
const activityFourRouter = require('./routes/ActivityFour');
app.use("/activityfour", activityFourRouter);
const activityFiveRouter = require('./routes/ActivityFive');
app.use("/activityfive", activityFiveRouter);
const activitySixRouter = require('./routes/ActivitySix');
app.use("/activitysix", activitySixRouter);
const usersRouter = require('./routes/Users');
app.use("/activityone/auth", usersRouter);
const homeRouter = require('./routes/Home');
app.use("/home", homeRouter);

// Make sure the "./models" directory contains the correct Sequelize models and
// connection configurations. Check the index.js file inside that directory.

db.sequelize.sync().then(() => {
    // Previously commented code:
    // app.listen(3001, () => {
    //     console.log("Server running on port 3001.");
    // });


   // Use `||` instead of `|` to ensure you're using logical OR and not bitwise OR.
    // `process.env.PORT` is typically correct, but `PORT` is not defined in this snippet.
    const port = process.env.PORT || 3001; // Provide a default value like 3001 if not set in environment.
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    })
})