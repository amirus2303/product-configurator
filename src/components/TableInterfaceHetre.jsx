import {
    Box,
    FormControl,
    FormControlLabel,
    FormLabel,
    Radio,
    RadioGroup,
    Stack,
    Typography,
} from "@mui/material";
import { useGlobalContext } from "../context";
export const TableInterfaceHetre = () => {
    const { legs, setLegs, legsColor, setLegsColor } = useGlobalContext()
    return (
        <Box
            sx={{
                position: "absolute",
                top: 0,
                left: 0,
            }}
            p={3}
        >
            <Stack spacing={3}>
                <Typography variant="h6">Configuration</Typography>
                <Box className="glass" p={4}>
                    <FormControl>
                        <FormLabel>Type de pied</FormLabel>
                        <RadioGroup
                            value={legs}
                            onChange={(e) => setLegs(parseInt(e.target.value))}
                        >
                            <FormControlLabel value={0} control={<Radio />} label="Standard" />
                            <FormControlLabel value={1} control={<Radio />} label="Solid" />
                            <FormControlLabel value={2} control={<Radio />} label="Design" />
                        </RadioGroup>
                    </FormControl>
                </Box>
                <Box className="glass" p={4}>
                    <FormControl>
                        <FormLabel>Couleur de pied</FormLabel>
                        <RadioGroup
                        value={legsColor}
                        onChange={(e) => setLegsColor(e.target.value)}
                        >
                            <FormControlLabel
                                value={"#777777"}
                                control={<Radio />}
                                label="Black"
                            />
                            <FormControlLabel
                                value={"#ECECEC"}
                                control={<Radio />}
                                label="Chrome"
                            />
                            <FormControlLabel
                                value={"#C9BD71"}
                                control={<Radio />}
                                label="Gold"
                            />
                            <FormControlLabel
                                value={"#C9A3B9"}
                                control={<Radio />}
                                label="Pink Gold"
                            />
                        </RadioGroup>
                    </FormControl>
                </Box>
            </Stack>
        </Box>
    );
};
