import Container from "./Container";

const MissionAndVision = () => {
  return (
    <div className="bg-mission-and-vision bg-cover bg-fixed text-white">
      <div className="bg-[#1a2a64] bg-opacity-80 size-full">
        <Container>
          <div className="flex flex-col md:flex-row gap-14 text-center py-16 sm:py-18 lg:py-20">
            <div className="pb-8">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
                Our Mission
              </h2>
              <p className="pt-4 text-lg">
                Our mission is to inspire and empower athletes of all levels by
                offering a diverse selection of high-quality sporting goods. We
                are dedicated to promoting a healthy and active lifestyle
                through exceptional customer service and expert advice.
              </p>
            </div>
            <div className="pb-8">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
                Our Vision
              </h2>
              <p className="pt-4 text-lg">
                Our vision is to become the premier online sporting goods
                retailer, known for our commitment to quality, innovation, and
                customer satisfaction. We strive to create a community where
                every athlete can find the tools they need to succeed and enjoy
                their favorite sports.
              </p>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default MissionAndVision;
