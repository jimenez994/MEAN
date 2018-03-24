const mongoose = require('mongoose');
const Project = mongoose.model('Project');
const User = mongoose.model('User');

module.exports = {
    show(req, res) {
        Project.find({}, (err, projects) => {
            if (err){
                return read.json(err)
            }
            return res.json(projects);
        })
    },
    create(req, res){
        req.body._user = req.session.user_id
        var newProject = new Project(req.body);
        User.findById(req.session.user_id, (err, currentUser)=> {
            Project.create(newProject, (err, project) =>{
                if (err){
                    return res.json(err);
                }else{
                    currentUser._project.push(newProject);
                    User.findByIdAndUpdate(req.session.user_id, (currentUser), (err, res) => {
                        if(err){
                            return read.json(err);
                        }
                    })
                    return (res.json(project))
                }
            })
        })
    },
    deleteProject(req, res) {
        Project.findByIdAndRemove({ _id: req.params.id }, (err, project) => {
            if (err) {
                return res.json(err);
            }
            return res.json({ result: 'you successfully daleted the project' })
        })
    }
}