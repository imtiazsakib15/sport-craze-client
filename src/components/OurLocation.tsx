import GoogleMapReact from "google-map-react";
import { MapPin } from "lucide-react";

const AnyReactComponent = () => (
  <>
    <MapPin className="text-red-600" />
  </>
);

const OurLocation = () => {
  type TLocationProps = {
    center: {
      lat: number;
      lng: number;
    };
    zoom: number;
  };
  const locationProps: TLocationProps = {
    center: {
      lat: 23.744126589423026,
      lng: 90.4139158580148,
    },
    zoom: 15,
  };

  return (
    <div className="w-full h-[60vh] sm:h-screen">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl text-center leading-tight font-bold pb-8">
        Our Location
      </h1>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={locationProps.center}
        defaultZoom={locationProps.zoom}
      >
        <AnyReactComponent />
      </GoogleMapReact>
    </div>
  );
};

export default OurLocation;
