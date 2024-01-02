import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea  from '@mui/material/CardActionArea';
import Image from 'next/image';
// image import
import sidevar from "@/assets/site news.png"

const Sidevar = () => {
    return (
        <Box className="md:mr-12 mt-12">
        <Card>
          <CardActionArea>
            <CardMedia>
             <Image src={sidevar} width={800} alt='logo news'/>
             </CardMedia>
              <CardContent>
                <p className='my-3 bg-rose-600 w-[100px] text-center text-white rounded py-1'>Technology</p>
            <Typography gutterBottom>
            Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
            </Typography>
            <Typography gutterBottom className='my-3' >
            By Rayhan Khan - Mar 18 2023
            </Typography>
            <Typography variant="body2" color="text.secondary">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout........
            </Typography>
            </CardContent>
        </CardActionArea>
        </Card> 
        </Box>
    );
};

export default Sidevar;