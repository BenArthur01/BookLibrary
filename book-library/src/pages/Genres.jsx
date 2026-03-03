import {
    FaBrain,
    FaLaptopCode,
    FaClock,
    FaChartPie,
    FaChartBar,
    FaRocket,
    FaDollarSign,
    FaAppleAlt,
    FaBullseye,
    FaComments,
    FaGraduationCap,
    FaBookOpen,
    FaSmile,
    FaHeart,
    FaBriefcase,
    FaUserTie,
    FaHeartbeat,
    FaMoneyBillWave,
    FaUsers,
    FaLightbulb,
} from "react-icons/fa";

function Genres() {
    const genres = [
        { name: "Artificial Intelligence", books: 83, icon: <FaBrain /> },
        { name: "Technology", books:123, icon: <FaLaptopCode /> },
        { name: "Business", books: 62, icon: <FaBriefcase /> },
        { name: "Management", books: 93, icon: <FaChartBar /> },
        { name: "Productivity", books: 53, icon: <FaClock /> },
        { name: "Leadership", books: 61, icon: <FaUserTie /> },
        { name: "Health", books: 41, icon: <FaHeartbeat /> },
        { name: "Economics", books:130, icon: <FaChartPie /> },
        { name: "Entrepreneurship", books: 120, icon: <FaRocket /> },
        { name: "Finance", books: 123, icon: <FaDollarSign /> },
        { name: "Society", books: 66, icon: <FaUsers /> },
        { name: "Nutrition", books: 70, icon: <FaAppleAlt /> },
        { name: "Personal Development", books: 120, icon: <FaBullseye /> },
        { name: "Communication", books: 111, icon: <FaComments /> },
        { name: "Education", books: 100, icon: <FaGraduationCap /> },
        { name: "Biography", books: 80, icon: <FaBookOpen /> },
        { name: "Psychology", books: 53, icon: <FaSmile /> },
        { name: "Relationships", books: 100, icon: <FaHeart /> },
        { name: "Money", books: 190, icon: <FaMoneyBillWave /> },
        { name: "Inspirational", books: 29, icon: <FaLightbulb /> },
    ];

    return (
        <div className="p-6 md:p-10 bg-gray-50 min-h-screen">

            {/* Small Page Label */}
            <p className="text-sm text-gray-500 mb-2">Genres</p>

            {/* Big Heading */}
            <h1 className="text-3xl md:text-4xl font-bold mb-10 leading-tight">
                Summaries spanning
                more than 30 genres.
            </h1>

            {/* Grid layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

                {genres.map((genre, index) => (
                    <div 
                        key={index}
                        className="
                        bg-blue-700
                        hover:bg-blue-800
                        transition
                        duration-300
                        text-white
                        rounded-xl
                        p-4
                        flex
                        items-center
                        gap-4
                        shadow-md
                        cursor-pointer
                        "
                    >
                        {/* Icon Circle */}
                        <div className="bg-white text-blue-700 p-3 rounded-full text-lg">
                            {genre.icon}
                        </div>

                        {/* Text Content */}
                        <div>
                            <h3 className="font-semibold text-sm md:text-base">
                                {genre.name}
                            </h3>
                            <p className="text-xs opacity-80">
                                {genre.books} books
                            </p>                 
                        </div>                       
                    </div>
                ))}

            </div>
        </div>
    );
}

export default Genres;