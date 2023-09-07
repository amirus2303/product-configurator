import {
    Box,
    ImageList,
    ImageListItem,
    ImageListItemBar,
    ListSubheader,
    Stack,
    Typography,
} from "@mui/material";
import Table1 from '../assets/table1.png'
import Table2 from '../assets/table2.png'
import Sofa from '../assets/sofa.png'

const itemData = [
    {
        img: Table1,
        title: 'Table hetre',
    },
    {
        img: Table2,
        title: 'Table bois rouge',
    },
    {
        img: Sofa,
        title: 'Sofa',
    },
];
import { useGlobalContext } from "../context";
export const ProductSwitcher = () => {
    const { counter, setCounter } = useGlobalContext()
    return (
        <Box
            sx={{
                position: "absolute",
                top: 0,
                right: 0,
            }}
            p={4}
        >
            <Stack spacing={3}>
                <Typography variant="h6">Produits</Typography>
                <Box className="glass" p={4}>
                    <ImageList sx={{ width: 150, height: 480 }} cols={1}>
                        {itemData.map((item, index) => (
                            <ImageListItem key={item.img} >
                                <img
                                    src={`${item.img}?w=150&fit=crop&auto=format`}
                                    srcSet={`${item.img}?w=150&fit=crop&auto=format&dpr=2 2x`}
                                    alt={item.title}
                                    loading="lazy"
                                    onClick ={()=>{setCounter(index);}}
                                />
                                <ImageListItemBar
                                    title={item.title}
                                    position="below"
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                </Box>

            </Stack>
        </Box>
    );
};
