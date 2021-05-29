import React,{useState,useContext} from 'react'
import useStyles from './PaymentSytle'
import {Button, Typography} from '@material-ui/core'
import Select from '@material-ui/core/Select';
import LockIcon from '@material-ui/icons/Lock';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl'
import InputBase from '@material-ui/core/InputBase';
import {CartContext} from '../Cart/CartContext';
import kerry from '../../pic/Kerrry_Express.png';
import Credit from '../../pic/credit-cards-payment.png';
import coin from '../../pic/money.png';

const Payment = () => {

    const classes = useStyles();
    const [cart,setCart] = useContext(CartContext);
    const calAmount = () =>{
        var sum = 0
        cart.map((data)=>{
            sum += Math.round((data.price.value*38)-(data.price.value*38)*0.20)
        })
        return sum
    }
    const deliverCost = 1
    const freedeliverCost = 0
    const KerrydeliverCost = 40
    const [deliveryWay,setDeliryWay] = useState(1)
    const [PayOutWay,setPayOutWay] = useState(1)
    const handleClickDeliveryWay = (way) =>{
            setDeliryWay(way)
    }
    const handleClickPayOutWay = (way) =>{
        setPayOutWay(way)
}
    return (
        <div>
            <div className={classes.toolbar}></div>
            <div className={classes.container} >
                <div style={{width:'100%',marginRight:'80px'}}>
                    <div>
                        <Typography variant="h4" style={{fontWeight:'bold',marginBottom:'50px'}}>ชำระเงิน</Typography>
                    </div>
                    <div style={{borderBottom:"2px solid #C5C5C5"}}>
                        <Typography variant="subtitle1" style={{fontWeight:'bold',marginBottom:'20px'}}>ที่อยู่ในการจัดส่ง</Typography>
                        
                    </div>
                    <div style={{padding:'10px'}}>
                        <div style={{display:'flex',justifyContent:'space-between'}}>
                            <div style={{display:"flex",flexDirection:'column',width:'100%'}}>
                                <Typography>ชื่อ</Typography>
                                <InputBase
                                    className={classes.input}
                                    id="lastname"
                                    defaultValue=""
                                    inputProps={{ 'aria-label': 'naked' }}
                                />
                            </div>
                            <div style={{display:"flex",flexDirection:'column',width:'100%'}}>
                                <Typography>นามสกุล</Typography>
                                <InputBase
                                    className={classes.input}
                                    id="lastname"
                                    defaultValue="lastname"
                                    inputProps={{ 'aria-label': 'naked' }}
                                />
                            </div>

                        </div>
                        <div>
                            <div style={{display:"flex",flexDirection:'column',width:'100%'}}>
                                <Typography>ประเทศ</Typography>
                                <FormControl>
                                    <Select
                                        className={classes.input}
                                        disableUnderline={true}
                                        
                                        displayEmpty
                                      
                                        inputProps={{ 'aria-label': 'Without label' }}
                                        >
                                        <MenuItem value="" disabled>
                                            ประเทศ
                                        </MenuItem>
                                        <MenuItem value="Thailand">Thailand</MenuItem>
                                        <MenuItem value="USA">USA</MenuItem>
                                        <MenuItem value="Chaina">China</MenuItem>
                                    </Select>
                                    <FormHelperText>Placeholder</FormHelperText>
                                </FormControl>
                            </div>
                        </div>
                        <div>
                            <div style={{display:"flex",flexDirection:'column',width:'100%'}}>
                                <div style={{display:"flex"}}>
                                    <Typography>ที่อยู่</Typography>
                                    <Typography color="error">(บ้านเลขที่/หมู่บ้าน/หมู่ที่/ซอย/ถนน)</Typography>
                                </div>
                                <InputBase
                                    className={classes.input}
                                    id="Addr"
                                    defaultValue=""
                                    inputProps={{ 'aria-label': 'naked' }}
                                />
                            </div>
                        </div>
                        <div style={{display:'flex',justifyContent:'space-between'}}>
                            <div style={{display:"flex",flexDirection:'column',width:'100%'}}>
                                <Typography>แขวง/ตำบล</Typography>
                                <InputBase
                                    className={classes.input}
                                    id="province"
                                    defaultValue=""
                                    inputProps={{ 'aria-label': 'naked' }}
                                />
                            </div>
                            <div style={{display:"flex",flexDirection:'column',width:'100%'}}>
                                <Typography>เขต/อำเภอ</Typography>
                                <InputBase
                                    className={classes.input}
                                    id="province"
                                    defaultValue=""
                                    inputProps={{ 'aria-label': 'naked' }}
                                />
                            </div>
                        
                        </div>
                        <div  style={{display:'flex',justifyContent:'space-between'}}>
                            <div style={{display:"flex",flexDirection:'column',width:'100%'}}>
                                <Typography>จังหวัด</Typography>
                                <InputBase
                                    className={classes.input}
                                    id="province"
                                    defaultValue=""
                                    inputProps={{ 'aria-label': 'naked' }}
                                />
                            </div>
                            <div style={{display:"flex",flexDirection:'column',width:'100%'}}>
                                <Typography>รหัสไปรษณีย์</Typography>
                                <InputBase
                                    className={classes.input}
                                    id="province"
                                    defaultValue=""
                                    inputProps={{ 'aria-label': 'naked' }}
                                />
                            </div>
                        </div>
                        <div>
                        <div style={{display:"flex",flexDirection:'column',width:'100%'}}>
                                <Typography>เบอร์ติดต่อ(กรุณาระบุหมายเลขโทรศัพท์ เฉพาะตัวเลขเท่านั้น)</Typography>
                                <InputBase
                                    className={classes.input}
                                    id="province"
                                    defaultValue=""
                                    inputProps={{ 'aria-label': 'naked' }}
                                />
                            </div>
                        </div>
                    </div>
                    <div style={{borderBottom:'1px solid #C5C5C5',paddingBottom:'20px',marginTop:'50px',marginBottom:'20px'}}>
                        <Typography variant="subtitle1" style={{fontWeight:'bold'}}>
                            เลือกขนส่ง
                        </Typography>
                    </div>
                    <div>
                        <div onClick={()=>{handleClickDeliveryWay(1)}}  className={(deliveryWay===1)?classes.BorderRadioBoxSelect:classes.BorderRadioBoxNotSelect}>
                            <div className={classes.selecBox}>
                                <Typography variant="h5" style={{fontWeight:'bold'}}>
                                    Free Shipping
                                </Typography>
                                <Typography variant="subtitle1" style={{fontWeight:'bold'}}>
                                    {"THB"+freedeliverCost.toFixed(2)}
                                </Typography>
                            </div>
                        </div>
                        <div onClick={()=>{handleClickDeliveryWay(2)}}  className={(deliveryWay===2)?classes.BorderRadioBoxSelect:classes.BorderRadioBoxNotSelect}>
                            <div className={classes.selecBox} >
                                    <img  src={kerry} style={{width:'200px',height:'130px',marginLeft:'-28px',marginTop:"-49px",marginBottom:"-70px"}}></img>
                                <Typography variant="subtitle1" style={{fontWeight:'bold'}}>
                                    {"THB"+KerrydeliverCost.toFixed(2)}
                                </Typography>
                            </div>
                        </div>
                    </div>
                    <div style={{borderBottom:'1px solid #C5C5C5',paddingBottom:'20px',marginTop:'50px',marginBottom:'20px'}}>
                        <Typography variant="subtitle1" style={{fontWeight:'bold'}}>
                            วิธีชำระเงิน
                        </Typography>
                    </div>
                    <div>
                        <div onClick={()=>{handleClickPayOutWay(1)}}  className={(PayOutWay===1)?classes.BorderRadioBoxSelect:classes.BorderRadioBoxNotSelect}>
                            <div className={classes.selecBox}>
                                <Typography variant="h5" style={{display:'flex',alignItems:'center'}}>
                                    <img src={coin} className={classes.img}/>
                                    <Typography variant="h6" style={{marginLeft:'30px'}}>Cash</Typography> 
                                </Typography>
                            </div>
                        </div>
                        <div onClick={()=>{handleClickPayOutWay(2)}}  className={(PayOutWay===2)?classes.BorderRadioBoxSelect:classes.BorderRadioBoxNotSelect}>
                            <div className={classes.selecBox} >
                                <Typography variant="h5" style={{display:'flex',alignItems:'center'}}>
                                    <img src={Credit} className={classes.img}/>
                                    <Typography variant="h6" style={{marginLeft:'30px'}}>Credit/Debit</Typography> 
                                </Typography>
                            </div>
                        </div>
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
                        <Button onClick={()=>{}} className={classes.Btn} style={{width:'100%',padding:"10px"}} variant="contained" color="primary">
                            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                                <LockIcon/>
                                <Typography variant="subtitle1">ชำระเงิน</Typography>
                            </div>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
