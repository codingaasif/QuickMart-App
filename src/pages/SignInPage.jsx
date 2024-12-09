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
  height: "90vh",
  width: "100%",
  //   backgroundColor: "#f0f4f8",
  padding: "16px",
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

const SignInPage = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      console.log("Form submitted:", form);
      // Handle sign-in logic here
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = () => {
    const validationErrors = {};
    if (!form.email) validationErrors.email = "Email is required";
    if (!form.password) validationErrors.password = "Password is required";
    return validationErrors;
  };

  return (
    <StyledContainer>
      <StyledPaper elevation={3}>
        <Typography variant="h5" color="primary" gutterBottom>
          Sign In
        </Typography>
        <Typography variant="body2" color="textSecondary" gutterBottom>
          Welcome! Please sign in to your account.
        </Typography>
        <form noValidate onSubmit={handleSubmit}>
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
          <Typography>
            <Link>Forget Password</Link>
          </Typography>
          <StyledButton type="submit" fullWidth variant="contained">
            Sign In
          </StyledButton>
          <Box mt={2}>
            <Typography variant="body2">
              Don&apos;t have an account?{" "}
              <Link href="/sign-up-page" color="primary" underline="none">
                Sign up
              </Link>
            </Typography>
          </Box>
        </form>
      </StyledPaper>
    </StyledContainer>
  );
};

export default SignInPage;
