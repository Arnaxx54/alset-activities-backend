const express = require("express");
const router = express.Router();
const {Activities, Users} = require("../models")

router.post("/", async (req,res) => {
    const {UserId} = req.body
    const listOfActivities =  await Activities.findAll({
        where: {UserId: UserId}
    });
    res.json(listOfActivities);
});

router.get('/instructors', async (req,res) => {
    const listOfInstructors = await Users.findAll({where:{occupation:'Instructor'}})
    res.json(listOfInstructors)
})

router.get('/students', async (req,res) => {
    const listOfStudents = await Users.findAll({where:{occupation:'Student'}})
    res.json(listOfStudents)
})

router.post('/fromtemplate', async (req,res) => {
    const content = req.body
    const newActivity = await Activities.create(content)
    res.json(newActivity)
})

module.exports = router;