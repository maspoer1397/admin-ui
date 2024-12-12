// import Card from "../components/Elements/Card";
import Card from "../components/Elements/Card/Index";
import MainLayout from "../components/Layout/MainLayout";

const BalancePage = () => {
    return (
        <MainLayout type="balance">
            {/* top content start*/}
            <div className="md:grid md:grid-cols-3 md:gap-x-6">
                <Card title="Balances" />
                <Card title="&nbsp;" />
                <Card 
                    title="&nbsp;"
                    desc= "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
                /> 
                <Card desc= "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "/>
                <Card />
                <Card />
            </div>
            {/* bottom content end*/}


            {/* KODINGAN LAMA  */}

            {/* <div className="mb-4 sm:flex sm:gap-6">
                <div className="mb-4 sm:w-1/3">
                    <Card/>
                </div>
                <div className="mb-4 sm:w-1/3">
                    <Card/>
                </div>
                <div className="mb-4 sm:w-1/3">
                    <Card/>
                </div>
            </div> */}
            {/* top content end*/}
            
            {/* bottom content start*/}
            {/* <div className="sm:flex sm:gap-6">
                <div className="mb-4 sm:w-1/3">
                    <Card/>
                </div>
                <div className="sm:w-2/3">
                    <div className="mb-4">
                        <Card/>
                    </div>
                    <div className="mb-4">
                        <Card/>
                    </div>
                </div>
            </div> */}
            {/* bottom content end*/}
        </MainLayout>
    );
};

export default BalancePage;