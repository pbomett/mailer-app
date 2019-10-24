const nodemailer = require('nodemailer');
require('dotenv').config();
const hbs = require('nodemailer-express-handlebars');

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

transporter.sendMail(mailOptions)
.then((res)=>{
    console.log('Success!!', res)
})
.catch((err)=>{
    console.log('Error', err)
});