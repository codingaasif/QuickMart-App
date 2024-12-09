import { Box, Button, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { FaStar } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { addActualPrice, removeFromCard } from "../redux/slice";
import NavBar from "./NavBar";

const ShoppingCart = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // Get cart data from Redux
    const cartData = useSelector((state) => state.quickMart.cartData);
    const [products, setProducts] = useState([]);

    // Sync local state with Redux cart data
    useEffect(() => {
        setProducts(cartData);
    }, [cartData]);


    // Update item quantity in local state
    const handleIncreaseItem = (id) => {
        setProducts((prevProducts) =>
            prevProducts.map((product) =>
                product.id === id
                    ? { ...product, quantity: product.quantity + 1 }
                    : product
            )
        );
    };

    const handleDecreaseItem = (id) => {
        setProducts((prevProducts) =>
            prevProducts.map((product) =>
                product.id === id && product.quantity > 1
                    ? { ...product, quantity: product.quantity - 1 }
                    : product
            )
        );
    };

    const removeItem = (id) => {
        dispatch(removeFromCard(id));
    };

    const handlePlaceOrder = (id) => {
        const product = products?.find((item) => item.id === id);
        if (product) {
            const price = Number(product.price) || 0;
            const quantity = Number(product.quantity) || 0;

            const calculatedPrice = (price * quantity).toFixed(2);
            dispatch(addActualPrice(calculatedPrice));

            navigate("/payment-form");
        } else {
            console.error("Product not found!");
        }
    };

    // Render stars for rating
    const renderStars = (rating) => {
        const totalStars = 5;
        return (
            <div style={{ display: "flex", alignItems: "center" }}>
                {[...Array(totalStars)].map((_, index) => (
                    <FaStar
                        key={index}
                        color={index < Math.round(rating) ? "#ffc107" : "#e4e5e9"}
                        size={20}
                    />
                ))}
                <span style={{ marginLeft: "8px" }}>{rating.toFixed(1)}</span>
            </div>
        );
    };

    return (
        <>
            <NavBar />
            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    marginTop: "65px",
                    gap: "25px",
                    justifyContent: "center",
                }}
            >
                {products?.map((product) => (
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
                            src={product.thumbnail}
                            alt={product.title}
                            style={{
                                width: "100%",
                                height: "150px",
                                objectFit: "cover",
                                borderRadius: "8px",
                            }}
                        />
                        <h3 style={{ marginTop: "12px", fontSize: "1.2rem" }}>
                            {product.title}
                        </h3>
                        <p
                            style={{ fontSize: "1rem", color: "#333", marginBottom: "8px" }}
                        >
                            {/* Price: ${product.price.toFixed(2)} x {product.quantity} = */}
                            Price: ${(product.price * product.quantity).toFixed(2)}
                        </p>
                        {renderStars(product.rating)}
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                marginTop: "12px",
                                gap: 1,
                                padding: "8px",
                                border: "1px solid #ddd",
                                borderRadius: "8px",
                                backgroundColor: "#f9f9f9",
                            }}
                        >
                            <Button
                                onClick={() => handleDecreaseItem(product.id)}
                                variant="contained"
                                size="small"
                                sx={{
                                    minWidth: "30px",
                                    fontWeight: "bold",
                                    padding: "0px 8px",
                                }}
                            >
                                -
                            </Button>
                            <Typography
                                variant="body1"
                                sx={{ minWidth: "30px", textAlign: "center" }}
                            >
                                {product.quantity}
                            </Typography>
                            <Button
                                onClick={() => handleIncreaseItem(product.id)}
                                variant="contained"
                                size="small"
                                sx={{
                                    minWidth: "30px",
                                    fontWeight: "bold",
                                    padding: "0px 8px",
                                }}
                            >
                                +
                            </Button>
                        </Box>
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
                                onClick={() => removeItem(product.id)}
                            >
                                Remove
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
                                onClick={() => handlePlaceOrder(product.id)}
                            >
                                Place Order
                            </button>
                        </Box>
                    </div>
                ))}
            </div>
        </>
    );
};

export default ShoppingCart;





// old code

// import { Box, Button, Typography } from "@mui/material";
// import { useDispatch, useSelector } from "react-redux";
// import { FaStar } from "react-icons/fa";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { removeFromCard } from "../redux/slice";
// import NavBar from "./NavBar";

// const ShoppingCart = () => {
//     const navigate = useNavigate();
//     const dispatch = useDispatch()
//     const [quantity, setQuantity] = useState(0);
//     const cartData = useSelector((state) => state?.quickMart?.cartData)


//     // // products rating
//     const renderStars = (rating) => {
//         const totalStars = 5;
//         return (
//             <div style={{ display: "flex", alignItems: "center" }}>
//                 {[...Array(totalStars)].map((star, index) => (
//                     <FaStar
//                         key={index}
//                         color={index < Math.round(rating) ? "#ffc107" : "#e4e5e9"}
//                         size={20}
//                     />
//                 ))}
//                 <span style={{ marginLeft: "8px" }}>{rating}</span>
//             </div>
//         );
//     };

