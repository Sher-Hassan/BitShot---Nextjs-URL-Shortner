"use client"
import React from 'react'
import { useState } from 'react'
import Link from 'next/link'

const shorten = () => {
  const [url, seturl] = useState("")
  const [shorturl, setshorturl] = useState("")
  const [generated, setgenerated] = useState(false)


  const handleurl = (e) => {
    seturl(e.target.value)
  }
  const handleShorturl = (e) => {
    setshorturl(e.target.value)
  }
  const generate = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "url": url,
      "shorturl": shorturl
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch("/api/generate", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setgenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`);
        alert(result.message);
        console.log(result)
        seturl('');
        setshorturl('');
      })
      .catch((error) => console.error(error));
  }
  return (
    <div className='mx-auto max-w-lg bg-purple-100 my-16 p-8 rounded-lg flex flex-col gap-4'>
      <h1 className='font-bold text-2xl'>Generate your short URLs</h1>
      <div className='flex flex-col gap-2'>
        <input value={url} className='px-4 py-2 focus:outline-purple-600 rounded-md' type="text" placeholder='Enter Your URL' onChange={handleurl} />
        <input value={shorturl} className='px-4 py-2 focus:outline-purple-600 rounded-md' type="text" placeholder='Enter your preffered short URL Text' onChange={handleShorturl} />
        <button onClick={generate} className='btnn text-white my-3 bg-purple-400 shadow-lg p-3 py-1 rounded-lg font-bold'>Generate</button>
      </div>
      {generated && <>
       <span className='font-bold text-lg'> Your Link</span><code><Link target="_blank" href={generated}>{generated}</Link></code></>}
       
    </div>
  )
}

export default shorten