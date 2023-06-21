import { useEffect, useRef } from "react";
import { useLoadScript } from "@react-google-maps/api";
import { GoogleMap } from "@react-google-maps/api";

const CTA_ = ({}) => {
  const { isLoaded } = useLoadScript({
    // @ts-ignore
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  return (
    <div
      className={`w-full h-[100vh] bg-[#f6ffff] flex flex-col justify-center items-center relative`}
      id={`cta`}
    >
      {isLoaded && <Map_ />}
      <div
        className={`w-[400px] h-[500px] absolute right-[100px] flex flex-col justify-center items-center md:bg-[#F6FFFF] md:backdrop-blur-md z-3 rounded-[4px] p-2`}
      >
        <div className={`w-full h-[200px]`} />
        <div className={`w-full h-[40px] bg-black/5 rounded-[4px] my-1`}>
          <input type="text" className={`w-full h-full bg-transparent p-3 rounded-[4px]`} placeholder={`Initial Location`}/>
        </div>
        <div className={`w-full h-[40px] bg-black/5 rounded-[4px] my-1`}>
        <input type="text" className={`w-full h-full bg-transparent p-3 rounded-[4px]`} placeholder={`Final Destination`}/>
        </div>
        <div
          className={`w-full h-[40px] flex flex-row justify-center items-center my-1`}
        >
          <div className={`w-full h-[40px] bg-black/5 rounded-[4px] mr-1`}><input type="text" className={`w-full h-full bg-transparent p-3 rounded-[4px]`} placeholder={`Name`}/></div>
          <div className={`w-full h-[40px] bg-black/5 rounded-[4px] ml-1`}>
          <input type="text" className={`w-full h-full bg-transparent p-3 rounded-[4px]`} placeholder={`Phone`}/>
          </div>
        </div>
        <div className={`w-full h-[40px] bg-black/5 rounded-[4px] my-1`}>
        <input type="email" className={`w-full h-full bg-transparent p-3 rounded-[4px]`} placeholder={`Email`}/>
        </div>
        <a href={`#cta`}>
        <div
          className={`text-white/80 hover:text-white/100 min-h-2 min-w-2 rounded-[3px] bg-orange-600/80 hover:bg-orange-600 transition-all hover:duration-1000 duration-200 p-2 hover:pl-1 ml-[220px] mt-4 flex flex-row justify-center items-center relative`}
        >
          <div className={`w-[50px] mr-2 h-[2px] cursor-pointer`} />
          <p className={`text-[15px] font-black`}>MOVE NOW</p>
        </div>
      </a>
      </div>
      <div
        className={`w-[160px] h-full absolute left-0 flex flex-col justify-center items-center pointer-events-none`}
      >
        <p
          className={`xl:text-[30px] lg:text-[30px] text-[30px] text-white/20 text-center leading-[.8] tracking-[-0.0em] _Bungee cursor-default -rotate-90 opacity-0 lg:opacity-100`}
        >
          MOVE NOW
        </p>
      </div>
    </div>
  );
};

export default CTA_;

// ==================== MAP

interface Map_Props {}

const Map_ = ({}: Map_Props) => {
  useEffect(() => {}, []);

  return (
    <div
      className={`w-full h-screen flex flex-col justify-center items-center`}
    >
      {/* @ts-ignore */}
      <GoogleMap
        zoom={13}
        center={{
          // @ts-ignore
          lat: 33.448376,
          // @ts-ignore
          lng: -112.074036,
        }}
        mapContainerClassName={`w-full h-full opacity-80 transition-all duration-200`}
        options={{
          disableDefaultUI: true,
          styles: [
            {
              elementType: "geometry",
              stylers: [
                {
                  color: "#242f3e",
                },
              ],
            },
            {
              elementType: "labels.text.fill",
              stylers: [
                {
                  color: "#746855",
                },
              ],
            },
            {
              elementType: "labels.text.stroke",
              stylers: [
                {
                  color: "#242f3e",
                },
              ],
            },
            {
              featureType: "administrative.locality",
              elementType: "labels.text.fill",
              stylers: [
                {
                  color: "#d59563",
                },
              ],
            },
            {
              featureType: "poi",
              elementType: "labels.text.fill",
              stylers: [
                {
                  color: "#d59563",
                },
              ],
            },
            {
              featureType: "poi.park",
              elementType: "geometry",
              stylers: [
                {
                  color: "#263c3f",
                },
              ],
            },
            {
              featureType: "poi.park",
              elementType: "labels.text.fill",
              stylers: [
                {
                  color: "#6b9a76",
                },
              ],
            },
            {
              featureType: "road",
              elementType: "geometry",
              stylers: [
                {
                  color: "#38414e",
                },
              ],
            },
            {
              featureType: "road",
              elementType: "geometry.stroke",
              stylers: [
                {
                  color: "#212a37",
                },
              ],
            },
            {
              featureType: "road",
              elementType: "labels.text.fill",
              stylers: [
                {
                  color: "#9ca5b3",
                },
              ],
            },
            {
              featureType: "road.highway",
              elementType: "geometry",
              stylers: [
                {
                  color: "#746855",
                },
              ],
            },
            {
              featureType: "road.highway",
              elementType: "geometry.stroke",
              stylers: [
                {
                  color: "#1f2835",
                },
              ],
            },
            {
              featureType: "road.highway",
              elementType: "labels.text.fill",
              stylers: [
                {
                  color: "#f3d19c",
                },
              ],
            },
          ],
        }}
      ></GoogleMap>
    </div>
  );
};
