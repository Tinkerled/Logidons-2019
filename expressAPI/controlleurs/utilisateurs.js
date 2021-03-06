var express = require('express');
var router = express.Router();
var db = require('./../db');
var Utilisateur = db.utilisateurs;

router.get("/email/:email", (req, res, next) =>
{
    Utilisateur.findOne({
        where: {
            email: req.params.email
        }
    }).then(user => {
        if(!user)
            res.json(-1)
        else
            res.json(0)
    });
});

router.get("/username/:username", (req, res, next) =>
{
    Utilisateur.findOne({
        where: {
            username: req.params.username
        }
    }).then(user => {
        if(!user)
            res.json(-1)
        else
            res.json(0)
    });
});

router.post("/login", (req, res, next) => {
    Utilisateur.findOne({
        where: {
            username: req.body.username,
            password: req.body.password
        }
    }).then(user => {
        if(!user)
            res.json(-1)
        else
            res.json(user);
    })
});

//GET ALL
router.get("/", (req, res, next) =>
{
    Utilisateur.findAll({include: [{all:true}]}).then(users =>
        {
            res.send(users);
        }).catch(err => {
            res.sendStatus(500);
        });
});


//GET Responsable Dispo pour attribution de don
router.get("/findresponsable", (req, res, next) =>
{
    var employeDispo;
    Utilisateur.findAll(
        {include: [{all:true}],
            where: {
                type: 1
                
        }}).then(users =>
        {
            var i = 0;
            var _donsAttribues;
            users.forEach(user => {
                if(i==0){
                    employeDispo = user.id;
                    _donsAttribues = user.DonsAttribues.length;
                }

                if(user.DonsAttribues.length < _donsAttribues){
                    employeDispo = user.id;
                    _donsAttribues = user.DonsAttribues.length;
                }
                console.log(user.DonsAttribues.length);


                i++;
            });
            res.send(employeDispo + '');
        }).catch(err => {
            res.sendStatus(500);
        });
});

//GET
router.get("/:id", (req, res, next) =>
{
    Utilisateur.findByPk(req.params.id).then(user =>
        {
            res.send(user);
        }).catch(err => {
            res.sendStatus(500);
        });
});

//CREATE
router.post("/", (req, res, next) =>
{
    Utilisateur.create(req.body).then(u => {
        res.send(u);
    }).catch(err => {
        res.sendStatus(500);
    });
});

//UPDATE
router.post("/:id", (req, res, next) =>
{
    Utilisateur.findByPk(req.params.id).then(user =>
        {
            user.update(req.body).then(u => {
                res.send(u);
            }).catch(err => {
                res.sendStatus(500);
            });
        }).catch(err => {
            res.sendStatus(500);
        });
});

//DELETE
router.delete("/:id", (req, res, next) =>
{
    Utilisateur.findByPk(req.params.id).then(user => {
        user.destroy().then(u => {
            res.sendStatus(200);
        }).catch(err => {
            res.sendStatus(500);
        });
    }).catch(err => {
        res.sendStatus(500);
    });
});

module.exports = router;