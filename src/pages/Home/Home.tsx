'use client'
import Doctor from "@/components/Main/homepage/Doctor/Doctor";
import Homebanner from "@/components/Main/homepage/HomeBanner/HomeBanner";
import Specilizations from "@/components/Main/homepage/Specilizations/Specilizations";





const HomePage = () => {

    // const {data, isLoading} = useGetUsersQuery(undefined);
    // const {data, isLoading} = useGetdoctorsQuery(undefined);
    // console.log(data, 'user data');

    // if(isLoading){
    //     return <Loader />
    // }

    
    return (
        <div>
            <Homebanner />
            <Specilizations />
            <Doctor />           
        </div>
    );
};

export default HomePage;