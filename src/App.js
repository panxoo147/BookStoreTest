import './App.css';
import CartContextProvider from './Component/Cart/CartContext';
import Router from './Route';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';



function App() {
  return (
    <CartContextProvider>
        <Router/>
    </CartContextProvider>
  );
}

export default App;
