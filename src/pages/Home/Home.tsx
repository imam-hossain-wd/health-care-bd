import Doctor from "@/components/Main/homepage/Doctor/Doctor";
import Homebanner from "@/components/Main/homepage/HomeBanner/HomeBanner";
import Specilizations from "@/components/Main/homepage/Specilizations/Specilizations";
import Footer from "@/components/shared/Footer/Footer";
import Navbar from "@/components/shared/Navbar/Navbar";




const HomePage = () => {
    return (
        <div>
            <Navbar />
            <Homebanner />
            <Specilizations />
            <Doctor />
            <Footer />
            
        </div>
    );
};

export default HomePage;