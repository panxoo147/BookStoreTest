import {makeStyles} from '@material-ui/core/styles'

export default makeStyles(()=>({
    root:{
        margin:'0px',
        width:"250px",
        background:'transparent',
        backgroundColor:'transparent',
        border:'0',
        '&:hover': {
            boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px"
        },
    },
    media:{
        width:'90px',
    },
    picContainer:{
        paddingTop:'10px',
        display:'flex',
        justifyContent:'center',
        alignContent:'center'
    },
    cardActions:{
        display:'flex',
        justifyContent:'center',
    },
    cardContent:{
        display:'block'
    },
    ratingTxt:{
        display:'flex',
        justifyContent:'space-between'
    },
    status:{
        paddingLeft:'30px',
        display:'flex',
        justifyContent:'flex-start',
        alignItems:'center',
        fontSize:'12px',
        color:'#3AAB46',
    },
  
}));