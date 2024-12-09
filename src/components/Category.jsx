/* eslint-disable react/prop-types */
// Category.js
import { Paper, Typography, Avatar, Box, Card } from "@mui/material";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { useRef } from "react";

// Categories data
const categories = [
  "Tablets",
  "Beauty",
  "Tops",
  "Laptops",
  "Mens-shoes",
  "Womens-bags",
  "Mens-shirts",
  "Smartphones",
  "Groceries",
  "Fragrances",
  "Motorcycle",
  "Vehicle",
  "Sunglasses",
  "Furniture",
  "Home-decoration",
  "Womens-jewellery",
  "Mens-watches",
  "Sports-accessories",
  "Kitchen-accessories",
  "Mobile-accessories",
  "Womens-dresses",
  "Womens-shoes",
  "Womens-watches",
];

const categoryIcons = {
  Tablets: "public/images/tablet-png.png",
  Beauty: "public/images/beauty_kit.png",
  Tops: "public/images/top.png",
  Laptops: "public/images/laptop.png",
  "Mens-shoes": "public/images/mens_shoess.png",
  "Womens-bags": "public/images/womens_bag.png",
  "Mens-shirts": "public/images/mens_shirt.png",
  Smartphones: "public/images/iphone_14.png",
  Groceries: "public/images/grocery.png",
  Fragrances: "public/images/fragrences.png",
  Motorcycle: "public/images/motorcycle.png",
  Vehicle: "public/images/car_vehicle.png",
  Sunglasses: "public/images/sunglasses.png",
  Furniture: "public/images/furnitures.png",
  "Home-decoration": "public/images/home_decoration.png",
  "Womens-jewellery": "public/images/jewellery.png",
  "Mens-watches": "public/images/men_watch.png",
  "Sports-accessories": "public/images/sport_accessories.png",
  "Kitchen-accessories": "public/images/kitche_accessoriess.png",
  "Mobile-accessories": "public/images/mobile_accessories.png",
  "Womens-dresses": "public/images/women_dress.png",
  "Womens-shoes": "public/images/women_shoes.png",
  "Womens-watches": "public/images/women_watch.png",
};

// onChange={(e)=> {
//   setSearchParams((prev)=> {
//     prev.set("skip", 0)
//     prev.delete("q")
//     prev.set("category", e.target.value)
//     return prev
//   })
// }}

const Category = ({ setSearchParams }) => {
  const containerRef = useRef(null);
  const scrollAmount = 200;

  const handleCategoryClick = (category) => {
    console.log(category, "category");
    setSearchParams((prevParams) => {
      const newParams = new URLSearchParams(prevParams);
      newParams.set("category", category);
      newParams.set("skip", 0);
      newParams.delete("q");
      return newParams;
    });
  };

  const handleArrowRightIcon = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += scrollAmount;
    }
  }

  const handleArrowLeftIcon = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft -= scrollAmount;
    }
  }

  return (
    <Card
      ref={containerRef}
      sx={{
        display: "flex",
        overflowX: "scroll",
        scrollbarWidth: "none", // For Firefox
        "&::-webkit-scrollbar": { display: "none" }, // For Chrome, Safari, and Edge
        scrollBehavior: "smooth", // Enables smooth scrolling
      }}
    >

      <Box
        onClick={handleArrowRightIcon}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          marginLeft: "7px",
          position: "absolute",
          right: 0,
          zIndex: 1,
          marginTop: "40px"
        }}>
        <ArrowRightIcon style={{ fontSize: "40px" }} />
      </Box>

      {categories.map((category, index) => (
        <Box item xs={6} sm={3} md={2} key={index}>
          <Box
            sx={{
              display: "flex",
              width: "150px",
              height: "120px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Paper
              onClick={() => handleCategoryClick(category)}
              elevation={0}
              style={{
                textAlign: "center",
                padding: "10px",
                cursor: "pointer",
              }}
            >
              <Avatar
                src={categoryIcons[category] || "/icons/default.png"}
                alt={category}
                sx={{ width: 60, height: 60, margin: "0 auto" }}
              />
              <Typography
                variant="body2"
                style={{ marginTop: "10px", fontWeight: 500 }}
              >
                {category}
              </Typography>
            </Paper>
          </Box>
        </Box>
      ))}

      <Box
        onClick={handleArrowLeftIcon}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
          position: "absolute",
          left: 0,
          zIndex: 1,
          marginTop: "40px"
        }}>
        <ArrowLeftIcon style={{ fontSize: "40px" }} />
      </Box>

    </Card>
  );
};

export default Category;
