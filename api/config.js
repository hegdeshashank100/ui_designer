// Vercel serverless function to provide configuration
export default function handler(req, res) {
    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method !== 'GET') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    // Get API key from environment variable
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
        return res.status(200).json({ 
            apiKey: null,
            message: 'API key not configured in environment variables' 
        });
    }

    // Return the API key (this is still visible to client, but better than hardcoding)
    res.status(200).json({
        apiKey: apiKey,
        message: 'API key loaded from environment'
    });
}