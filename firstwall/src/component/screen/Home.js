import React from 'react'
import Header from './../layout/Header'


export default function Home() {
    return (
        <div>

            {/* header */}
           <Header height='50vh' text={<h1 className="text-white">Generate more leads with <br/> a professional landing page</h1>} />
           {/* end of header */}


            {/* features section */}
            <div className="container-fluid bg-light">
                <div className="container py-5">
                    <div className="row py-4">

                        <div className="featureBox col d-flex flex-column 
                        justify-content-center align-items-center">
                            <i className="far fa-window-restore text-primary"></i>
                            <h3 className="mt-4">Fully Responsive</h3>
                            <p className="mt-1">This theme will look great on any device, no matter the size!</p>
                        </div>

                        <div className="featureBox col d-flex flex-column 
                        justify-content-center align-items-center">
                            <i className="fab fa-accusoft text-primary"></i>
                            <h3 className="mt-4">Bootstrap 5 Ready</h3>
                            <p className="mt-1">Featuring the latest build of the new Bootstrap 5 framework!</p>
                        </div>

                        <div className="featureBox col d-flex flex-column 
                        justify-content-center align-items-center">
                            <i className="fas fa-terminal text-primary"></i>
                            <h3 className="mt-4">Easy to Use</h3>
                            <p className="mt-1 text-center">Ready to use with your own content, or customize the source files!</p>
                        </div>
                    </div>

                </div>
            </div>
            {/* End of the section */}



            {/* About Section */}
                <div className="container-fluid">
                    {/* row 1  */}
                    <div className="row">
                        <div className="col-6 d-flex d-flex 
                        justify-content-center align-items-center">
                            <div className="textAboutBox d-flex flex-column
                                align-items-start justify-content-center">
                                <h2 className="mb-2">Fully Responsive Design</h2>
                                <p className="text-start">When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!</p>
                            </div>

                        </div>

                        <div className="col-6 imageBox1">
                            {/* background image1 comes form CSS */}
                        </div>
                    </div>

                    {/* row 2  */}
                    <div className="row">

                        
                        <div className="col-6 imageBox2">
                            {/* background image1 comes form CSS */}
                        </div>

                        <div className="col-6 d-flex d-flex 
                        justify-content-center align-items-center">
                            <div className="textAboutBox d-flex flex-column
                                align-items-start justify-content-center">
                                <h2 className="mb-2">Fully Responsive Design</h2>
                                <p className="text-start">When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!</p>
                            </div>

                        </div>

                    </div>


                    {/* Row 3 */}
                    <div className="row">
                        <div className="col-6 d-flex d-flex 
                        justify-content-center align-items-center">
                            <div className="textAboutBox d-flex flex-column
                                align-items-start justify-content-center">
                                <h2 className="mb-2">Fully Responsive Design</h2>
                                <p className="text-start">When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!</p>
                            </div>

                        </div>

                        <div className="col-6 imageBox3">
                            {/* background image1 comes form CSS */}
                        </div>
                    </div>
                </div>
            {/* End of About */}
            {/* Team Section */}
            <div className="container-fluid bg-light ">
                <div  className="row pt-4"><h1 >What People are saying</h1></div>
                
                    <div className="row py-4">

                        <div className="col d-flex flex-column 
                        justify-content-center align-items-center">
                            <div className="TeamImage1"></div>
                            <h3 className="mt-4">Michaelle Boulos</h3>
                            <p className=" fontSize mt-1 ">This theme will look great on any device, no matter the size!</p>
                        </div>

                        <div className=" col d-flex flex-column 
                        justify-content-center align-items-center">
                            <div className="TeamImage2"></div>
                            <h3 className="mt-4">Johannes Mic</h3>
                            <p className="fontSize mt-1">Featuring the latest build of the new Bootstrap 5 framework!</p>
                        </div>

                        <div className=" col d-flex flex-column 
                        justify-content-center align-items-center">
                            <div className="TeamImage3"></div>
                            <h3 className="mt-4">Elie Madi</h3>
                            <p className="fontSize mt-1 text-center">Ready to use with your own content, or customize the source files!</p>
                        </div>
                    </div>

               
            </div>
            {/* End of Team */}

            {/* second header section */}
            < Header height="30vh" text={<h1 className="text-white">Ready to get started? Sign up now!</h1>} />
            {/* end of second header section */}



        </div>
    )
}
