// SignUpPage.js
import { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Paper,
  Link,
} from "@mui/material";
import { styled } from "@mui/system";

const StyledContainer = styled(Container)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "97vh",
  //   backgroundColor: "#f0f4f8",
  padding: "16px",
  width: "100%",
});

const StyledPaper = styled(Paper)({
  padding: "32px",
  maxWidth: "500px",
  width: "100%",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
  textAlign: "center",
  backgroundColor: "#ffffff",
});

const StyledButton = styled(Button)({
  marginTop: "16px",
  backgroundColor: "#3f51b5",
  color: "#ffffff",
  "&:hover": {
    backgroundColor: "#303f9f",
  },
});

const SignUpPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      console.log("Form submitted:", form);
      // Handle form submission here
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = () => {
    const validationErrors = {};
    if (!form.name) validationErrors.name = "Name is required";
    if (!form.email) validationErrors.email = "Email is required";
    if (!form.password) validationErrors.password = "Password is required";
    if (form.password !== form.confirmPassword)
      validationErrors.confirmPassword = "Passwords do not match";
    return validationErrors;
  };

  return (
    <StyledContainer>
      <StyledPaper elevation={3}>
        <Typography variant="h5" color="primary" gutterBottom>
          Sign Up
        </Typography>
        <Typography variant="body2" color="textSecondary" gutterBottom>
          Create an account to get started
        </Typography>
        <form noValidate onSubmit={handleSubmit}>
          <Box mb={2}>
            <TextField
              fullWidth
              label="Name"
              name="name"
              value={form.name}
              onChange={handleChange}
              error={!!errors.name}
              helperText={errors.name}
              variant="outlined"
            />
          </Box>
          <Box mb={2}>
            <TextField
              fullWidth
              label="Email"
              name="email"
              value={form.email}
              onChange={handleChange}
              error={!!errors.email}
              helperText={errors.email}
              variant="outlined"
              type="email"
            />
          </Box>
          <Box mb={2}>
            <TextField
              fullWidth
              label="Password"
              name="password"
              value={form.password}
              onChange={handleChange}
              error={!!errors.password}
              helperText={errors.password}
              variant="outlined"
              type="password"
            />
          </Box>
          <Box mb={2}>
            <TextField
              fullWidth
              label="Confirm Password"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword}
              variant="outlined"
              type="password"
            />
          </Box>
          <StyledButton type="submit" fullWidth variant="contained">
            Sign Up
          </StyledButton>
          <Box mt={2}>
            <Typography variant="body2">
              Already have an account?{" "}
              <Link href="/sign-in-page" color="primary" underline="none">
                Log in
              </Link>
            </Typography>
          </Box>
        </form>
      </StyledPaper>
    </StyledContainer>
  );
};

export default SignUpPage;
