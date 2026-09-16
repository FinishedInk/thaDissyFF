import contentful from 'contentful';
import { json, error } from '@sveltejs/kit';

export async function GET() {
    if (!process.env.VITE_CONTENTFUL_CLIENT_ACCESS_TOKEN) {
        throw error(500, "Missing VITE_CONTENTFUL_CLIENT_ACCESS_TOKEN (added dependency in v2.0), go to https://github.com/nmelhado/league-page/blob/master/TRAINING_WHEELS.md#iii-add-a-blog for directions to add it");
    }
    
    if (!process.env.VITE_CONTENTFUL_SPACE) {
        throw error(500, "Missing VITE_CONTENTFUL_SPACE");
    }
    
    const client = contentful.createClient({
        space: process.env.VITE_CONTENTFUL_SPACE,
        accessToken: process.env.VITE_CONTENTFUL_CLIENT_ACCESS_TOKEN
    });
    
    try {
        const data = await client.getEntries({ content_type: 'blog_post' });
        return json(data);
    } catch (e) {
        console.error(e);
        throw error(500, "Problem retrieving blog posts: " + e.message);
    }
}
