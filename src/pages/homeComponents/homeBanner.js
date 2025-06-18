import React, { useContext, useMemo } from "react";
import {ScreenContext} from '../../providers/screenProvider';
import homePic from "../../assets/pictures/vectors/checkout.png"
import "./animateWords.css";


function HomeBanner () {
  const {isTinyScreen, isSmallScreen, isMedScreen} = useContext(ScreenContext);

  const brands = useMemo(() => ["small businesses", "Coffee Shops", "Plumbers", "Bakeries", "Local Retailers", "Hair Salons" ], []);

  const fontSize = isSmallScreen ? ' text-2xl ' : ' text-4xl ' ;

  const containerStyles = isTinyScreen ? ' h-[75vh] flex-col justify-center py-20 ' : isMedScreen ? ' h-[75vh] flex-col justify-center ' : ' h-[90vh] ';
  const pictureDimensions = isMedScreen ? ' w-full h-1/2 ' : ' w-1/2 h-full ';
  const rollerDimensions = isMedScreen ? ' w-full h-1/2 ' : ' w-1/2 h-full ';
  const fillerWidth = isMedScreen ? ' w-0 ' : 'w-1/2';

  return(
    <>
      <div className={containerStyles + " bg-tertiaryBg w-full flex relative px-12 "}>
        {/* <div className={fillerWidth + " h-full flex flex-col justify-center "}></div> */}

        {/* hero text with rolling brands */}
        <div className={rollerDimensions + ""}>
          <div className="h-full w-full max-w-[550px] m-auto text-white text-4xl flex flex-col justify-center">
            <div className={fontSize}>
              Simple solutions for
            </div>
            <div className="h-10 relative overflow-hidden duration-100 ">
              <div className={"w-full absolute left-1/2 -translate-x-1/2 text-center uppercase font-bold text-highlight "} id="word_container">
                {brands.map((brand) => {
                  return <div className={''}>{brand}</div>
                })}
              </div>
            </div>
            <div className={fontSize + " text-right "}>
              to get online, fast.
            </div>
          </div>
        </div>

        <img src={homePic} alt="stove" className={pictureDimensions + " object-contain"}/>
      </div>
    </>
  )
}

export default HomeBanner;