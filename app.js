'use strict'
/* eslint-env node, es6 */
const { engine } = require("express-handlebars");
const path = require ("path");
const express = require ("express");
const { title } = require("process");


const app = express();
const PORT = 6900;

// Deux lignes très importante pour le fontionement de express-handlebars
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');

//Importe le dossier views grace au express-handlebars pour le rendre plus dynamique

//app.set('views', path.join(__dirname,"views")); // cette ligne ne sera plus neccessaire comme express connait deja le dossier ou nous nous trouvons

//Seconde possibillité D'utilise le express static pour charger le dossier views
// app.use(express.static(path.join(__dirname, "public")));

//Importe le dossier public
app.use(express.static(path.join(__dirname, "public")));

// Envois la page racine qui est home
app.get('/',(req,res)  => {
    res.render('home',{
        title: 'home',
        age: 30,
    });
})
// ouvre la seconde page qui est about.
app.get('/about',(req,res)  => {
 res.render('about',{
      title: 'about',
    })      
});
                        // pour gerer les erreurs des pages non trouvés
                // app.get('*',(req, res) => {
                //     res.render('404',{
                //         title: '404'
                //     })
                // })

                // app.use((err, req, res, next) =>{
                //     console.error(err.stack)
                //     res.status(500).send("Erreur, regardez le terminal!!")
                // })


console.log("Patientez dans 3 secondes je demarre le serveur");
setTimeout(() => {
    
app.listen(PORT, () =>{
    console.log(`Le serveur a demarrer au port ${PORT} merci d'avoir patientez`);
});
},3000);


