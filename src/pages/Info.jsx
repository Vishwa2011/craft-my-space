import { Facebook, Instagram, YouTube, Pinterest, LocalPhone, Email, AttachMoney } from '@mui/icons-material';
import { Box, Typography, IconButton, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Check if screen is small

  const openLoginPage = (url) => {
    window.open(url, "_blank"); // Opens in new tab
  };

  return (
    <Box
      display="flex"
      flexDirection={isMobile ? "column" : "row"}
      justifyContent="space-between"
      alignItems="center"
      px={3}
      py={1}
      borderBottom={1}
      borderColor="grey.300"
      bgcolor="white"
      textAlign={isMobile ? "center" : "left"}
    >
      {/* Social Media Icons with Login Links */}
      <Box display="flex" gap={1} justifyContent={isMobile ? "center" : "flex-start"}>
        <IconButton size="small" onClick={() => openLoginPage("https://www.facebook.com/login")}>
          <Facebook fontSize="small" />
        </IconButton>
        <IconButton size="small" onClick={() => openLoginPage("https://www.pinterest.com/login")}>
          <Pinterest fontSize="small" />
        </IconButton>
        <IconButton size="small" onClick={() => openLoginPage("https://www.instagram.com/accounts/login/")}>
          <Instagram fontSize="small" />
        </IconButton>
        <IconButton size="small" onClick={() => openLoginPage("https://accounts.google.com/signin/v2/identifier?service=youtube")}>
          <YouTube fontSize="small" />
        </IconButton>
      </Box>

      {/* Contact Details */}
      <Box 
        display="flex" 
        flexDirection={isMobile ? "column" : "row"} 
        gap={2} 
        alignItems={isMobile ? "center" : "center"} 
        mt={isMobile ? 1 : 0}
      >
        <Box display="flex" alignItems="center" gap={1}>
          <LocalPhone fontSize="small" />
          <Typography variant="body2">020 8965 5680</Typography>
        </Box>
        <Box display="flex" alignItems="center" gap={1}>
          <Email fontSize="small" />
          <Typography variant="body2">info@bravolondon.co.uk</Typography>
        </Box>
      </Box>

      {/* Finance Info */}
      <Box display="flex" alignItems="center" gap={1} mt={isMobile ? 1 : 0} justifyContent={isMobile ? "center" : "flex-end"}>
        <AttachMoney fontSize="small" />
        <Typography variant="body2" sx={{ fontSize: isMobile ? "12px" : "14px" }}>
          Finance Available From 0% APR on Fitted Bedroom Furniture
        </Typography>
      </Box>
    </Box>
  );
};

export default Header;
