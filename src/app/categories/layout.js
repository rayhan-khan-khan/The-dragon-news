import  Box  from '@mui/material/Box';
import LetestNews from '@/components/ui/LetestNews';
// import Sidevar from '@/components/ui/Sidevar';
import Grid from '@mui/material/Grid';
import  Container  from '@mui/material/Container';
import CategoryList from '@/components/ui/CategoryList/CategoryList';


const CategoriesLayout = ({children}) => {
    return (
        <Box>
            <Container>
            <Grid container spacing={2}>
            <Grid item xs={3}>
            {/* categories */}
            <CategoryList/>
            </Grid>
            <Grid item xs={9}>
            {children}
            </Grid>
            </Grid>
            </Container>
    </Box>
    );
};

export default CategoriesLayout;