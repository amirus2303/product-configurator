import {
    Box,
    ImageList,
    ImageListItem,
    Stack,
    Typography,
} from "@mui/material";
import Table1 from '../assets/cobra1-couleur1.png'
import Table2 from '../assets/cobra1-couleur2.png'


const itemData = [
    {
        img: Table1,
        title: 'Gris',
        texture: 'texture1'
    },
    {
        img: Table2,
        title: 'Bleu',
        texture: 'texture2'
    },
];
import { useGlobalContext } from "../context";
export const Cobra1Interface = () => {
    const { setCobra1Texture } = useGlobalContext()
    return (
        <Box
            sx={{
                position: "absolute",
                top: 0,
                left: 0,
            }}
            p={4}
        >
            <Stack spacing={3}>
                <Typography variant="h6">Configuration</Typography>
                <Box className="glass" p={2}>
                    <ImageList sx={{ width: 100, height: 420 }} cols={1}>
                        {itemData.map((item) => (
                            <ImageListItem key={item.img}>
                                <img
                                    src={`${item.img}?w=100&fit=crop&auto=format`}
                                    srcSet={`${item.img}?w=100&fit=crop&auto=format&dpr=2 2x`}
                                    alt={item.title}
                                    loading="lazy"
                                    onClick={() => { setCobra1Texture(item.texture) }}
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                </Box>

            </Stack>
        </Box>
    );
};
