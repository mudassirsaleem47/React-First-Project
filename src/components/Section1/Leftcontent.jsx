
import { ArrowUpRight } from 'lucide-react';

const Leftcontent = () => {
  return (
    <div className='h-full w-[30%] flex flex-col shrink-0 justify-between pt-20'>
        <div className='flex gap-6 flex-col'>
            <h1 className='text-6xl/tight shrink-0 font-bold'>Prospective <span className='bg-gray-100 px-2 rounded-full'>customer</span> segmentation</h1>
        <p className='text-2xl text-gray-700'>Depending on customer satisfaction and access to banking products, potential target audience can be divided into three groups.</p>
        </div>
        <div className='p-0'>
            <ArrowUpRight size={150} strokeWidth={2}/>
        </div>
    </div>
  )
}

export default Leftcontent