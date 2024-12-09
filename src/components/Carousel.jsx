import { Box } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const MainCarousel = () => {
  const isSmallScreen = useMediaQuery("(max-width:600px)");

  return (
    <Box sx={{ padding: "10px 0px" }}>
      <Carousel
        showArrows={true}
        showThumbs={false}
        infiniteLoop={true}
        useKeyboardArrows={true}
        autoPlay={true}
        stopOnHover={false}
        interval={3000}
        showStatus={false}
      >
        <Box>
          <img
            src="carousel_image/image_1.webp"
            alt="image 1"
            style={{
              width: "100%",
              height: isSmallScreen ? "15vh" : "",
            }}
          />
        </Box>
        <Box>
          <img
            src="carousel_image/image_2.webp"
            alt="image 2"
            style={{
              width: "100%",
              height: isSmallScreen ? "15vh" : "",
            }}
          />
        </Box>
        <Box>
          <img
            src="carousel_image/image_3.webp"
            alt="image 3"
            style={{
              width: "100%",
              height: isSmallScreen ? "15vh" : "",
            }}
          />
        </Box>
        <Box>
          <img
            src="carousel_image/image_4.webp"
            alt="image 4"
            style={{
              width: "100%",
              height: isSmallScreen ? "15vh" : "",
            }}
          />
        </Box>
        <Box>
          <img
            src="carousel_image/image_5.webp"
            alt="image 5"
            style={{
              width: "100%",
              height: isSmallScreen ? "15vh" : "",
            }}
          />
        </Box>
        <Box>
          <img
            src="carousel_image/image_6.webp"
            alt="image 6"
            style={{
              width: "100%",
              height: isSmallScreen ? "15vh" : "",
            }}
          />
        </Box>
        <Box>
          <img
            src="carousel_image/image_7.jpg"
            alt="image 6"
            style={{
              width: "100%",
              height: isSmallScreen ? "15vh" : "",
            }}
          />
        </Box>
      </Carousel>
    </Box>
  );
};

export default MainCarousel;
