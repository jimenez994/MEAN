const mongoose = require('mongoose');
const Project = mongoose.model('Project');
const User = mongoose.model('User');

module.exports = {
    show(req, res) {
        Project.find({}, (err, projects) => {
            if (err){
                return res.json(err);
            }
            return res.json(projects);
        });
    },
    create(req, res){
        req.body._user = req.session.user_id;
        var newProject = new Project(req.body);
        User.findById(req.session.user_id, (err, currentUser)=> {
            if (err){
                return res.json(err);
            }
            Project.create(newProject, (err, project) =>{
                if (err){
                    return res.json(err);
                }else{
                    currentUser._project.push(newProject);
                    User.findByIdAndUpdate(req.session.user_id, (currentUser), (err, res) => {
                        if(err){
                            return res.json(err);
                        }
                    })
                    return res.json(project);
                }
            })
        })
    },
    showOne(req, res){
        Project.findById(req.params.id, (err, project) => {
            if(err){
                return res.json(err);
            }
            return res.json(project);
        })
    },
    update(req, res){
        Project.findByIdAndUpdate(req.params.id, req.body, (err, project) =>{
            if(err) {
                return res.json(err)
            }
            return res.json({ result: 'You successfully updated the project' })
        })
    },
    delete(req, res) {
        Project.findByIdAndRemove(req.params.id , (err, project) => {
            if (err) {
                return res.json(err);
            }
            User.findByIdAndUpdate(req.session.user_id, {$pull:{ _project: req.params.id}},(err, res)=> {
                if (err){
                    return res.json(err);
                }
            })
            return res.json({ result: 'You successfully deleted the project' });
        })
    }
    
}