import LetestNews from '@/components/ui/LetestNews';
import Sidevar from '@/components/ui/Sidevar';
import Grid from '@mui/material/Grid';

const HomePage = () => {
  return (
    <>
    <Grid container spacing={2}>
    <Grid item xs={8}>
     <LetestNews></LetestNews>
    </Grid>
    <Grid item xs={4}>
     <Sidevar></Sidevar>
    </Grid>
    </Grid>
</>
  );
};

export default HomePage;