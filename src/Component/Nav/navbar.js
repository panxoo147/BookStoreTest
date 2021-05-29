import React,{useContext,useState} from 'react'
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography,Button,TextField } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { ShoppingCart } from '@material-ui/icons';
import SearchIcon from '@material-ui/icons/Search';
import { Link, useLocation } from 'react-router-dom';
import useStyles from './Navstyle';
import {CartContext} from '../Cart/CartContext';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import EditIcon from '@material-ui/icons/Edit';
import CloseIcon from '@material-ui/icons/Close';
import { useHistory } from 'react-router';

const Navbar = () => {
    const [cart,setCart] = useContext(CartContext);
    const classes = useStyles();
    const cleatCart = () => {
        setCart([])
    }
    const calAmount = () =>{
        var sum = 0
        cart.map((data)=>{
            sum += Math.round((data.price.value*38)-(data.price.value*38)*0.20)
        })
        return sum
    }
    const history = useHistory()
    const [show,setShow] = useState(false)
    const [search,setSearch] = useState(false)
    const removeBook = (index) =>{
        var array = [...cart]
        array.splice(index, 1)
        setCart(array)
        console.log(index)
    }
    const goPayMent=()=>{
        history.push({pathname:'/payment'})
    }

    return (
        <>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    {!search?(
                            <>
                            <IconButton disableRipple={true} style={{backgroundColor:'transparent',paddingLeft:0,marginRight:10}} onClick={()=>{history.push('/')}}>
                                <Typography variant="h4" style={{fontWeight:'bold',color:'#4E4E4E'}} className={classes.title} color="inherit">
                                    Book
                                </Typography>
                            </IconButton>
                                <Typography variant="subtitle1" className={classes.title}>
                                    สินค้าใหม่
                                </Typography >
                                <Typography variant="subtitle1" className={classes.title}>
                                    สินค้าขายดี
                                </Typography>
                                <Typography variant="subtitle1" className={classes.title}>
                                    สินค้าลดราคา
                                </Typography>
                                <Typography variant="subtitle1" className={classes.title}>
                                    สินค้าแนะนำ
                                </Typography>
                                <div className={classes.grow}></div>
                            </>
                        ):
                        <>
                            <IconButton disableRipple={true}  style={{backgroundColor:'transparent',paddingLeft:0,marginRight:10}} onClick={()=>{history.push('/')}}>
                                <Typography  variant="h4" style={{fontWeight:'bold',color:'#4E4E4E'}} className={classes.title} color="inherit">
                                    Book
                                </Typography>
                            </IconButton>
                            <div style={{borderRadius:'30px',display:'flex',justifyContent:'space-between',alignItems:'center',backgroundColor:'#E5E5E5',flexGrow:'12'}}>
                                <input className={classes.search} placeholder="ค้นหาสินค้า"></input>
                                <SearchIcon style={{ fontSize: 25,paddingRight:'10px' }}/>
                            </div>
                        </>
                    }
                    <IconButton onClick = {()=>setSearch(!search)} aria-label="Search" color="inherit">
                        {
                            !search?<SearchIcon style={{ fontSize: 25 ,color:'#7A7A7A' }}/>:<CloseIcon style={{ fontSize: 25 ,color:'#7A7A7A' }}/>
                        }
                        
                    </IconButton>
                    <div>
                        <IconButton onClick={()=>{setShow(!show)}} aria-label="Show cart items" color="inherit">
                            <Badge badgeContent={cart.length} color="secondary">
                                <ShoppingCart style={{ fontSize: 30 ,color:'#7A7A7A'}}/>
                            </Badge>
                        </IconButton>
                    </div>
                    <IconButton aria-label="User" color="inherit">
                        <AccountCircleIcon style={{ fontSize: 40 ,color:'#7A7A7A'}}/>
                    </IconButton>
                </Toolbar>
                <div style={{display:show?'block':'none'}}>
                    <div className={classes.rectangle}></div>
                    <div className={classes.whiteRecangle}></div>
                    <div className={classes.cart} >
                        <div className={classes.Topcart}>
                            <Typography variant="h5" style={{zIndex:'16',fontWeight:'bold'}}>ตระกร้าของฉัน</Typography>
                            <Typography variant="subtitle2" color="textSecondary">{cart.length} สินค้าในตระกร้า</Typography>
                            <Button onClick={()=>{
                                              history.push('/cart')
                                            }} variant="outlined" color="primary" className={classes.button}> ดูหรือแก้ไขตระกร้าของฉัน</Button>
                        </div>
                        <div className={classes.middle}>
                        {
                            cart.length>0?
                            cart.map((cart,index)=>{
                                return (
                                            <div key={index} className={classes.cartBox}>
                                                <Typography variant="subtitle1">1 x</Typography>
                                                <img src={cart.image} className={classes.image}></img>
                                                <Typography variant="subtitle1">{cart.title}</Typography>
                                                <div style={{display:'flex',flexDirection:'column'}}>
                                                    <IconButton onClick={()=>removeBook(index)} style={{width:'30px',height:'30px'}}>
                                                        <HighlightOffIcon fontSize="small"/>
                                                    </IconButton>
                                                    <IconButton className={classes.editBtnContainer}>
                                                        <div className={classes.editBtn}> 
                                                            <EditIcon style={{fontSize:'10px'}}/>
                                                        </div>
                                                       
                                                    </IconButton>
                                                </div>
                                           </div>
                                        )
                            })
                            :
                            <div className={classes.emptyBox}>
                                <Typography variant="h6" color="textSecondary">ไม่มีสินค้าในตระกร้า</Typography>
                            </div> 
                        }
                        </div>
                        <div style={{display:'flex',flexDirection:'column',backgroundColor:'white',padding:'20px'}}>
                            <div className={classes.bottom}>
                                <Typography style={{marginBottom:'3px'}} variant="subtitle2" color="textSecondary">ยอดรวม :</Typography>
                                <Typography variant="h6" >THB{calAmount().toFixed(2)}</Typography>
                            </div>
                            <div style={{display:'flex',justifyContent:'center'}}>
                                <Button onClick={()=>{goPayMent()}} variant="contained" color="primary" className={classes.button}> ไปชำระเงิน </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </AppBar>
        </>
    )
}

export default Navbar
