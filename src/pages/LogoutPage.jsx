import React from "react";
import { useForm } from "react-hook-form";
import { Box, Button, Typography, Paper, FormControl } from "@mui/material";
import { useNavigate } from "react-router-dom";

const LogoutPage = () => {
    const navigate = useNavigate()
    const { handleSubmit } = useForm();

    const onSubmit = () => {
        // Handle logout logic here
        console.log("User has logged out");
        alert("You have been logged out successfully!");
        navigate("/sign-in-page")
    };

    const handleCancel = () => {
        alert("Logout cancelled.");
    };

    return (
        <Box
            sx={{
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                bgcolor: "background.default",
                px: 2,
            }}
        >
            <Paper
                elevation={3}
                sx={{
                    padding: 4,
                    maxWidth: 400,
                    width: "100%",
                    textAlign: "center",
                }}
            >
                <Typography variant="h5" gutterBottom>
                    Confirm Logout
                </Typography>
                <Typography variant="body1" color="text.secondary" mb={3}>
                    Are you sure you want to log out?
                </Typography>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <FormControl fullWidth>
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            size="large"
                            sx={{ mb: 2 }}
                        >
                            Yes, Log Out
                        </Button>
                    </FormControl>
                    <FormControl fullWidth>
                        <Button
                            type="button"
                            variant="outlined"
                            color="secondary"
                            size="large"
                            onClick={handleCancel}
                        >
                            Cancel
                        </Button>
                    </FormControl>
                </form>
            </Paper>
        </Box>
    );
};

export default LogoutPage;
