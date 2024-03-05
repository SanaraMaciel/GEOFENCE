const db = require('../db');

module.exports.addName = (req,res)=>{
    const name = req.body.name 
    const checkName = "SELECT * FROM store WHERE name=?"
    db.query(checkName, name,(err, response)=>{
        if(response.length > 0){
            res.status(422).json({msg:'Este lugar já está adicionado na lista!'})
        }
        else{
            db.query("INSERT INTO store(name) VALUES(?)", name, (err, result)=>{
                if(err){
                    console.log(err);
                }
                if(result){
                    res.status(200).json({msg:'Localização adicionada com sucesso!'})
                }else{
                    res.status(400).json({msg:'Erro ao adicionar localização!'})
                }
            })
        }
    }) 
}