import Container from "./Container";

const OurStory = () => {
  return (
    <div className="py-6 sm:py-8 md:py-10">
      <Container>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl text-center leading-tight font-bold">
          Our Story
        </h1>
        <p className="text-lg lg:text-xl text-center sm:px-6 md:px-10 lg:px-16 pt-5">
          Welcome to <b>SportCraze</b>, your ultimate destination for
          top-quality sporting goods. We pride ourselves on providing athletes
          and sports enthusiasts with the best gear and equipment to enhance
          their performance and enjoyment. Our online store offers a wide range
          of products from leading brands, ensuring that you have access to the
          latest innovations and trends in the world of sports.
        </p>
      </Container>
    </div>
  );
};

export default OurStory;
