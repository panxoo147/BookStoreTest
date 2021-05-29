import { makeStyles} from '@material-ui/core/styles';

const drawerWidth = 0;

export default makeStyles((theme) => ({
  appBar: {
    boxShadow: 'none',
    paddingLeft:'100px',
    paddingRight:'90px',
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  title: {
    flexGrow: 1,
    alignItems: 'center',
    display: 'flex',
    textDecoration: 'none',
  },
  image: {
    marginRight: '10px',
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  grow: {
    flexGrow: 10,
  },

  search: {
    padding:'20px',
    borderRadius:'30px',
    width:'100%',
    marginLeft:'20px',
    border:'none',
    outline: 'none',
    fontSize:'16px',
    backgroundColor:'transparent'
  },
  image:{
    width:'50px'
  },
  cart:{
    boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
    position:'absolute',
    width:'300px',
    right:100,
    top:80,
    background: 'white',
    border:'1px solid gray'
  },
  cartBox:{
    padding:'10px',
    display:'flex',
    justifyContent:'space-around',
    borderBottom:'1px solid gray'
  },
  Topcart:{
    padding:'10px',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    borderBottom:'1px solid gray',
    flexDirection:'column'
  },
  middle:{
    position:'relative',
    alignItems: "stretch",
    display: "flex",
    flexDirection: "column",
    flexWrap: "nowrap",
    overflowX:'auto',
    height:'120px',
    '&::-webkit-scrollbar': {
      width: '0.4em'
    },
    '&::-webkit-scrollbar-track': {
      boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
      webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
      backgroundColor:'#E1E1E1',
      borderRadius:'10px'
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: '#ADADAD',
      borderRadius:'10px'
    }
  },
  bottom:{
    display:'flex',
    justifyContent:'center',
    alignItems:'flex-end'
  },
  rectangle: {
    display: "inline-block",
    width: "20px",
    height: "20px",
    background: "white",
    boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
    position:'absolute',
    right:195,
    zIndex:'10',
    top:70,
    transform:'rotate(45deg)',
    border:'1px solid gray'
  },
  whiteRecangle:{
    display: "inline-block",
    width: "50px",
    height: "20px",
    background: "white",
    position:'absolute',
    right:190,
    zIndex:'11',
    top:81,
  },
  emptyBox:{
    padding:'10px',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    borderBottom:'1px solid gray',
    height:'98px'
  },
  button:{
    width:'200px',
    borderRadius:'30px'
  },
  editBtnContainer:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    width:'30px',
    height:'30px'
  },
  editBtn:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    border:'2px solid gray',
    borderRadius:'30px',
    padding:'2px',
    width:'10px',
    height:'10px'
  }
}));