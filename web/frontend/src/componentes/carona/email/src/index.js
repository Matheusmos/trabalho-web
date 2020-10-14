const nodemailer = require("nodemailer")

const smtp_config = require("./smtp")

let transporter = nodemailer.createTransport({
    host: smtp_config.host,
    port: smtp_config.port,
    secure: false,
    auth: {
        user: smtp_config.user,
        pass: smtp_config.pass
    },
    tls:{
        rejectUnauthorized: false
    }
});

transporter.sendMail({
    from: "Usuário <motoristadobarulho14@gmail.com>",
    to: "motoristadobarulho14@gmail.com",
    subject: "Olá, um novo passageiro surgiu, check o caronaWeb",
    text: "Não deixe os usuários esperando",
    html: "Link para o sistema <a href='http://localhost:3000/'>aqui</a>"
}).then(message => {
    console.log(message);
}).catch(err =>{
    console.log(err);
})