const express = require("express");
const router = express.Router();
const { ActivityTwos, Activities } = require("../models")

router.get("/", async (req, res) => {
    const listOfActivityTwos = await ActivityTwos.findAll();
    res.json(listOfActivityTwos);
});

router.post('/', async (req, res) => {
    const { id, content } = req.body;
    const newActivityTwo = await ActivityTwos.create(content);
    Activities.update({ ActivityTwoId: newActivityTwo.id }, { where: { id: id } })
    res.json(newActivityTwo);
})

router.get('/byId/:id', async (req, res) => {
    const id = req.params.id
    const activityTwo = await ActivityTwos.findByPk(id)
    res.json(activityTwo)
})

router.post('/byId/:id', async (req, res) => {
    const data = req.body;
    const id = req.params.id
    const updatedActivityTwo = await ActivityTwos.update(
        { activity_description: data.content.activity_description, content: data.content.content, transcript_source_id: data.content.transcript_source_id, predefinedHighlighting: data.content.predefinedHighlighting,label:data.label,instruction:data.instruction },
        { where: { id: id } }
    )
    res.json(updatedActivityTwo)
})

router.post('/home/:id', async (req,res) => {
    const data = req.body 
    const id = req.params.id
    const updatedActivityTwo = await ActivityTwos.update(
        {predefinedHighlighting:data.predefinedHighlighting,label:data.label,instruction:data.instruction},
        {where: {id:id}}
    )
    res.json(updatedActivityTwo)
})

router.post('/new-chain', async (req,res) => {
    const { content,UserId,ActivityOneId } = req.body;
    const newActivityTwo = await ActivityTwos.create(content);
    const newActivities = await Activities.create({UserId:UserId,ActivityTwoId:newActivityTwo.id,ActivityOneId:ActivityOneId})
    res.json({ActivitiesId: newActivities, ActivityTwoId: newActivityTwo.id});
})


module.exports = router;