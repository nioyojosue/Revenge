const express = require ("express");
const app = express();
var PORT = 8080;

app.get("/",(req,res) =>{
    res.send("Bravo vous avez reussis en un coup");

});

app.get("/home",(req,res) =>{
    res.send({
        name : "Nioyo",
        age : 22,
        status : true
    });
debugger
});
console.log("Patientez dans 3 secondes je demarre le serveur");
setTimeout(() => {
    
app.listen(PORT, () =>{
    console.log("Le serveur a demarrer merci d'avoir patientez");
});
},3000);

debugger
setTimeout(() =>{
console.log("Apres 3 secondes je suis exécute");
},3000);

// const express = require ("express");
// const app = express();
// const PORT = 66;

// app.get("/", (req, res) =>{{
//     res.send("bonjour boss");
// }});

// app.get("/home", (req, res) =>{{
//     res.send("tu vas bien");
// }});
// console.log("le serveur demmarre dans 3 sec")
// setTimeout(()=>{
// app.listen(PORT,()=>{
//     console.log("Le serveur a demmarrer merci d'avoir patienter");

        
//     },3000);
    
// })