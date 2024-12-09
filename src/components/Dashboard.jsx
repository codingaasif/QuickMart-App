import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { FaStar } from "react-icons/fa";
import Category from "./Category";
import { Box, Button, CircularProgress, Typography } from "@mui/material";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { allProducts, addToCart } from "../redux/slice";
import NavBar from "./NavBar";
import MainCarousel from "./Carousel";
import { useState } from "react";
import Footer from "./Footer";
import Loader from "./Loader";
import { ErrorOutline } from "@mui/icons-material";

export default function Dashboard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [buyProduct, setBuyProduct] = useState([]);
  console.log(buyProduct, "buyProduct");
  // 1st Method
  const [searchParams, setSearchParams] = useSearchParams({
    limit: 6,
    skip: 0,
  });

  const limit = parseInt(searchParams.get("limit") || 0);
  const skip = parseInt(searchParams.get("skip") || 0);
  const q = searchParams.get("q") || "";
  const category = searchParams.get("category") || "";

  const goods = useSelector((state) => state.quickMart.products);

  // 2nd method
  // const [limit] = useState(8);
  // const [skip, setSkip] = useState(0);

  let url = `https://dummyjson.com/products/search?limit=${limit}&skip=${skip}&q=${q}`;
  if (category) {
    url = `https://dummyjson.com/products/category/${category}?limit=${limit}&skip=${skip}`;
  }

  const fetchFunction = () =>
    fetch(
      // `https://dummyjson.com/products/search?limit=${limit}&skip=${skip}&q=${q}`
      url
    ).then((res) => res.json());

  const {
    data: products,
    isError,
    isPending,
    error,
  } = useQuery({
    queryKey: ["product", limit, skip, q, category],
    queryFn: () => fetchFunction(limit),
    placeholderData: keepPreviousData,
  });


  if (isError) {
    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '91vh',
          backgroundColor: '#f8d7da',
          border: '1px solid #f5c6cb',
          borderRadius: '8px',
          padding: { xs: '16px', sm: '20px' },
          boxShadow: 3,
        }}
      >
        <ErrorOutline sx={{ fontSize: { xs: '36px', sm: '48px' }, color: '#721c24' }} />
        <Typography
          variant="h4"
          sx={{ color: '#721c24', fontWeight: '600', marginTop: '10px', fontSize: { xs: '20px', sm: '33px' } }}
        >
          {error.message}
        </Typography>
        <Typography
          variant="h6"
          sx={{ color: '#721c24', marginTop: '5px', fontSize: { xs: '20px', sm: '24px' } }}
        >
          OR
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: '#721c24', marginTop: '5px', textAlign: 'center', fontSize: { xs: '16px', sm: '18px' } }}
        >
          Please Check Your Internet Connection.
        </Typography>
        <Button
          variant="contained"
          color="error"
          sx={{ marginTop: '20px', fontSize: { xs: '14px', sm: '16px' } }}
          onClick={() => window.location.reload()}
        >
          Refresh
        </Button>
      </Box>
    );
  }

  // // products rating
  const renderStars = (rating) => {
    const totalStars = 5;
    return (
      <div style={{ display: "flex", alignItems: "center" }}>
        {[...Array(totalStars)].map((star, index) => (
          <FaStar
            key={index}
            color={index < Math.round(rating) ? "#ffc107" : "#e4e5e9"}
            size={20}
          />
        ))}
        <span style={{ marginLeft: "8px" }}>{rating}</span>
      </div>
    );
  };

  //handleMoveCount
  const handleMoveCount = (moveCount) => {
    // 1st Method
    setSearchParams((preValue) => {
      preValue.set("skip", Math.max(skip + moveCount, 0));
      return preValue;
    });
    // 2nd method
    // setSkip((prevSkip) => {
    //   return Math.max(prevSkip + moveCount, 0);
    // });
  };

  // handleAddToCart
  const handleAddToCart = (productId) => {
    if (Array.isArray(goods)) {
      const addProduct = goods?.find((item) => item.id === productId);
      if (addProduct) {
        dispatch(addToCart({ ...addProduct, quantity: 1 }))
        console.log(addProduct, "addProduct");
      }
    } else {
      console.log("goods is not Array");
    }
  };

  const handleBuyNow = (productId) => {
    const buyItem = goods?.filter((item) => item.id === productId);
    setBuyProduct(buyItem);
    navigate("/sign-in-page");
    // alert(buyItem.title);
    console.log(buyItem, "buyItem");
  };

  // dispatch products to redux store
  const productList = products?.products;
  dispatch(allProducts(productList));


  return (
    <>
      {isPending ?
        <Loader /> :
        <>
          <NavBar setSearchParams={setSearchParams} />
          <div style={{ marginTop: "80px" }}>
            <Category setSearchParams={setSearchParams} />
            <MainCarousel />
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-evenly",
              }}
            >
              {products?.products?.map((product) => (
                <div
                  key={product.id}
                  style={{
                    padding: "16px",
                    margin: "16px",
                    width: "250px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    borderRadius: "8px",
                    transition: "transform 0.3s, box-shadow 0.3s",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.05)";
                    e.currentTarget.style.boxShadow =
                      "0 8px 16px rgba(0, 0, 0, 0.2)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.boxShadow =
                      "0 4px 8px rgba(0, 0, 0, 0.1)";
                  }}
                >
                  <img
                    src={product?.thumbnail}
                    alt={product?.title}
                    style={{
                      width: "100%",
                      height: "150px",
                      objectFit: "cover",
                      borderRadius: "8px",
                    }}
                  />
                  <h3 style={{ marginTop: "12px", fontSize: "1.2rem" }}>
                    {product?.title}
                  </h3>
                  <p
                    style={{ fontSize: "1rem", color: "#333", marginBottom: "8px" }}
                  >
                    Price: ${product?.price}
                  </p>
                  {renderStars(product?.rating)}
                  <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                    <button
                      style={{
                        marginTop: "16px",
                        padding: "10px 16px",
                        backgroundColor: "#007bff",
                        color: "white",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                        fontSize: "1rem",
                        transition: "background-color 0.3s",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.backgroundColor = "#0056b3")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.backgroundColor = "#007bff")
                      }
                      onClick={() => handleAddToCart(product?.id)}
                    >
                      Add to cart
                    </button>
                    <button
                      style={{
                        marginTop: "16px",
                        padding: "10px 16px",
                        backgroundColor: "#007bff",
                        color: "white",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                        fontSize: "1rem",
                        transition: "background-color 0.3s",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.backgroundColor = "#0056b3")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.backgroundColor = "#007bff")
                      }
                      onClick={() => handleBuyNow(product?.id)}
                    >
                      Buy Now
                    </button>
                  </Box>
                </div>
              ))}
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "20px",
              }}
            >
              <Button
                variant="contained"
                onClick={() => handleMoveCount(-limit)}
                sx={{
                  margin: 1,
                  backgroundColor: "#1976d2",
                  "&:hover": {
                    backgroundColor: "#115293",
                  },
                }}
              >
                Prev
              </Button>
              <Button
                variant="contained"
                // disabled={category.length < 0}
                onClick={() => handleMoveCount(limit)}
                sx={{
                  margin: 1,
                  backgroundColor: "#1976d2",
                  "&:hover": {
                    backgroundColor: "#115293",
                  },
                }}
              >
                Next
              </Button>
            </div>
          </div>
          <Footer />
        </>
      }
    </>
  );
}
