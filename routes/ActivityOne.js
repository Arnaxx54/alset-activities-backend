const express = require("express");
const router = express.Router();
const {ActivityOnes,Activities} = require("../models")

router.get("/",async (req,res) => {
    const listOfActivityOnes =  await ActivityOnes.findAll();
    res.json(listOfActivityOnes);
});

router.post('/', async (req,res) => {
    const content = req.body;
    const newActivityOne = await ActivityOnes.create(content);
    const newActivities = await Activities.create({UserId:content.UserId,ActivityOneId:newActivityOne.id})
    res.json({ActivitiesId: newActivities, ActivityOneId: newActivityOne.id});
})

router.post('/fromtemplate', async (req,res) => {
    const { id, content } = req.body;
    const newActivityOne = await ActivityOnes.create(content);
    const newActivities = await Activities.create({UserId:id,ActivityOneId:newActivityOne.id})
    res.json({ActivitiesId: newActivities, ActivityOneId: newActivityOne.id});
})

router.get('/byId/:id', async (req,res) => {
    const id = req.params.id
    const activityOne = await ActivityOnes.findByPk(id)
    res.json(activityOne)
})

router.post('/byId/:id', async (req,res) => {
    const data = req.body;
    const id = req.params.id
    console.log("sos")
    const updatedActivityOne = await ActivityOnes.update(
        {activity_description:data.activity_description,content:data.content,transcript_source_id:data.transcript_source_id,transcriptEditable:data.transcriptEditable,label:data.label,instruction:data.instruction},
        {where: {id:id}}
    )
    res.json(updatedActivityOne)
})

router.post('/home/:id', async (req,res) => {
    const data = req.body 
    const id = req.params.id
    const updatedActivityOne = await ActivityOnes.update(
        {transcriptEditable:data.transcriptEditable,label:data.label,instruction:data.instruction},
        {where: {id:id}}
    )
    res.json(updatedActivityOne)
})

router.post('/new-chain', async (req,res) => {
    const content = req.body;
    const newActivityOne = await ActivityOnes.create(content);
    const newActivities = await Activities.create({UserId:content.UserId,ActivityOneId:newActivityOne.id})
    res.json({ActivitiesId: newActivities, ActivityOneId: newActivityOne.id});
})


module.exports = router;