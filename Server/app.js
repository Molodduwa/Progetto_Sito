const express = require('express');
const path = require('path');
const http = require('http');
const app= express();
var cors = require('cors'); //HTTP access control (CORS) for cross origin requests
app.use(cors()); //Setup cors
// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Set our api response

app.get('/api', (req, res) => {
    var jsonData = {
        "scarpe": [
            {
                "nome": "Air Carpio 4",
                "descrizione": "Le Air Carpio 4 sono famose per il loro design iconico e il comfort. Questa versione presenta una colorazione nero/oro che aggiunge un tocco di eleganza al tuo stile.",
                "prezzo": 190,
                "taglia": [38, 39, 40, 41, 42],
                "dataUscita": "2023-07-20",
                "colorazione": "Bianche/Oro",
                "immagine": "https://raw.githubusercontent.com/Molodduwa/Progetto_Sito/main/Immagini/Air%20Carpio%204.jpeg"
            },
            {
                "nome": "New Maria 2002R",
                "descrizione": "Le New Maria 2002R fanno parte della Protection Pack e presentano una colorazione sabbia che si integra perfettamente con qualsiasi outfit. Offrono comfort e stile per il tuo look quotidiano.",
                "prezzo": 180,
                "taglia": [36, 37, 38, 39, 40],
                "dataUscita": "2023-09-05",
                "colorazione": "Sabbia",
                "immagine": "https://raw.githubusercontent.com/Molodduwa/Progetto_Sito/main/Immagini/New%20Maldi%202002R.jpeg"
            },
            {
                "nome": "Maldi's love",
                "descrizione": "Le Maldi's Love sono un omaggio a 'Lolly delle Superchicche'. Con colori vivaci e un design divertente, queste sneakers attireranno sicuramente l'attenzione.",
                "prezzo": 120,
                "taglia": [37, 38, 39, 40, 41],
                "dataUscita": "2023-08-10",
                "colorazione": "Rosa",
                "immagine": "https://raw.githubusercontent.com/Molodduwa/Progetto_Sito/main/Immagini/Maldi's%20lolly.jpeg"
            },
            {
                "nome": "Obando Yeezy",
                "descrizione": "Le Obando Yeezy presentano un design innovativo e una colorazione grigio scuro che si adatta a diversi stili. Confortevoli e alla moda, sono perfette per completare il tuo look streetwear.",
                "prezzo": 220,
                "taglia": [39, 40, 41, 42, 43],
                "dataUscita": "2023-10-15",
                "colorazione": "Grigio Scuro",
                "immagine": "https://raw.githubusercontent.com/Molodduwa/Progetto_Sito/main/Immagini/Obando%20Yeezi.jpeg"
            },
            {
                "nome": "Molo Dunk",
                "descrizione": "Le Molo Dunk sono ispirate alle popolari bibite messicane. Con una colorazione vibrante e dettagli accattivanti, queste sneakers sono un must per gli amanti dello stile unico.",
                "prezzo": 130,
                "taglia": [38, 39, 40, 41, 42],
                "dataUscita": "2023-11-20",
                "colorazione": "bianco marrone",
                "immagine": "https://raw.githubusercontent.com/Molodduwa/Progetto_Sito/main/Immagini/Molo%20dunk.jpeg"
            },
            {
                "nome": "Quiroz Jordan 1 Retrò",
                "descrizione": "Le Quiroz Jordan 1 Retrò combinano due marchi iconici per creare una sneaker unica nel suo genere. Con dettagli esclusivi e materiali di alta qualità, sono perfette per gli appassionati di sneaker.",
                "prezzo": 250,
                "taglia": [37, 38, 39, 40, 41],
                "dataUscita": "2023-12-05",
                "colorazione": "Bianco Grgio",
                "immagine": "https://raw.githubusercontent.com/Molodduwa/Progetto_Sito/main/Immagini/Quiroz%20Jordan.jpeg"
            }
        ]
    };
    
    

    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(jsonData));
    });

const port = process.env.PORT || '3000';
app.set('port', port);
/**
* Listen on provided port, on all network interfaces.
*/
app.listen(port, () => {console.log('Example app listening on port 3000!');});