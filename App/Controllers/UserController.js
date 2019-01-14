const express = require('express');
const router = express.Router();
const userService = require('../Services/UserService.js');
//const userModel = require('../Models/User.js');

router.get('/:id', function(req, res){

    // userModel.find(1, (error, result) => {
    //     console.log('error: ' + error);
    //     console.log('result: ' + result);

    //     return res.json(
    //          {
    //              status:200,
    //              body:result
    //          }
    //     );
    // });

    userService.get(req.params.id, (error, result) => {
        
         console.log('error: ' + error);
         console.log('result: ' + result);
         if(error)
             return res.json(
                 {
                     status:500,
                     message: 'Ops... ocorreu um erro ao buscar'
                 }
             );

         if(result.length == 0)
             return res.json(
                 {
                     status:404,
                     message:'Nao encontrado'
                 }
             );

         else
             return res.json(
             {
                 status:200,
                 body:result,
                 message:'Hello world'
             }
         );

     });
 });

 router.post('/user', (req, res) => {
    userService.save(req.body, (error, result) => {

        if(error)
             return res.json(
                 {
                     status:500,
                     message: 'Ops... ocorreu um erro ao criar'
                 }
             );

        var user = userService.get(result.insertId, (error, result) => {
            return res.json(
                {
                    status: 200,
                    body: result
                }
            );
        });

    });
 });

 router.put('/user', (req, res) => {
    userService.get(req.body.id, (error, result) => {

        if(error)
             return res.json(
                 {
                     status:500,
                     message: 'Ops... ocorreu um erro ao buscar'
                 }
             );

        userService.save(req.body, (error, result) => {
            if(error)
                return res.json(
                    {
                        status:500,
                        message: 'Ops... ocorreu um erro ao atualizar'
                    }
                );

            return res.json(
                {
                    status:200
                }
            )
        });
        

    })
 });

 router.delete('/user/:id', (req, res) => {
    userService.delete(req.body.id, (error, result) => {

        if(error)
             return res.json(
                 {
                     status:500,
                     message: 'Ops... ocorreu um erro ao deletar'
                 }
             );

        return res.json(
            {
                status: 200
            }
        )
        
    });
 });

module.exports = router;