const Skill = require('../models/skill')

module.exports = {
    index
};

function index(req, res) {
    console.log('hello');
    res.render('index', {
        skills: Skill.getAll()
    });
}