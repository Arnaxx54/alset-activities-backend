const express = require("express");
const router = express.Router();
const {ActivityFours, Activities} = require("../models")

router.get("/",async (req,res) => {
    const listOfActivityFours =  await ActivityFours.findAll();
    res.json(listOfActivityFours);
});

router.post('/', async (req,res) => {
    const {id,content} = req.body;
    const newActivityFour = await ActivityFours.create(content);
    Activities.update({ActivityFourId: newActivityFour.id}, {where:{id:id}})
    res.json(newActivityFour);
})

router.get('/byId/:id', async (req,res) => {
    const id = req.params.id
    const activityFour = await ActivityFours.findByPk(id)
    res.json(activityFour)
})

router.post('/byId/:id', async (req, res) => {
    const data = req.body;
    const id = req.params.id
    const updatedActivityFour = await ActivityFours.update(
        { content: data.content.content,label:data.label,instruction:data.instruction},
        { where: { id: id } }
    )
    res.json(updatedActivityFour)
})

module.exports = router;