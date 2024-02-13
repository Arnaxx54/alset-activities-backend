const express = require("express");
const router = express.Router();
const {ActivitySixs, Activities} = require("../models")

router.get("/",async (req,res) => {
    const listOfActivitySixs =  await ActivitySixs.findAll();
    res.json(listOfActivitySixs);
});

router.post('/', async (req,res) => {
    const {id,content} = req.body;
    const newActivitySix = await ActivitySixs.create(content);
    Activities.update({ActivitySixId: newActivitySix.id}, {where:{id:id}})
    res.json(newActivitySix);
})

router.get('/byId/:id', async (req,res) => {
    const id = req.params.id
    const activitySix = await ActivitySixs.findByPk(id)
    res.json(activitySix)
})

router.post('/byId/:id', async (req, res) => {
    const data = req.body;
    const id = req.params.id
    const updatedActivitySix = await ActivitySixs.update(
        { content: data.content.content,label:data.label,instruction:data.instruction},
        { where: { id: id } }
    )
    res.json(updatedActivitySix)
})

module.exports = router;