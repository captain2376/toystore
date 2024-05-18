//import REACT_APP_BACKEND_URL from '../.env'
//const REACT_APP_BACKEND_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:9092';
const REACT_APP_BACKEND_URL = process.env.REACT_APP_BACKEND_URL
const apiUrls = {
    viewProducts: `${REACT_APP_BACKEND_URL}/viewproducts`,
    addProduct: `${REACT_APP_BACKEND_URL}/addproduct`,
     
  };
  
  export default apiUrls;
  