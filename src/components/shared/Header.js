import { Box, Container, Typography } from "@mui/material";
import headingImage from "@/assets/The Dragon News.png";
import Image from "next/image";
import { showCurrentDate } from "../ui/getCurrentDate";

const Header = () => {
    const currentDate = showCurrentDate();
    return (
        <Box className="w-full my-5">
            <Container>
                <Image src={headingImage} width={500} height={500} alt="logo" className="mx-auto"/>
         <Typography variant='body2' color="gray" textAlign="center" className="my-2">
         Journalism Without Fear or Favour
          </Typography>
         <Typography textAlign="center">
        {currentDate}
          </Typography>
            </Container>
        </Box>
    );
};

export default Header;