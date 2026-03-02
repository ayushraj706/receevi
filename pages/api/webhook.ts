import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    // 1. Meta Verification (Handshake) logic
    if (req.method === 'GET') {
        const mode = req.query['hub.mode'];
        const token = req.query['hub.verify_token'];
        const challenge = req.query['hub.challenge'];

        // Token check karein jo Meta dashboard mein dala hai
        if (mode === 'subscribe' && token === 'basekey_verified_2026') {
            // Meta ko wahi challenge string wapas bhej dena hai
            return res.status(200).send(challenge);
        } else {
            return res.status(403).end();
        }
    }

    // 2. Incoming Messages (WhatsApp data) logic
    if (req.method === 'POST') {
        // Abhi ke liye sirf success bhejte hain
        return res.status(200).send("EVENT_RECEIVED");
    }

    res.status(405).end();
}

// Note: bodyParser true rehne dein jab tak aapko stream processing na karni ho
