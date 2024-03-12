const express = require("express");
const router = express.Router();
const {programs} = require("../models");

router.get('/:postId', async (req, res) => {
    const uniId = req.params.postId;
    const listOfPrograms = await programs.findAll({where: {postId: uniId}});
    res.json(listOfPrograms);
})

router.post('/', async (req, res) => {
    const program = req.body;
    await programs.create(program);
    res.json(program);
});

module.exports = router;
