import "./Filter.css"
function Filter() {
    return (
        <div className="filter d-flex align-items-center">
            <div className="single-filter">
                <span className="filter-items pointer active">All</span>
            </div>
            <div className="single-filter">
                <span className="filter-items pointer">Music</span>
            </div>
            <div className="single-filter">
                <span className="filter-items pointer">JavaScript</span>
            </div>
            <div className="single-filter">
                <span className="filter-items pointer">Computer Science</span>
            </div>
            <div className="single-filter">
                <span className="filter-items pointer">Motivation</span>
            </div>
            <div className="single-filter">
                <span className="filter-items pointer">Live</span>
            </div>
            <div className="single-filter">
                <span className="filter-items pointer">Mixes</span>
            </div>
            <div className="single-filter">
                <span className="filter-items pointer">News</span>
            </div>
            <div className="single-filter">
                <span className="filter-items pointer">Grammer</span>
            </div>
            <div className="single-filter">
                <span className="filter-items pointer">MERN</span>
            </div>
            <div className="single-filter">
                <span className="filter-items pointer">ReactJS</span>
            </div>
            <div className="single-filter">
                <span className="filter-items pointer">FullStack Development</span>
            </div>
            <div className="single-filter pointer">
                <span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="16"
                        viewBox="0 0 16 16"
                        width="16"
                        focusable="false"
                        style={{ "width": "24", "height": "24" }}>
                        <path d="M4.97 12.65 9.62 8 4.97 3.35l.71-.71L11.03 8l-5.35 5.35-.71-.7z"></path>
                    </svg>
                </span>

            </div>
        </div>
    )
}
export default Filter;