import { makeStyles} from '@material-ui/core/styles';


export default makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
    container :{
      marginLeft:'100px',
      marginRight:'100px',
      marginTop:'60px',
      marginBottom:'60px'
    },
    button:{
      borderRadius:'30px'
    },
    list:{
      width:'100%'
    },
    td:{
      padding:'20px'
    },
    payBox:{
      minWidth:'300px',
      width:'20%',
      padding:'50px',
      paddingTop:"20px",
      marginTop:"50px",
      background:'#F5F9FF',
      height:'230px',
    },
    editBtnContainer:{
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      width:'30px',
      height:'30px',
    },
    editBtn:{
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      border:'3px solid gray',
      borderRadius:'30px',
      padding:'2px',
      width:'18px',
      height:'18px'
    },
    btngroup:{
      display:'flex',
      justifyContent:'space-between',
      alignItems:'center',
      width:"550px"
    },
    input:{
        display:'flex',
        alignItems:'center',
        justifyContent:'space-around',
        backgroundColor:'#c7c7c7',
        width:'100px',
        height:'50px',
        borderRadius:'10px'
    },

}));