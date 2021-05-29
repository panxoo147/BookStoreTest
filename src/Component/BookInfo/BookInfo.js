import React,{useContext,useState} from 'react'
import {CartContext} from '../Cart/CartContext'
import useStyle from './BookInfoStyle'
import Grid from '@material-ui/core/Grid';
import {IconButton,Typography,Button,TextField} from '@material-ui/core'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Book from '../BookStore/Book'
import { useHistory} from 'react-router';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import email from '../../pic/email.png';
import facebook from '../../pic/facebook.png';
import googleplus from '../../pic/google-plus.png';
import twitter from '../../pic/twitter.png';

const sideScroll = (
    element,
    speed,
    distance,
    step
  ) => {
    let scrollAmount = 0;
    const slideTimer = setInterval(() => {
      element.scrollLeft += step;
      scrollAmount += Math.abs(step);
      if (scrollAmount >= distance) {
        clearInterval(slideTimer);
      }
    }, speed);
  };
const customData = require('../../Mockdata.json');


const Bookinfo = (props) => {
    const hotcontentWrapper = React.useRef(null);
    const [cart,setCart] = useContext(CartContext);
    const classes = useStyle();
    const [Books,setBooks] = useState([]);
    const fetchData = async()=>{
        // const res = await fetch("http://private-anon-23b051ca76-bookstore.apiary-mock.com/data/books")
        // res.json()
        // .then(res=>{
        //     setBooks(res)
        // })
        setBooks(customData)
    }
    const [trigger,setTrigger] = useState(true)
    React.useEffect(()=>{
        fetchData()
    },[])
    const history = useHistory()
    const [data,setData] = useState(history.location.state.data);

    const addToCart = () => {
        let addData = cart
        if(amount==1){
            setCart(current => [...current,data]);
        }else{
            for(let i=1;i<=amount;i++)
                addData.push(data)
            setAmount(1)
            setCart([...addData]);
        }
    }

    const [amount,setAmount] = useState(1)
    const increment = ()=>{
        setAmount(amount+1)
    }
    const decrement = ()=>{
        if(amount>1)
            setAmount(amount-1)
    }
    const [index,setIndex] = useState(1)
    
    return (
        <div>
            <div className={classes.toolbar}/>
            <main className={classes.content}>
                <div style={{padding:'100px',paddingTop:'0px',paddingBottom:"30px",display:'flex'}}>
                    <div className={classes.Infocontainer}>
                        <div>
                            <img src = {data.image} style={{width:'400px'}}></img>
                        </div>
                        <img src = {data.image} style={{width:'130px',marginRight:'10px'}}></img>
                        <img src = {data.image} style={{width:'130px',opacity:'0.5'}}></img>
                    </div>
                    <div stye={{width:"600px"}}>
                        <Typography className={classes.Bookname} variant="h3">{data.title}</Typography>
                        <div style={{ marginTop:'60px',}}>
                            <Typography variant="h6">ผู้เขียน : {data.author}</Typography>
                            <Typography variant="h6">สำนักพิมพ์ : {"P4NPAN"}</Typography>
                            <Typography variant="h6">หมวดหมู่ : {"วรรณกรรม เรื่องสั้น"}</Typography>
                            <Typography variant="h6">ประเภทสินค้า : {"Books"}</Typography>
                            <Typography variant="h6">บาร์โค้ด : {data.ISBN}</Typography>
                        </div>
                        <div className={classes.BookPrice}>
                            <Typography variant="h6">ราคา </Typography>
                            <Typography variant="h4" className={classes.Bookname}>{"THB"+Math.round((data.price.value*38)-(data.price.value*38)*0.20)}</Typography>
                            <Typography variant="subtitle1" color="textSecondary" style={{textDecoration:'line-through'}}>
                                {"THB"+Math.round(data.price.value*38)}
                            </Typography>
                        </div>
                        <div className={classes.btngroup}>
                            <div className={classes.input}>
                                <div style={{paddingLeft:'30px'}}>
                                    <Typography varient="subtitle1">{amount}</Typography>
                                </div>
                                <div>
                                    <div style={{display:'flex',flexDirection:'column',flexWrap:'wrap'}}>
                                        <IconButton onClick={()=>{increment()}} style={{padding:0}}>
                                            <ExpandLessIcon style={{fontSize:'15px'}}/>
                                        </IconButton>
                                        <IconButton onClick={()=>{decrement()}} style={{padding:0}}>
                                            <ExpandMoreIcon style={{fontSize:'15px'}}/>
                                        </IconButton>
                                    </div>
                                </div>
                            </div>
                            <Button onClick={()=>{addToCart()}} className={classes.btn} variant="contained" color="primary" >ADD</Button>
                            <Button className={classes.btn} variant="contained" style={{backgroundColor:'#FFA336',display:'flex',justifyContent:'space-around',padding:'20px'}}>
                                
                                <FavoriteIcon/>
                                WHISLIST
                            </Button>
                        </div>
                        <div className={classes.social}>
                            <Typography variant="h6" color="textSecondary">แชร์ : </Typography>
                            <IconButton>
                                <img className={classes.icon} src={email}></img>
                            </IconButton>
                            <IconButton>
                                <img className={classes.icon} src={twitter}></img>
                            </IconButton>
                            <IconButton>
                                <img className={classes.icon} src={facebook}></img>
                            </IconButton>
                            <IconButton>
                                <img className={classes.icon} src={googleplus}></img>
                            </IconButton>
                        </div>
                    </div>
                </div>
                <div style={{marginLeft:'100px'}}>
                    <div style={{display:'flex',width:'300px',justifyContent:'space-between',marginBottom:'25px'}}>
                        <div className={index===1?classes.clickAbleUnderLine:''}>
                            <Typography onClick={()=>setIndex(1)} className={index===1?classes.onSelect:classes.clickAbleTxt} variant="h6">เกี่ยวกับสินค้า</Typography>
                        </div>
                        <div className={index===2?classes.clickAbleUnderLine:''}>
                            <Typography onClick={()=>setIndex(2)} className={index===2?classes.onSelect:classes.clickAbleTxt} variant="h6">รายละเอียด</Typography>
                        </div>
                    </div>
                    <div className={classes.line}></div>
                    <div style={{marginBottom:'100px',marginTop:'50px',marginRight:'100px'}}>
                        <Typography variant="h5">summary : </Typography>
                        <Typography variant="h6" c>{data.summary}</Typography>
                    </div>
                </div>
                <div>
                    <div className={classes.headContainer}>
                        <Typography variant="h1" className={classes.headText}>สินค้าที่เกี่ยวข้อง</Typography>
                        <Typography variant="h1" className={classes.allBookText}>สินค้าทั้งหมด</Typography>
                    </div>
                    <div className={classes.viewBook}>
                            <IconButton disableRipple={true} style={{borderRadius:'0px'}} onClick={() => {
                                                        sideScroll(hotcontentWrapper.current, 1, 500, -10);
                                        }} variant="contained" >
                                            <ChevronLeftIcon fontSize="large"/>
                            </IconButton>
                    
                        <Grid ref={hotcontentWrapper} container className={classes.root}>
                            {Books.map((book)=>(
                                <Grid item key={"hot"+book.ISBN}>
                                    <Book data={book}/>
                                </Grid>
                            ))
                            }
                            
                        </Grid>
                        <IconButton disableRipple={true} style={{borderRadius:'0px'}} onClick={() => {
                                                    sideScroll(hotcontentWrapper.current, 1, 500, 10);
                                    }} variant="contained" ><ChevronRightIcon fontSize="large"/></IconButton>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Bookinfo 
