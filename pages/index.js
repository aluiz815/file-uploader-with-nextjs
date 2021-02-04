import {useState,useMemo} from 'react';
import api from '../services/api';
import {useRouter} from 'next/router'
export default function Home() {
  const router = useRouter()
  const [image, setImage] = useState(null);
  const preview = useMemo(() => {
    return image ? URL.createObjectURL(image) : null;
  }, [image]);
  
  async function handleUpload() {
    try {
      const data = new FormData()
      data.append("file",image)
      const response = await api.post('uploader',data)
      router.push(`/success/${response.data.name.filename}`)
    } catch (error) {
      console.log(error.message)
    }
  }

  if(image !== null) {
    handleUpload()
  }

  return (
    <div className="bg-gray-100 w-full h-screen flex justify-center items-center font-poppins ">
      <div className="w-96 h-3/6 bg-white rounded-xl shadow-md">
          <div className="text-center mt-6">
            <h1 className="text-gray-900 font-bold">Envie Sua Foto</h1>
            <p className="text-gray-500 mt-2">Nos formatos .jpeg .png</p>
          </div>
          <div  style={{ backgroundImage: `url(${preview})`,backgroundSize:'cover' }} className="w-80 relative mx-auto   mt-5  rounded-xl border-dashed hover:bg-blue-100 transition-all border-blue-200 border-2 h-56 flex-col flex items-center justify-center">
          <div className={`flex flex-col h-full ${preview ? 'opacity-0' : ''} bg-bg-Image bg-no-repeat bg-center`}>
            <input
                  type="file"
                  className="opacity-0 h-screen cursor-pointer"
                  id="file"
                  required
                  onChange={e => setImage(e.target.files[0])}
                />
          <label htmlFor="file" className="text-gray-300 cursor-pointer left-8 absolute bottom-6">Drag And Drop your image here</label>
          </div>
          </div>
          <div className="text-center">
            <p className="mt-4 mb-4">Or</p>
            <input type="file" onChange={(e)=>setImage(e.target.files[0])} id="file2" className="hidden"/>
            <label htmlFor="file2" className="bg-blue-500 cursor-pointer px-4 p-2 hover:bg-blue-700 transition-all text-white rounded-lg">Choose A File</label>
          </div>
      </div>
    </div>
  )
}
