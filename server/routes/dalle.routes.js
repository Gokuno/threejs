import express from 'express';
import * as dotenv from 'dotenv';
import OpenAi from 'openai';

dotenv.config();

const router = express.Router();

const openai = new OpenAi({
    apiKey: process.env.OPENAI_API_KEY
});


router.route('/').get((req, res) => {
    res.status(200).json({ message: "Hola desde DALL.E ROUTES" })
})

router.route('/').post(async (req, res) => {
    try {
        const { prompt } =req.body;

        const response = await openai.images.generate({
            prompt,
            n: 1,
            size: '1024x1024',
            response_format: 'b64_json'
          });

    const image = response.data[0].b64_json;

    res.status(200).json({ photo: image });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Se presento un error"})
    }
})

export default router;