//     const handleIncreateItem = (id) => {
//         // setQuantity(quantity + 1);
//     }

//     const handleDecreaseItem = (id) => {
//         // setQuantity(quantity - 1);
//      }

//     const removeItem = (id) => {
//         dispatch(removeFromCard(id))
//         // console.log(id);
//     }

//     const handlePlaceOrder = (id) => {
//         console.log(id);
//         navigate("/payment-form")
//     }

//     return (
//         <>
//             <NavBar />
//             <div
//                 style={{
//                     display: "flex",
//                     flexWrap: "wrap",
//                     marginTop: "60px",
//                     gap: "25px",
//                     justifyContent: "center"
//                 }}
//             >
//                 {cartData?.map((product) => (
//                     <div
//                         key={product.id}
//                         style={{
//                             padding: "16px",
//                             margin: "16px",
//                             width: "250px",
//                             boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//                             borderRadius: "8px",
//                             transition: "transform 0.3s, box-shadow 0.3s",
//                             cursor: "pointer",
//                         }}
//                         onMouseEnter={(e) => {
//                             e.currentTarget.style.transform = "scale(1.05)";
//                             e.currentTarget.style.boxShadow =
//                                 "0 8px 16px rgba(0, 0, 0, 0.2)";
//                         }}
//                         onMouseLeave={(e) => {
//                             e.currentTarget.style.transform = "scale(1)";
//                             e.currentTarget.style.boxShadow =
//                                 "0 4px 8px rgba(0, 0, 0, 0.1)";
//                         }}
//                     >
//                         <img
//                             src={product?.thumbnail}
//                             alt={product?.title}
//                             style={{
//                                 width: "100%",
//                                 height: "150px",
//                                 objectFit: "cover",
//                                 borderRadius: "8px",
//                             }}
//                         />
//                         <h3 style={{ marginTop: "12px", fontSize: "1.2rem" }}>
//                             {product?.title}
//                         </h3>
//                         <p
//                             style={{ fontSize: "1rem", color: "#333", marginBottom: "8px" }}
//                         >
//                             Price: ${product?.price}
//                         </p>
//                         {renderStars(product?.rating)}
//                         <Box
//                             sx={{
//                                 display: 'flex',
//                                 justifyContent: 'center',
//                                 alignItems: 'center',
//                                 marginTop: "12px",
//                                 gap: 1,
//                                 padding: '8px',
//                                 border: '1px solid #ddd',
//                                 borderRadius: '8px',
//                                 backgroundColor: '#f9f9f9',
//                             }}
//                         >
//                             <Button
//                                 onClick={() => handleDecreaseItem(product.id)}
//                                 variant="contained"
//                                 size="small"
//                                 sx={{ minWidth: '30px', fontWeight: 'bold', padding: '0px 8px' }}
//                             >
//                                 -
//                             </Button>
//                             <Typography variant="body1" sx={{ minWidth: '30px', textAlign: 'center' }}>
//                                 {quantity}
//                             </Typography>
//                             <Button
//                                 onClick={() => handleIncreateItem(product.id)}
//                                 variant="contained"
//                                 size="small"
//                                 sx={{ minWidth: '30px', fontWeight: 'bold', padding: '0px 8px' }}
//                             >
//                                 +
//                             </Button>
//                         </Box>
//                         <Box sx={{ display: "flex", justifyContent: "space-between" }}>
//                             <button
//                                 style={{
//                                     marginTop: "16px",
//                                     padding: "10px 16px",
//                                     backgroundColor: "#007bff",
//                                     color: "white",
//                                     border: "none",
//                                     borderRadius: "5px",
//                                     cursor: "pointer",
//                                     fontSize: "1rem",
//                                     transition: "background-color 0.3s",
//                                 }}
//                                 onMouseEnter={(e) =>
//                                     (e.currentTarget.style.backgroundColor = "#0056b3")
//                                 }
//                                 onMouseLeave={(e) =>
//                                     (e.currentTarget.style.backgroundColor = "#007bff")
//                                 }
//                                 onClick={() => removeItem(product?.id)}
//                             >
//                                 Remove
//                             </button>
//                             <button
//                                 style={{
//                                     marginTop: "16px",
//                                     padding: "10px 16px",
//                                     backgroundColor: "#007bff",
//                                     color: "white",
//                                     border: "none",
//                                     borderRadius: "5px",
//                                     cursor: "pointer",
//                                     fontSize: "1rem",
//                                     transition: "background-color 0.3s",
//                                 }}
//                                 onMouseEnter={(e) =>
//                                     (e.currentTarget.style.backgroundColor = "#0056b3")
//                                 }
//                                 onMouseLeave={(e) =>
//                                     (e.currentTarget.style.backgroundColor = "#007bff")
//                                 }
//                                 onClick={() => handlePlaceOrder(product?.id)}
//                             >
//                                 Place Order
//                             </button>
//                         </Box>
//                     </div>
//                 ))}
//             </div>
//         </>

//     );
// };

// export default ShoppingCart;
