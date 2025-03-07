import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import { Link } from 'react-router-dom'
import { Project } from '../types'

type PortfolioItemProps = {
    project: Project
}

export default function PortfolioItem({ project } : PortfolioItemProps) {
    return (
        <div className='flex flex-col md:flex-row gap-5 bg-white p-4 shadow-xl rounded-xl'>
            <div className='w-full md:w-1/2 lg:w-3/5'>
                <h3 className='text-neutral-700 text-2xl font-bold'>{project.name}</h3>
                <p className='text-xl text-justify'>{project.description}</p>

                <div className='mt-2'>
                    <p className='text-xl font-semibold mb-2'>Link: <span><a className='text-blue-700 hover:text-blue-800 transition-colors' href={project.url}>{project.name}</a></span></p>
                    <Link to={`/portfolio/${project.name}`} className="px-2 py-1 bg-blue-700 hover:bg-blue-800 transition-colors text-white rounded">Saber más</Link>
                </div>
            </div>

            <div className='w-full md:w-1/2 lg:w-2/5'>
                <Swiper navigation={true} modules={[Navigation]}>
                    {project.images.map(i => (
                        <SwiperSlide key={i.imageUrl}><img src={i.imageUrl} alt="Main Faster Depot" /></SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}
