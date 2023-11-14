import React, { useEffect, useState } from 'react'

function Github() {
    const[data, setData]  =  useState([])
    useEffect(() => {
        fetch("https://api.github.com/users/twinkletoes8112")
        .then(response  => response.json())
        .then(data  => {
            console.log(data);
            setData(data)
        })
    }, [])
    
  return (
    <div className='bg-gray-500 m-4 text-center text-white p-4 text-2xl'>Github followers: {data.followers}
    <img src={4} alt="github pfp" />
    </div>
  )
}

export default Github