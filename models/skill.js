const skills = [
    {id: 123, type: 'javascript', completed: true},
    {id: 473, type: 'HTML', completed: true},
    {id: 837, type: 'Express', completed: false}
];

module.exports = {
    getAll,
    getOne
};

function getOne (id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
};

function getAll(){
    return skills;
};