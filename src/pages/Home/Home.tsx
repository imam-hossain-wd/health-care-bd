import Homebanner from "@/components/Main/HomeBanner/HomeBanner";
import Specilizations from "@/components/Main/Specilizations/Specilizations";
import Navbar from "@/components/shared/Navbar/Navbar";




const HomePage = () => {
    return (
        <div>
            <Navbar />
            <Homebanner />
            <Specilizations />
            
        </div>
    );
};

export default HomePage;