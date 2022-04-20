let express = require('express');
const path =require('path');
let app = express ();
const publicPath = path.resolve(__dirname,'./public');

app.use(express.static(publicPath));
                    
app.listen(process.env.PORT || 3000, 
	() => console.log("Server is running..."));

    
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname,'./views/home.html'));
})


app.post('/', (req, res) => {
    res.sendFile(path.resolve(__dirname,'./views/home.html'));
})


app.get('/register', (req, res) => {
    res.sendFile(path.resolve(__dirname,'./views/register.html'));
})


app.post('/register', (req, res) => {
    res.sendFile(path.resolve(__dirname,'./views/register.html'));
})



app.get('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname,'./views/login.html'));
})
