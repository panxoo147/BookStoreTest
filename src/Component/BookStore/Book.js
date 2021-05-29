import React,{useState,useContext} from 'react'
import {Card,CardMedia,CardContent,CardActions,Typography,IconButton} from '@material-ui/core'
import AddShoppingCart from '@material-ui/icons/AddShoppingCart'
import useStyles from './Bookstyle'
import {CartContext} from '../Cart/CartContext'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box';
import Rating from '@material-ui/lab/Rating';
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';
import { useHistory } from 'react-router';

const Book = ({data}) => {
    const [cart,setCart] = useContext(CartContext);
    const [show,setShow] = useState(false);
    const classes = useStyles();
    const addToCart = () => {
        setCart(current => [...current,data]);
    }
    const showAddToCartBtn = () =>{
        setShow(true)
    }
    const hideAddToCartBtn = () =>{
        setShow(false)
    }
    const history = useHistory()
    function info() {
        history.push({pathname:"/bookinfo",state:{data:data}});
    }
    return (
        <div>
            <div id="div1" 
            onClick={
                (e)=>{if(!((e.target.id).includes('Btn'))){
                    info()
                }}
            }
             onMouseLeave={()=>{hideAddToCartBtn()}} onMouseEnter={()=>showAddToCartBtn()} className={classes.root}>
                <div className={classes.status}>
                    <CheckCircleRoundedIcon style={{fontSize:'15px'}}/>
                    <p style={{fontSize:'12px'}}>มีสินค้า</p>
                </div>
                <div className={classes.picContainer}>
                    <img src={data.image} className={classes.media}/>
                </div>
                {
                    show?
                    <CardActions id="divBtn1" disableSpacing className={classes.cardActions}>
                            <Button id="divBtn2"  onClick={()=>addToCart()} variant="outlined" color="primary">
                                <div id="divBtn3" style={{display:'flex',justifyContent:'space-between',alignContent:'center'}}>
                                    <AddShoppingCart id="divBtn4"/>
                                    {"Add To Cart"}
                                </div>
                            
                            </Button>
                    </CardActions>
                    :""
                }
                <Box component="fieldset" mb={-2} borderColor="transparent">
                    <div id="4" className={classes.ratingTxt}>
                        <div>
                            <Rating name="read-only" value={5} readOnly/>
                        </div>
                        <Typography variant="subtitle2" color="textSecondary" component="legend">Reviews({5})</Typography>
                    </div>
                </Box>
                <CardContent>
                    <div className={classes.cardContent}>
                        <Typography variant="subtitle2" style={{fontWeight: 'bold'}} gutterBottom>
                            {data.title}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary" style={{textDecoration:'line-through'}}>
                            {"THB"+(Math.round(data.price.value*38)).toFixed(2)}
                        </Typography>
                        <Typography variant="h6" style={{fontWeight: 'bold'}}>
                            {"THB"+(Math.round((data.price.value*38)-(data.price.value*38)*0.20)).toFixed(2)}
                        </Typography>
                    </div>
                   
                    
                </CardContent>
                
                
            </div>
        </div>
    )
}

export default Book
