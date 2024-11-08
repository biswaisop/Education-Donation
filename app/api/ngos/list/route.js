import dbConnect from '../../../../utils/dbConnect';
import NGORequest from '../../../../models/NGORequest';

export async function GET() {
    await dbConnect();
    const requests = await NGORequest.find({});
    return new Response(JSON.stringify({ success: true, data: requests }), { status: 200 });
}
