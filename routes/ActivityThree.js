const express = require("express");
const router = express.Router();
const {ActivityThrees,Activities} = require("../models")

router.get("/",async (req,res) => {
    const listOfActivityThrees =  await ActivityThrees.findAll();
    res.json(listOfActivityThrees);
});

router.post('/', async (req,res) => {
    const {id,content} = req.body;
    const newActivityThree = await ActivityThrees.create(content);
    Activities.update({ActivityThreeId: newActivityThree.id}, {where:{id:id}})
    res.json(newActivityThree);
})

router.get('/byId/:id', async (req,res) => {
    const id = req.params.id
    const activityThree = await ActivityThrees.findByPk(id)
    res.json(activityThree)
})

router.post('/byId/:id', async (req, res) => {
    const data = req.body;
    const id = req.params.id
    console.log(data)
    const updatedActivityThree = await ActivityThrees.update(
        { activity_description: data.content.activity_description, content: data.content.content, transcript_source_id: data.content.transcript_source_id, MLModel: data.content.MLModel, AllowMLModel: data.content.AllowMLModel, predefinedMLSelection: data.content.predefinedMLSelection},
        { where: { id: id } }
    )
    res.json(updatedActivityThree)
})

router.post('/home/:id', async (req,res) => {
    const data = req.body 
    const id = req.params.id
    const updatedActivityThree = await ActivityThrees.update(
        {MLModel:data.MLModel,AllowMLModel:data.AllowMLModel,predefinedMLSelection:data.predefinedMLSelection},
        {where: {id:id}}
    )
    res.json(updatedActivityThree)
})

module.exports = router;