import React,{useContext,useState} from 'react'
import {CartContext} from './CartContext'
import useStyle from './CartStyle'
import {IconButton,Typography,Button} from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit';
import { useHistory } from 'react-router';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const customData = require('../../Mockdata.json');
const Cart = (props) => {
    const hotcontentWrapper = React.useRef(null);
    const [cart,setCart] = useContext(CartContext);
    const classes = useStyle();
    const [Books,setBooks] = useState([]);
    const fetchData = async()=>{

        setBooks(customData)
    }
    React.useEffect(()=>{
        fetchData()
    },[])
    const history = useHistory()
    const removeBook = (index) =>{
        var array = [...cart]
        array.splice(index, 1)
        setCart(array)
        console.log(index)
    }
    const calAmount = () =>{
        var sum = 0
        cart.map((data)=>{
            sum += Math.round((data.price.value*38)-(data.price.value*38)*0.20)
        })
        return sum
    }
    const deliverCost = 1
    const clearCart = () =>{
        setCart([])
    }
    function goShoping() {
        history.push({pathname:"/"});
    }
    function goPayment() {
        history.push({pathname:"/payment"});
    }

    const [amount,setAmount] = useState(1)
    const increment = ()=>{
        setAmount(amount+1)
    }
    const decrement = ()=>{
        if(amount>1)
            setAmount(amount-1)
    }

    return (
        <div className={classes.container}>
            <div className={classes.toolbar}/>
            <div style={{display:'flex',justifyContent:'space-between'}}>
                <div style={{width:'100%'}}>
                    <Typography variant="h4" style={{fontWeight:'bold'}}>
                        ตระกร้าสินค้า
                    </Typography>
                    <div className={classes.list}>
                        <table style={{borderCollapse: "collapse" ,margin:'20px'}}>
                            <thead >
                            <tr style={{borderBottom:" 2px solid #ddd"}}>
                                <td className={classes.td} style={{width:'10%'}}>สินค้า</td>
                                <td className={classes.td} style={{width:'30%'}}></td>
                                <td className={classes.td} style={{width:'15%'}}>ราคา</td>
                                <td className={classes.td} style={{width:'20%'}}>จำนวน</td>
                                <td className={classes.td} style={{width:'15%'}}>ยอดรวม</td>
                                <td className={classes.td} style={{width:'10%'}}></td>
                            </tr>
                            </thead>
                            <tbody>
                                {
                                (cart.length>0)?
                                cart.map((item,index)=>{
                                    return (
                                        <tr style={{borderBottom:" 2px solid #ddd"}}>
                                            <td className={classes.td} display={{}}>
                                                <div style={{display:'flex'}}>
                                                    <img style={{width:'70px'}} src={item.image}></img>
                                                </div>
                                            </td>
                                            <td className={classes.td} >
                                                  <Typography variant="subtitle1">{item.title}</Typography>
                                            </td>
                                            
                                            <td className={classes.td}>
                                                <Typography varient="h4" style={{fontWeight:'bold'}}>
                                                    {"THB"+(Math.round((item.price.value*38)-(item.price.value*38)*0.20)).toFixed(2)}
                                                </Typography>
                                            </td>
                                            <td className={classes.td}>
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
                                            </td>
                                            <td className={classes.td}>
                                                <Typography varient="h4" style={{fontWeight:'bold'}}>
                                                    {"THB"+(Math.round((item.price.value*38)-(item.price.value*38)*0.20)).toFixed(2)}
                                                </Typography>
                                            </td>
                                            <td className={classes.td}>
                                                <div style={{display:'flex',flexDirection:'column'}}>
                                                    <IconButton onClick={()=>removeBook(index)} style={{width:'30px',height:'30px',padding:'0px'}}>
                                                        <HighlightOffIcon style={{fontSize:'35px',color:'gray'}}/>
                                                    </IconButton>
                                                    <IconButton className={classes.editBtnContainer} style={{padding:'0px'}}>
                                                        <div className={classes.editBtn}> 
                                                            <EditIcon style={{fontSize:'20px'}}/>
                                                        </div>
                                                    </IconButton>
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                }):
                                <tr style={{borderBottom:" 2px solid #ddd"}}>
                                    <td className={classes.td}>
                                    </td>
                                    <td className={classes.td} >
                                    </td>
                                    <td className={classes.td}  style={{width:'20%'}}>
                                        <Typography variant="h6" color="textSecondary">ไม่มีสินค้าในตระกร้า</Typography>    
                                    </td>
                                    <td className={classes.td}></td>
                                    <td className={classes.td}></td>
                                    <td className={classes.td}></td>
                                </tr>
                            
                            }
                            </tbody>
                        </table>

                    </div>
                    <div>
                        <Button className={classes.button} onClick={()=>goShoping()}  variant="outlined" >ซื้อสินค้าต่อไป</Button>
                        <Button onClick={()=>{clearCart()}} className={classes.button} style={{backgroundColor:'black',color:'white'}} variant="contained">ล้างตระกร้าสินค้า</Button>
                    </div>
                </div>
                <div className={classes.payBox}>
                    <Typography variant="h4" style={{marginBottom:'10px',fontWeight:'bold'}}>
                        สรุปคำสั่งซื้อ
                    </Typography>
                    <div style={{display:'flex',justifyContent:'space-between',marginBottom:'10px'}}>
                        <Typography variant="subtitle1">
                            ยอดรวม
                        </Typography>
                        <Typography variant="subtitle1" style={{}}>
                            {"THB"+calAmount().toFixed(2)}
                        </Typography>
                    </div>
                    <div style={{display:'flex',justifyContent:'space-between',borderBottom:'1px solid black',marginBottom:'20px'}}>
                        <Typography variant="subtitle1" style={{marginBottom:'20px'}}>
                            ค่าส่ง
                        </Typography>
                        <Typography variant="subtitle1">
                            {"THB"+deliverCost.toFixed(2)}
                        </Typography>
                    </div>
                
                    <div style={{display:'flex',justifyContent:'space-between',marginBottom:'20px'}}>
                        <Typography variant="subtitle1">
                            ยอดสุทธิ
                        </Typography>
                        <Typography variant="subtitle1">
                            {"THB"+(deliverCost+calAmount()).toFixed(2)}
                        </Typography>
                    </div>
                    <div >
                        <Button onClick={()=>goPayment()} className={classes.button} style={{width:'100%',padding:"10px"}} variant="contained" color="primary">ไปชำระเงิน</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart
