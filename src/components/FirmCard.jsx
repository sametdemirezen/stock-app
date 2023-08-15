import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { buttonStyle } from '../styles/globalStyles';
import useStockCall from '../service/useStockCall';
export default function FirmCard({firm, handleOpen, info, setInfo}) {
    const {deleteStockData} = useStockCall()
  return (
    <Card sx={{p:2,
        width: "250px",
        height: "400px",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "greyCard.main"
       }} >
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {firm.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {firm.address}
        </Typography>
      </CardContent>
      <CardMedia
        sx={{ p: 1, objectFit: "contain", height: 140 }}
        image={firm.image}
        title={firm.name}
        component={"img"}
      />
      <Typography variant="body" color="text.secondary">
         {firm.phone}
        </Typography>
      <CardActions>
        <EditOutlinedIcon sx={buttonStyle} onClick={() =>{
            handleOpen()
            setInfo(firm)}}/>
        <HighlightOffIcon sx={buttonStyle} onClick={() => deleteStockData("firms", firm.id)}/>
      </CardActions>
    </Card>
  );
}