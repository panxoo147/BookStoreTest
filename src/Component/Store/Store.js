import React,{useState,useContext} from 'react'
import Book from '../BookStore/Book'
import Grid from '@material-ui/core/Grid';
import useStyle from './Storestyles'
import {IconButton,Typography,Button} from '@material-ui/core'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

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
const Store=()=> {
    const hotcontentWrapper = React.useRef(null);
    const recomendcontentWrapper = React.useRef(null);
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
    
    React.useEffect(()=>{
        fetchData()
    },[])
    return (
        <main className={classes.content}>
            <div className={classes.toolbar}/>
            <div style={{marginTop:'-23px',padding:'100px',paddingTop:'0px',paddingBottom:"30px"}}>
                <div className={classes.rectangle}></div>
                <IconButton disableRipple={true} className={classes.LeftBtn} style={{backgroundColor:'white'}}><ChevronLeftIcon fontSize="large"/></IconButton>
                <IconButton disableRipple={true} className={classes.RightBtn} style={{backgroundColor:'white'}}><ChevronRightIcon fontSize="large"/></IconButton>
            </div>
            <div>
                <div className={classes.headContainer}>
                    <Typography variant="h1" className={classes.headText}>สินค้าขายดี</Typography>
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
            <div>
                <div className={classes.headContainer}>
                    <Typography variant="h1" className={classes.headText}>สินค้าแนะนำ</Typography>
                    <Typography variant="h1" className={classes.allBookText}>สินค้าทั้งหมด</Typography>
                </div>
                <div className={classes.viewBook}>
                <IconButton disableRipple={true} style={{borderRadius:'0px'}} onClick={() => {
                                                sideScroll(recomendcontentWrapper.current, 1, 500, -10);
                                }} variant="contained" ><ChevronLeftIcon fontSize="large"/></IconButton>
                    <Grid ref={recomendcontentWrapper} container className={classes.root}>
                        {Books.map((book)=>(
                            <Grid item key={"rec"+book.ISBN}>
                                <Book data={book}/>
                            </Grid>
                        ))
                    }
                    </Grid>
                    {/* <IconButton id="2" variant="contained" style={{position:"absolute",top:`${90}%`,left:'20px',}}><ChevronLeftIcon fontSize="large"/></IconButton>
                    <IconButton id="3" variant="contained" style={{position:"absolute",top:`${90}%`,right:'20px',}}><ChevronRightIcon fontSize="large"/></IconButton> */}
                    <IconButton disableRipple={true} style={{borderRadius:'0px'}} onClick={() => {
                                                sideScroll(recomendcontentWrapper.current, 1, 500, 10);
                                }} variant="contained" ><ChevronRightIcon fontSize="large"/></IconButton>
                </div>
                
            </div>
        </main>
    )
}

export default Store;
