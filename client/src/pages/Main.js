import { useEffect, useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import testproduct from "../img/testproduct.jpg"
import axios from 'axios'

function Main()
{
    const [data , setData] = useState([])
    // useEffect(() => {
    //     Aos.init();
    //     axios.get("http://127.0.0.1:8000/product").then(((res)=>setData(res.data.products))) 
    //   }, []);
      
    return(
        <>
            <div className="main-banner">
                <div className="banner-section top-0 z-2 position-absolute">
                    <div className=" main-img"></div>
                    <div className="txt z-1 position-absolute">
                        <h1>Welcome to our coffee shop</h1>
                    </div>
                </div>
                <div className="break"></div>
            </div>
            <div className="categories p-5 collapse  overflow-hidden d-flex align-items-center justify-content-center ">
                <div className="link col-lg-3 d-flex flex-column align-items-center justify-content-center">
                    <box-icon color="#603F26" size='70px' name='coffee'></box-icon>
                    <p>cold coffee</p>
                </div>
                <div className="link col-lg-3 d-flex flex-column align-items-center justify-content-center">
                <box-icon color="#603F26" size='70px' name='coffee-togo'></box-icon>
                    <p>hot coffee</p>
                </div>
                <div className="link col-lg-3 d-flex flex-column align-items-center justify-content-center">
                <box-icon color="#603F26" name='coffee-togo' size='70px' type='solid' ></box-icon>
                    <p className='text'>cup coffee</p>
                </div>
            </div>
            <div className="products">
                <div className="title p-4 text-center">
                    <b className='fs-4'>OUR SPECIAL COFEE</b>
                </div>
                <div className="products-box container">
                    
                    <div className="row gap-5 justify-content-center align-items-md-start">
                        {data.map((i)=>(
                            <>
                                <div data-aos="zoom-in" className="product col-lg-4 col-md-8 col-sm-12">
                                    <img className='' src={i.imageUrl} alt="" />
                                    <div className="description p-1 text-right">
                                        <h3>{i.title}</h3>
                                        <p className='small'>{i.description}</p>
                                    </div>
                                    <div className="details d-flex align-content-center justify-content-center gap-4">
                                        <div className="price">${i.price}</div>
                                        <button>Order Now</button>
                                    </div>
                                </div>
                            </>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
export default Main