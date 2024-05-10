var connection = require('./config/config.bd');
const express=require('express');
const bodyParser = require('body-parser');


const PORT = 8012;
const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.use(bodyParser.json());
app.set("view engine", "hbs");


app.get('/', (req, res)=> {
    res.status(200).json("Сервер працює123");
})


app.listen(PORT, () => console.log("SERVER START!!!"));

const departmentRoutes = require ('./router/department.routers'); 
app.use('/api/department', departmentRoutes);



