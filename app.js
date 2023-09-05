const app = require('express')(); // import express package
const PORT = 8080;

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
