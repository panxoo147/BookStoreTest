import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  container:{
    margin:'100px'
    ,marginTop:'0',
    padding:20,
    display:'flex',justifyContent:'space-between'
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
  input:{
    borderRadius:'30px',
    padding:'5px',
    paddingLeft:'10px',
    paddingRight:'10px',
    border:'1px solid #D9D9D9'
  },
  Btn:{
    borderRadius:'30px',
    padding:"10px"
  },
  BorderRadioBoxSelect:{
    border:'1px solid blue',
    padding:'30px',
    borderRadius:'10px'
  },
  BorderRadioBoxNotSelect:{
    border:'1px solid #D9D9D9',
    padding:'30px',
    borderRadius:'10px',
    cursor:'pointer'
  },
  selecBox:{
    display:'flex',
    justifyContent:'space-between'
  },
  img:{
    width:"30px"
  }
}));