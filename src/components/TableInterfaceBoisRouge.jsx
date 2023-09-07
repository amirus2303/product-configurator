import {
    Box,
    ImageList,
    ImageListItem,
    Stack,
    Typography,
} from "@mui/material";
import Table1 from '../assets/couleur1.png'
import Table2 from '../assets/couleur2.png'
import Table3 from '../assets/couleur3.png'

const itemData = [
    {
        img: Table1,
        title: 'Table hetre',
        texture: 'texture1'
    },
    {
        img: Table2,
        title: 'Table bois rouge',
        texture: 'texture2'
    },
    {
        img: Table3,
        title: 'Table bois rouge',
        texture: 'texture3'
    },
];
import { useGlobalContext } from "../context";
export const TableInterfaceBoisRouge = () => {
    const { setTable2Texture } = useGlobalContext()
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
                                    onClick ={()=>{setTable2Texture(item.texture)}}
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                </Box>

            </Stack>
        </Box>
    );
};
