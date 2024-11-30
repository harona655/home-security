import nodemailer  from 'nodemailer';
import dotenv from "dotenv";

dotenv.config();

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com', // You can use 'hotmail', 'yahoo', etc. here as well
    port: 465, // Specify the port explicitly
    secure: true, // Use false for port 587
    auth: {
        user: process.env.EMAIL_USER, // Your email address
        pass: process.env.EMAIL_PASS    // Your email password or app password
    },
    debug: true
});

export const sendEmail = async(req, res) => {

    console.log(req.body)
    const {name, subject, email, content} = req.body;

    try {
        const mailOptions = {
            from: email,
            to: process.env.EMAIL_USER,
            name: name,
            subject: subject,
            text: content
        };

        transporter.sendMail(mailOptions, (error, info) => {
            console.log(error)
            if (error) {
                return console.log('Error occurred: ' + error.message);
            }
            console.log('Email sent: ' + info.response);
            res.status(200).josn({"message": "OK", data: info.response})
        });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ success: false, message: 'Email sending failed!', error });
    }
}