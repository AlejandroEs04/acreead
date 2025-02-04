import PortfolioItem from "../components/PortfolioItem"
import { useApp } from "../hooks/useApp"

const Portfolio = () => {
    const { state } = useApp()

    return (
        <>
            <h1 className="text-3xl font-semibold text-blue-700">Portfolio</h1>

            <div className="flex flex-col gap-4 mt-4">
                {state.projects.length && state.projects.map(p => (
                    <PortfolioItem project={p} key={p.project_id} />
                ))}
            </div>
        </>
    )
}

export default Portfolio