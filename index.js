const express = require('express');
const exphbs = require('express-handlebars') ;
const port = 3000;

const app = express()
//const id = 'abc'

app.use(express.static('public'));
app.engine('handlebars',exphbs({defaultLayout:'main'}));
app.set('view engine', 'handlebars');

app.get('/',(req,res)=>{
    res.render('home');
})

app.get('/lang',(req,res)=>{
    res.render('lang',{
        france:'France',
        en:'English',
        es:'Espanol',
        //lang: req.params.lang,
        //id
    });
})

app.get('/france',(req,res)=>{
    res.render('france',{
        pageTitle: "Bonjour",
        title: "ça va ?"
    });
})

app.get('/English',(req,res)=>{
    res.render('English',{
        pageTitle: "Hello",
        title: "what's up man?"
    });
})

app.get('/Espanol',(req,res)=>{
    res.render('Espanol',{
        pageTitle: "Hola",
        title: "Como estas  ?"
    });
})


app.listen(port, ()=>{
    console.log(`start serveur : ${port}`);
})