import React from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';

const Loader = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '92vh',
                // width: '100%',
                background: 'radial-gradient(circle at center, #1E3A8A, #2563EB, #3B82F6)',
                color: '#fff',
                textAlign: 'center',
                overflow: 'hidden',
                position: 'relative',
                padding: 2,
            }}
        >
            {/* Glowing Circle */}
            <Box
                sx={{
                    position: 'relative',
                    width: { xs: 80, sm: 100 },  // Responsive width
                    height: { xs: 80, sm: 100 }, // Responsive height
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <CircularProgress
                    size={60}
                    thickness={5}
                    sx={{
                        color: '#60A5FA',
                        zIndex: 1,
                    }}
                />
                <Box
                    sx={{
                        position: 'absolute',
                        width: { xs: 100, sm: 120 }, // Responsive width
                        height: { xs: 100, sm: 120 }, // Responsive height
                        background: 'rgba(96, 165, 250, 0.3)',
                        borderRadius: '50%',
                        animation: 'pulse 2s infinite ease-in-out',
                    }}
                />
            </Box>

            {/* Loading Text */}
            <Typography
                variant="h5"
                sx={{
                    marginTop: 3,
                    fontWeight: 600,
                    letterSpacing: '2px',
                    textTransform: 'uppercase',
                    fontSize: { xs: '1rem', sm: '1.5rem' }, // Responsive font size
                }}
            >
                Loading, please wait...
            </Typography>

            {/* Subtitle */}
            <Typography
                variant="body1"
                sx={{
                    marginTop: 1,
                    opacity: 0.8,
                    fontSize: { xs: '12px', sm: '16px' }, // Responsive font size
                }}
            >
                Bringing awesome content to you!
            </Typography>

            {/* Star Effects */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    pointerEvents: 'none',
                }}
            >
                {[...Array(15)].map((_, index) => (
                    <Box
                        key={index}
                        sx={{
                            position: 'absolute',
                            width: '6px',
                            height: '6px',
                            background: 'linear-gradient(45deg, #fff, #60A5FA)',
                            borderRadius: '50%',
                            animation: `twinkle ${Math.random() * 2 + 1}s infinite ease-in-out`,
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random()}s`,
                            opacity: 0.8,
                        }}
                    />
                ))}
            </Box>

            {/* Floating Particles */}
            {[...Array(10)].map((_, index) => (
                <Box
                    key={index}
                    sx={{
                        position: 'absolute',
                        width: '10px',
                        height: '10px',
                        background: '#60A5FA',
                        borderRadius: '50%',
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        animation: `float ${Math.random() * 5 + 3}s infinite ease-in-out`,
                        animationDelay: `${Math.random()}s`,
                        transform: 'translateY(0)',
                    }}
                />
            ))}

            {/* Keyframes for animations */}
            <style>
                {`
                    @keyframes pulse {
                        0%, 100% {
                            transform: scale(1);
                            opacity: 0.5;
                        }
                        50% {
                            transform: scale(1.4);
                            opacity: 1;
                        }
                    }

                    @keyframes twinkle {
                        0%, 100% {
                            opacity: 0.2;
                        }
                        50% {
                            opacity: 1;
                        }
                    }

                    @keyframes float {
                        0% {
                            transform: translateY(0);
                        }
                        50% {
                            transform: translateY(-20px);
                        }
                        100% {
                            transform: translateY(0);
                        }
                    }
                `}
            </style>
        </Box>
    );
};

export default Loader;
