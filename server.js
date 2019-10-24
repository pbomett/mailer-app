require('dotenv').config();

const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');
const db = require('./config/database');

const app = express();
const PORT = process.env.PORT || 5000;

db.authenticate()
.then(() => console.log('DB connection successfull'))
.catch(err=>console.log('DB Connection failed'+err));


let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.USER,
        pass: process.env.PASSWORD
    }
});

transporter.use('compile', hbs({
    viewEngine: {
        extName: '.handlebars',
        partialsDir: './views',
        layoutsDir: './views',
        defaultLayout: false,
      },
      viewPath: './views',
      extName: '.handlebars',
}));


let mailOptions = {
    from: 'moblminds1@gmail.com',
    to: 'moblminds1@gmail.com',
    subject: 'Testing and Testing',
    text: 'It works!!',
    template: 'index'
};

// transporter.sendMail(mailOptions)
// .then((res)=>{
//     console.log('Success!!', res)
// })
// .catch((err)=>{
//     console.log('Error', err)
// });

app.get('/', (req, res)=> res.send('INDEX'));
app.use('/learners', require('./routes/learners'));

app.listen(PORT, console.log(`Server started on port ${PORT}`));