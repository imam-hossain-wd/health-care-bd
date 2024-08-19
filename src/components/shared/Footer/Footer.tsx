/* eslint-disable @next/next/no-img-element */  
  
  const Footer = () => {
    return (
      <div className=" mt-10">

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 w-[95%] ml-5 mx-auto">
          <div className="">
            <h4>BD Health Care</h4>
            <p className="mb-2 mt-3">About Us</p>
            <p className="mb-2">Health Blog </p>
            <p className="mb-2"> News & Media</p>
            <p className="mb-2">Contact Us</p>
          </div>
  
          <div>
            <h4>Useful Links</h4>
            <p className="mb-2 mt-3">About US</p>
            <p className="mb-2">Featured Products </p>
            <p className="mb-2"> Offers</p>
            <p className="mb-2">Blog</p>
            <p className="mb-2"> Faq</p>
            <p className="mb-2">Careers</p>
            <p className="mb-2">Contact Uses </p>
          </div>
  
          <div>
            <h4>Top Cities</h4>
            <p className="mb-2 mt-3">Dhaka</p>
            <p className="mb-2">Chattogram</p>
            <p className="mb-2">Comilla</p>
            <p className="mb-2">Chadpur</p>
            <p className="mb-2"> Rajshahi</p>
            <p className="mb-2">Barisal</p>
            <p className="mb-2">Josure</p>
            <p className="mb-2">Kulna</p>
            <p className="mb-2">Rongpur</p>
          </div>
  
          <div>
            <h4 className="">Download App</h4>
  
            <div className="mt-2">
              <img
                className="w-28 h-9 mr-2"
                src="https://i.ibb.co/syKSCFL/play-store.png"
                alt="play store"
              />
              <img
                className="w-28 h-9"
                src="https://i.ibb.co/X4Xr8D1/ios-store.png"
                alt="Apple store"
              />
            </div>
  
            <h4 className="my-3 ">Payment Method</h4>
            <div>
              <img
                className="w-10 h-10 mr-2 rounded"
                src="https://i.ibb.co/zxhNNBn/american-express.png"
                alt="bikash"
              />
              <img
                className="w-10 h-10 mr-2 rounded"
                src="https://i.ibb.co/tMYV3cw/master-card.png"
                alt="american"
              />
              <img
                className="w-10 h-10 mr-2 rounded"
                src="https://i.ibb.co/Th9P4p8/visa-card.png"
                alt="master card"
              />
              <img
                className="w-10 h-10 mr-2 rounded bg-white"
                src="https://i.ibb.co/2SFwtzN/bikash.png"
                alt="visha card"
              />
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Footer;