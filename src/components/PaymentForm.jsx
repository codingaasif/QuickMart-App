import { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  InputAdornment,
  IconButton,
  Card,
  CardContent,
  CardActions,
  Box,
  Divider,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from "@mui/material";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import LockIcon from "@mui/icons-material/Lock";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PaymentForm = () => {
  // const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    amount: "",
    upiId: "",
    showCVV: false,
    paymentMethod: "card", // Default to card payment
  });

  const totalPrice = useSelector((state) => state?.quickMart?.totalPrice)
  console.log(totalPrice, "totalPrice")

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const toggleShowCVV = () => {
    setFormData((prevData) => ({ ...prevData, showCVV: !prevData.showCVV }));
  };

  const handlePayment = () => {
    if (formData.paymentMethod === "upi" && formData.upiId) {
      alert(`Payment of $${formData.amount} processed successfully using UPI!`);
      // navigate("/sign-in-page")
    } else if (formData.paymentMethod === "card" && formData.cardNumber) {
      alert(
        `Payment of $${formData.amount} processed successfully using Card!`
      );
    } else {
      alert("Please complete the payment details.");
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      bgcolor="#f5f5f5"
      p={2}
    >
      <Card
        sx={{
          maxWidth: 400,
          width: "100%",
          p: 3,
          borderRadius: 3,
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
          bgcolor: "#ffffff",
        }}
      >
        <CardContent>
          <Typography variant="h4" align="center" gutterBottom color="primary">
            Payment
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            color="textSecondary"
            gutterBottom
          >
            Complete your payment securely
          </Typography>

          <Divider sx={{ my: 2 }} />

          <FormControl component="fieldset" sx={{ mb: 2 }}>
            <FormLabel component="legend">Payment Method</FormLabel>
            <RadioGroup
              row
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleInputChange}
            >
              <FormControlLabel value="card" control={<Radio />} label="Card" />
              <FormControlLabel value="upi" control={<Radio />} label="UPI" />
            </RadioGroup>
          </FormControl>

          {formData.paymentMethod === "card" ? (
            <>
              <TextField
                fullWidth
                label="Name on Card"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                margin="normal"
                variant="outlined"
                sx={{ mb: 2 }}
              />

              <TextField
                fullWidth
                label="Card Number"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleInputChange}
                margin="normal"
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <CreditCardIcon color="action" />
                    </InputAdornment>
                  ),
                }}
                sx={{ mb: 2 }}
              />

              <Box display="flex" gap={2} sx={{ mb: 2 }}>
                <TextField
                  label="Expiry Date (MM/YY)"
                  name="expiryDate"
                  value={formData.expiryDate}
                  onChange={handleInputChange}
                  variant="outlined"
                  fullWidth
                />
                <TextField
                  label="CVV"
                  name="cvv"
                  value={formData.cvv}
                  onChange={handleInputChange}
                  variant="outlined"
                  fullWidth
                  type={formData.showCVV ? "text" : "password"}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockIcon color="action" />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={toggleShowCVV}>
                          {formData.showCVV ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
            </>
          ) : (
            <TextField
              fullWidth
              label="UPI ID"
              name="upiId"
              value={formData.upiId}
              onChange={handleInputChange}
              margin="normal"
              variant="outlined"
              placeholder="example@bank"
              sx={{ mb: 2 }}
            />
          )}

          <TextField
            fullWidth
            label="Amount"
            name="amount"
            value={totalPrice}
            onChange={handleInputChange}
            margin="normal"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
            }}
            sx={{ mb: 2 }}
          />
        </CardContent>

        <CardActions>
          <Button
            variant="contained"
            color="primary"
            onClick={handlePayment}
            sx={{
              width: "100%",
              borderRadius: 3,
              textTransform: "none",
              fontSize: "1rem",
              p: 1.5,
            }}
          >
            Pay Now
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default PaymentForm;
