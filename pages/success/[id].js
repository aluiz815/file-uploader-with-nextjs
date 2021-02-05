import React from 'react';
import {FaCheckCircle} from 'react-icons/fa'
import {useRouter} from 'next/router'
import Link from 'next/link'
function Success() {
  const router = useRouter()
  const { query} = router
  const {id} = query
  return (
    <div className="bg-gray-100 w-full h-screen flex justify-center items-center font-poppins ">
    <div className="w-96 h-3/6 bg-white rounded-xl shadow-md">
        <div className="text-center mt-6 flex items-center justify-center flex-col">
          <FaCheckCircle size={50} color="#219653"/>
          <p className="text-gray-500 mt-2">Enviado Com Sucesso</p>
        </div>
        <div  style={{ backgroundImage: `url(/upload/${id})`, backgroundSize:'cover' }} className="w-80 relative mx-auto   mt-5  rounded-xl border-dashed border-blue-200 border-2 h-56 flex-col flex items-center justify-center"/>
        <div className="text-center mt-8 ">
          <Link href="/"><a className="bg-blue-400 p-4 hover:bg-blue-500 transition-all w-full rounded-md text-white">Voltar para Home</a></Link>
        </div>
    </div>
  </div>
  )
}

export default Success;