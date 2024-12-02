import clientPromise from "@/lib/mongodb"

export async function POST(request) {

  const body = await request.json()
  const client = await clientPromise;
  const db = client.db("bitshots");
  const collection = db.collection("urls");

  const doc = await collection.findOne({ shorturl: body.shorturl })
  if(doc){
    return Response.json({success: false, error:true, message: 'Url already exists!' })
  }

  const result = await collection.insertOne({
    url: body.url,
    shorturl: body.shorturl
  })

    return Response.json({success: true, error:false, message: 'Url generated successfuly' })
  }