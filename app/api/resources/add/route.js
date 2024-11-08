import dbConnect from '../../../../utils/dbConnect';
import Resource from '../../../../models/Resource';

export async function POST(request) {
    await dbConnect();
    const data = await request.json();
    const { title, type, subject, grade, link, description } = data;
    const newResource = new Resource({ title, type, subject, grade, link, description });
    await newResource.save();
    return new Response(JSON.stringify({ success: true, data: newResource }), { status: 201 });
}
