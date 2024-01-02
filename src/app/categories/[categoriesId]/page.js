import { getCategoryNews } from '@/utils/getCategoryNews';
import  Grid  from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea  from '@mui/material/CardActionArea';
import Image from 'next/image';
import Link from 'next/link';

const DynamicNewsPages = async ({params, searchParams}) => {
      // console.log(searchParams);
    const {data} = await getCategoryNews(searchParams.category);
    // console.log(data);
  

    return (
        <div className='my-5'>
            <h2>Total <span className='font-bold'>{searchParams.category}</span> news: {data.length}</h2>
            <Grid
      className='mt-4' 
      container
      rowSpacing={1}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        
      {
        data.map(news => <Grid key={news.id} item xs={6}>
          <Link href={`/${news.category.toLowerCase()}/${news._id}`}>
              <Card>
          <CardActionArea>
            <CardMedia sx={{
              "& img":{
                width:"100%",
                height: "250px",
              }
            }}>
                <Image src={news.thumbnail_url} width={800} height={100} alt='logo news'/>
            </CardMedia>
    
            <CardContent>
          <p className='my-1 bg-rose-600 w-[100px] text-center text-white rounded py-1'>{news.category}</p>
              <Typography gutterBottom variant='h6'>
              {news.title.length>30? news.title.slice(0,30) + "...": news.title}
              </Typography>
              <Typography gutterBottom className='my-2' >
              By {news.author.name} - {news.published_date}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {news.details.length>200? news.details.slice(0,200) + "...": news.details}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
              </Link>
            </Grid>)
      }
      </Grid>
        </div>
    );
};

export default DynamicNewsPages;