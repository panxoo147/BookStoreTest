import { makeStyles} from '@material-ui/core/styles';


export default makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
      },
      root: {
        position:'relative',
        alignItems: "stretch",
        display: "flex",
        padding:'40px',
        flexDirection: "row",
        flexWrap: "nowrap",
        overflow:'hidden',
        width:'95%',
        height:'450px'
      },
    Bookname:{
        fontWeight:'bold',
    },
    BookPrice:{
        marginTop:'60px',
        marginBottom:'60px',
        display:'flex',
        alignItems:'center',
        justifyContent:'flex-start',
        flexGrow:3,
        fontWeight:'bold'
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
    btn:{
        height:'50px',
        width:'200px',
        borderRadius:'30px',
        fontWeight:'bold',
        color:'white'
    },
    social:{
        display:'flex',
        marginTop:'30px',
        alignItems:'center',
    },
    Infocontainer:{
        marginRight:'100px'
    },

    headText:{
      fontSize:'30px',
      fontWeight:'bold',
      paddingLeft:'100px'
    },
    allBookText:{
      fontSize:'15px',
      fontWeight:'bold',
      marginRight:'100px',
      textDecoration:'underline'
    },
    headContainer:{
      display:'flex',
      justifyContent:'space-between'
    },
    LeftBtn:{
      display:"flex",
      position:'absolute',
      left:'100px',
      top:"280px"
    },
    RightBtn:{
      display:"flex",
      position:'absolute',
      right:'100px',
      top:"280px"
    }
    ,viewBook:{
      marginLeft:'30px',
      marginRight:'30px',
      display:'flex',
      justifyContent:'center',
      alignContent:'center'
    },
    line:{
      position:'absolute',
      marginLeft:'-125px',
      backgroundColor:'#c7c7c7',
      width:"100%",
      height:'2px',
    },
    onSelect:{
      color:'black',
      fontSize:'20px',
      fontWeight:'bold'
    },
    clickAbleTxt:{
          padding:'10px',
          cursor:'pointer',
          color:'#C9C8C8',
          fontSize:'20px',
          fontWeight:'bold'
    },
    clickAbleUnderLine:{
          padding:'10px',
          borderBottom:'3px solid blue'
    },
    icon:{
      width:'30px'
    }
}));