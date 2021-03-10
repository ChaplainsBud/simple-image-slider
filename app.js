import express from 'express';

const app = express();

app.set('view engine', 'pug');

app.use(express.static('public'));

app.get('/', (req, res) => {
   
    res.render('index');
});

let theCount = 0;

app.get('/the-count', (req, res) => {
    console.log('the value is incrementing');
    theCount += 1;
    console.log(`the current value is ${theCount}`);
    // I forget what goes here 
    res.json({count: theCount});
});

app.listen(3000);

