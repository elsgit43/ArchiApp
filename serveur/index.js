var express = require('express'); //import de la bibliothèque Express
var app = express(); //instanciation d'une application Express
var compteur=0;
var allMsgs = [{"msg":"Bonjour, bienvenue dans ce chat","date":Date(),"usr":"Serveur"}]

// Pour s'assurer que l'on peut faire des appels AJAX au serveur
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Ici faut faire faire quelque chose à notre app...
// On va mettre les "routes"  == les requêtes HTTP acceptéés par notre application.

app.get("/", function(req, res) {
  res.send("Hello")
})

app.get("/test/*", function(req,res){
    obje={"a": 1, "b" : 2}
    res.json(obje)
})


app.get("/cpt/inc", function(req,res){
    var inc=1
    if(req.query["v"]){
        inc=Number(req.query["v"])
        console.log(inc)
    }
    if(isNaN(inc)){
        res.json({"code":-1})
    }
    else{
        compteur +=inc
        res.json({"code":0})
    }
    console.log("+"+String(inc))
    console.log(compteur)

})

app.get("/cpt/query", function(req,res){
    res.json(compteur)
})

app.get("/msg/get/*", function(req,res){
    var num = req.url.split("/")[3]
    if(num.match(/[0-9]+$/)){
        num=parseInt(num)
        if(num<allMsgs.length){
            res.json({"code":1,"msg":allMsgs[num][msg],"usr":allMsgs[num][usr],"date":allMsgs[num][date]})
        }
        else{
            res.json({"code":0})
        }
    }
    else{
        res.json({"code":0})
    }
})

app.get("/msg/nber",function(req,res){
    res.json(allMsgs.length)
})

app.get("/msg/getAll",function(req,res){
    res.json(allMsgs)
})

app.get("/msg/post/*",function(req,res){
    usr=unescape(req.url.split("/")[3])
    msg=unescape(req.url.split("/")[4])
    date=new (Date)
    allMsgs.push({"msg":msg,"usr":usr,"date":date})
    res.json(allMsgs.length)
})

app.get("/msg/del/*",function(req,res){
    var num = req.url.split("/")[3]
        if(num.match(/[0-9]+$/)){
            num=parseInt(num)
            if(num<allMsgs.length){
                allMsgs.splice(num,1)
                res.json({"code":1,"msg":allMsgs[num]})
            }
            else{
                res.json({"code":0})
            }
        }
        else{
            res.json({"code":0})
        }
})

app.listen(8080); //commence à accepter les requêtes
console.log("App listening on port 8080...");
