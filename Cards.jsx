import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

export  function ImgMediaCard({images,title,dec,id}) {
    const navigate = useNavigate()
  return (

    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={images}
        
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
   {dec}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={()=>{
            navigate(`/productDetails/${id}`)
        }} size="small">See More</Button>
      </CardActions>
    </Card>
  );
}