import { useNavigate } from "react-router-dom"
const BackButton = () => {
    const navigate = useNavigate()

    return (
        <button 
            onClick={() => navigate(-1)}
            className="flex items-center gap-1 text-sm mb-2"
        >
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
            </div>

            <p>Back</p>
        </button>
    )
}

export default BackButton