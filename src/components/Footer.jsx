import React from 'react';
import { Box, Container, Grid, Typography, Link, IconButton, Divider } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
    return (
        <Box sx={{ bgcolor: 'grey.900', color: 'grey.300', pt: 4, pb: 2, mt: 5 }}>
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    {/* About Section */}
                    <Grid item xs={12} sm={6} md={2}>
                        <Typography variant="subtitle1" sx={{ color: 'grey.100', fontWeight: 'bold', mb: 1 }}>ABOUT</Typography>
                        <Link href="#" color="inherit" display="block" mb={0.5}>Contact Us</Link>
                        <Link href="#" color="inherit" display="block" mb={0.5}>About Us</Link>
                        <Link href="#" color="inherit" display="block" mb={0.5}>Careers</Link>
                        <Link href="#" color="inherit" display="block" mb={0.5}>QuickMart Stories</Link>
                        <Link href="#" color="inherit" display="block" mb={0.5}>Press</Link>
                        <Link href="#" color="inherit" display="block">Corporate Information</Link>
                    </Grid>

                    {/* Group Companies */}
                    <Grid item xs={12} sm={6} md={2}>
                        <Typography variant="subtitle1" sx={{ color: 'grey.100', fontWeight: 'bold', mb: 1 }}>GROUP</Typography>
                        <Link href="#" color="inherit" display="block" mb={0.5}>Myntra</Link>
                        <Link href="#" color="inherit" display="block" mb={0.5}>Cleartrip</Link>
                        <Link href="#" color="inherit" display="block">Shopsy</Link>
                    </Grid>

                    {/* Help Section */}
                    <Grid item xs={12} sm={6} md={2}>
                        <Typography variant="subtitle1" sx={{ color: 'grey.100', fontWeight: 'bold', mb: 1 }}>HELP</Typography>
                        <Link href="#" color="inherit" display="block" mb={0.5}>Payments</Link>
                        <Link href="#" color="inherit" display="block" mb={0.5}>Shipping</Link>
                        <Link href="#" color="inherit" display="block" mb={0.5}>Cancellation & Returns</Link>
                        <Link href="#" color="inherit" display="block">FAQ</Link>
                    </Grid>

                    {/* Consumer Policy */}
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="subtitle1" sx={{ color: 'grey.100', fontWeight: 'bold', mb: 1 }}>CONSUMER POLICY</Typography>
                        <Link href="#" color="inherit" display="block" mb={0.5}>Cancellation & Returns</Link>
                        <Link href="#" color="inherit" display="block" mb={0.5}>Terms Of Use</Link>
                        <Link href="#" color="inherit" display="block" mb={0.5}>Security</Link>
                        <Link href="#" color="inherit" display="block" mb={0.5}>Privacy</Link>
                        <Link href="#" color="inherit" display="block" mb={0.5}>Sitemap</Link>
                        <Link href="#" color="inherit" display="block">Grievance Redressal</Link>
                    </Grid>

                    {/* Address & Social Media */}
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="subtitle1" sx={{ color: 'grey.100', fontWeight: 'bold', mb: 1 }}>Mail Us: quickmart@gmail.com</Typography>
                        <Typography variant="body2" color="inherit">
                            QuickMart Internet Private Limited, <br />
                            Buildings Alyssa, Begonia & <br />
                            Clove Embassy Tech Village, <br />
                            Outer Ring Road, Devarabeesanahalli Village, <br />
                            Bengaluru, 560103, <br />
                            Karnataka, India.
                        </Typography>
                        <Box mt={2}>
                            <IconButton color="inherit" href="#">
                                <FacebookIcon />
                            </IconButton>
                            <IconButton color="inherit" href="#">
                                <TwitterIcon />
                            </IconButton>
                            <IconButton color="inherit" href="#">
                                <YouTubeIcon />
                            </IconButton>
                            <IconButton color="inherit" href="https://www.linkedin.com/in/aasifias2810">
                                <LinkedInIcon />
                            </IconButton>
                        </Box>
                    </Grid>
                </Grid>

                <Divider sx={{ bgcolor: 'grey.700', my: 2 }} />

                {/* Bottom Links */}
                <Grid container justifyContent="space-between">
                    <Grid item>
                        <Typography variant="body2" color="inherit">
                            © 2007-2024 quickmart.com
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Box sx={{ display: 'flex', gap: 2 }}>
                            <Link href="#" color="inherit">Become a Seller</Link>
                            <Link href="#" color="inherit">Advertise</Link>
                            <Link href="#" color="inherit">Gift Cards</Link>
                            <Link href="#" color="inherit">Help Center</Link>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Footer;
