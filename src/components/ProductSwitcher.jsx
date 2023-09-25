import {
    Box,
    ImageList,
    ImageListItem,
    ImageListItemBar,
    Stack,
    Typography,
} from "@mui/material";
import Cobra1 from '../assets/cobra2.png'
import Table1 from '../assets/chair1.png'
import Table2 from '../assets/sofa3.png'
import Sofa from '../assets/sofa.png'
import Bahut from '../assets/bahut.png'
import Tricot1 from '../assets/tricot1.png'

const itemData = [
    {
        img: Cobra1,
        title: 'Ventilateur',
    },
    {
        img: Table1,
        title: 'Chaise',
    },
    {
        img: Table2,
        title: 'Table bois rouge',
    },
    {
        img: Sofa,
        title: 'Sofa',
    },
    {
        img: Bahut,
        title: 'Bahut',
    },
    {
        img: Tricot1,
        title: 'Teeshirt',
    }
];
import { useGlobalContext } from "../context";
export const ProductSwitcher = () => {
    const { setCounter } = useGlobalContext()
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
                    <ImageList sx={{ width: 150, height: 650 }} cols={1}>
                        {itemData.map((item, index) => (
                            <ImageListItem key={item.img} >
                                <img
                                    src={`${item.img}?w=150&fit=crop&auto=format`}
                                    srcSet={`${item.img}?w=150&fit=crop&auto=format&dpr=2 2x`}
                                    alt={item.title}
                                    loading="lazy"
                                    onClick={() => { setCounter(index); }}
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
