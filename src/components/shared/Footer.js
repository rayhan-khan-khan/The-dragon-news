import { Box, Button, Container, IconButton, Typography } from '@mui/material';
// icon
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import Link from 'next/link';

const Footer = () => {
    const navItems = [
        {
        route: 'Home',
        pathname: '/'
       },
        {
        route: 'Pages',
        pathname: '/pages'
       },
        {
        route: 'Category',
        pathname: '/category'
       },
        {
        route: 'News',
        pathname: '/news'
       },
        {
        route: 'About',
        pathname: '/about'
       },
        {
        route: 'Contact',
        pathname: '/contact'
       }
      ];
    return (
       <Box className="bg-black px-2 py-10">
        <Container >
        <Box className='w-full text-center'
         sx={{
            "& svg":{
              color: "white"
            }
          }} >
          <IconButton>
              <FacebookIcon/>
            </IconButton>
            <IconButton>
              <TwitterIcon/>
            </IconButton>
            <IconButton>
              <InstagramIcon/>
            </IconButton>
          </Box>
          <Box className="w-full text-center">
            {navItems.map((item) => (
            <Link key={item} href={item.pathname}>
              <Button className="text-white">{item.route}</Button>
            </Link>
            ))}
          </Box>
          <Typography variant='body2' color="gray" textAlign="center">
            @ The Dragon News. Design programming Hero
          </Typography>
        </Container>
       </Box>
    );
};

export default Footer;