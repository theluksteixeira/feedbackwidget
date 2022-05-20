import express from 'express';
import { prisma } from './prisma';
import nodemailer from 'nodemailer';

export const routes = express.Router();

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "09742c0b09bb5d",
        pass: "af09a199c1c955"
    }
});


routes.get('/users', (req, res) => {
    return res.send('hello World');
})

routes.post('/feedbacks', async (req, res) => {

    const { type, comment, screenshot } = req.body;

    const feedback = await prisma.feedback.create({
        data: {
            type,
            comment,
            screenshot
        }
    })

    await transport.sendMail({
        from: 'Equipe Feedget <oi@feedget.com>',
        to: 'Lucas <sobrinho1@gmail.com>',
        subject: 'Novo feedback',
        html: [
            `<div style="font-family: sans-serif; font-size: 16px; color: #111;">`,
            `<p>Tipo do feedback: ${type}</p>`,
            `<p>Comentario: ${comment}</p>`,
            `</div>`,
        ].join('\n')
    })

    return res.status(201).json({ data: feedback })
})