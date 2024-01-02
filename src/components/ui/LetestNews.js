// import { Box } from "@mui/material";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea  from '@mui/material/CardActionArea';
// image import
import topNews from "@/assets/top news.png"
import topImage2 from "@/assets/top news 2.png"
import Image from 'next/image';
import  Grid  from '@mui/material/Grid';
import { getAllNews } from '@/utils/getAllNews';



const LetestNews = async () => {
  const { data } = await getAllNews();
  // console.log(data[0]);
    return (
    <Box className="ml-12 mt-12 ">
   <Card>
      <CardActionArea>
        <CardMedia>
            <Image src={data[0].thumbnail_url} width={1000} height={500} alt='logo news'/>
        </CardMedia>

        <CardContent>
            <p className='my-3 
            bg-rose-600 
            w-[100px]
             text-center
              text-white 
              rounded py-1'
            >{data[0].category}</p>
          <Typography gutterBottom  variant="h5" component="div">
           {data[0].title}
          </Typography>
          <Typography gutterBottom className='my-3' >
          By {data[0].author.name} - {data[0].author.published_date}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           {data[0].details.length>200? data[0].details.slice(0,200) + "..." :data[0].details}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card> 
    {/*  */}

    <Grid
      className='mt-4' 
      container
      rowSpacing={1}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        
    {
      data.slice(0,4).map(news => (    <Grid key={news.id} item xs={6}>
        <Card>
      <CardActionArea>
        <CardMedia sx={{
          "& img":{
            width: "100%",
            height: "250px"
          }
        }}>
            <Image src={news.thumbnail_url} width={800} height={300} alt='logo news'/>
        </CardMedia>

        <CardContent>
            <p className='my-3 bg-rose-600 w-[100px] text-center text-white rounded py-1'>{news.category}</p>
          <Typography gutterBottom>
          {news.title}
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
        </Grid>))
    }
      </Grid>
    </Box>
    );
};

export default LetestNews;