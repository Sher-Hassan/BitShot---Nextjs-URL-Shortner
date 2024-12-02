
import clientPromise from '@/lib/mongodb'
import { redirect } from 'next/navigation'



export default async function Page({ params }) {
    const shorturl = (await params).shorturl
    const client = await clientPromise;
  const db = client.db("bitshots");
  const collection = db.collection("urls");

  const doc = await collection.findOne({ shorturl: shorturl })
  if(doc){
    redirect(doc.url)
  }else{
    redirect(`${NEXT_PUBLIC_HOST}`)
  }
  }