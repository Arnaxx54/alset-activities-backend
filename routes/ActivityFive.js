const express = require("express");
const router = express.Router();
const {ActivityFives, Activities} = require("../models")

router.get("/",async (req,res) => {
    const listOfActivityFives =  await ActivityFives.findAll();
    res.json(listOfActivityFives);
});

router.post('/', async (req,res) => {
    const {id,content} = req.body;
    const newActivityFive = await ActivityFives.create(content);
    Activities.update({ActivityFiveId: newActivityFive.id}, {where:{id:id}})
    res.json(newActivityFive);
})

router.get('/byId/:id', async (req,res) => {
    const id = req.params.id
    const activityFive = await ActivityFives.findByPk(id)
    console.log(activityFive)
    res.json(activityFive)
})

router.post('/byId/:id', async (req, res) => {
    const data = req.body;
    const id = req.params.id
    const updatedActivityFive = await ActivityFives.update(
        { content: data.content.content, MLClusters: data.content.MLClusters},
        { where: { id: id } }
    )
    res.json(updatedActivityFive)
})

router.post('/home/:id', async (req,res) => {
    const data = req.body 
    const id = req.params.id
    const updatedActivityFive = await ActivityFives.update(
        {MLClusters:data.MLClusters},
        {where: {id:id}}
    )
    res.json(updatedActivityFive)
})

module.exports = router;