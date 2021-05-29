import { makeStyles } from '@material-ui/core/styles';

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
    height:'490px'
  },
  control: {
    padding: theme.spacing(2),
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
    top:"280px",
  
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
  rectangle: {
    display: "inline-block",
    width: "100%",
    height: "450px",
    background: "#C4C4C4",
  }
}));