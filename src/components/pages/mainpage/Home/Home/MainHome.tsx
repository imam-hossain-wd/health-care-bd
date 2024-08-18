import Navbar from "@/components/pages/shared/Navbar/Navbar";
import Homebanner from "../Homebanner/Homebanner";
import Searchbox from "../Searchbox/Searchbox";




const MainHome = () => {
    return (
        <div>
            <Navbar />
            <Homebanner />
            <Searchbox />
            
        </div>
    );
};

export default MainHome;