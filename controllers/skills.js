const Skill = require('../models/skill')

module.exports = {
    index,
    show
};

function show (req, res) {
    res.render('show', {
        skill: Skill.getOne(req.params.id)
    });
};

function index(req, res) {
    console.log('hello');
    res.render('index', {
        skills: Skill.getAll()
    });
}