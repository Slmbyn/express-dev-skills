const skills = [
    {type: 'javascript', completed: true},
    {type: 'HTML', completed: true},
    {type: 'Express', completed: false}
];

module.exports = {
    getAll
};

function getAll(){
    return skills;
};