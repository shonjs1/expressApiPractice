const express = require('express'); // import express package
const app = express();
const PORT = 8080;

app.use(express.json()) //middleware

app.listen (
    PORT, 
    () => console.log(`it's alive on http://localhost:${PORT}`)
) //fire up api / listen on port 8080 in this case.

//add an endpoint to the api
// <<  () => >> is the callback function. basically run this function when the route is requested. 
// req (request) is incoming data  || res (response) outgoing data 
app.get('/tshirt', (req, res) => {         
    res.status(200).send({
        tshirt: 'blue',
        size: 'large'
    })
});

app.post('/tshirt/:id', (req,res) => {
    
    const { id } = req.params;
    const { logo } = req.body;

    if (!logo){
        res.status(418).send({message: 'We need a logo!'}) 
    }

    res.send({
        tshirt: `blue with your ${logo} and ID of ${id}`,
    })
})