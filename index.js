const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json())

const db = require("./models");

const activityOneRouter = require('./routes/ActivityOne');
app.use("/activityone",activityOneRouter);
const activityTwoRouter = require('./routes/ActivityTwo');
app.use("/activitytwo",activityTwoRouter);
const activityThreeRouter = require('./routes/ActivityThree');
app.use("/activitythree",activityThreeRouter);
const activityFourRouter = require('./routes/ActivityFour');
app.use("/activityfour",activityFourRouter);
const activityFiveRouter = require('./routes/ActivityFive');
app.use("/activityfive",activityFiveRouter);
const activitySixRouter = require('./routes/ActivitySix');
app.use("/activitysix",activitySixRouter);
const usersRouter = require('./routes/Users');
app.use("/activityone/auth",usersRouter);
const homeRouter = require('./routes/Home');
app.use("/home",homeRouter);

db.sequelize.sync().then(() => {
    // app.listen(3001, () => {
    //     console.log("Server running on port 3001.");
    // });
    app.listen(process.env.PORT | PORT, () => {
        console.log(`Server running on port ${PORT}`);
    })
})