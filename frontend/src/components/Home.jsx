import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useGetAllProductsQuery } from '../features/productApi'
import { addToCart } from '../features/CartSlice';

 const Home = () => {
  const { data , error , isLoading } = useGetAllProductsQuery();
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const{filter} = useSelector((state)=> state.product)
  let searchProduct=[]
  if(filter===''){
    searchProduct = data
  }else{
    searchProduct=data.filter(item=>item.name.toLowerCase().includes(filter.toLowerCase()))
  }
  console.log(searchProduct)

  const handleCart = (product) => {
    dispatch(addToCart(product));
    Navigate('/cart');
  }
  return (
    <div className='container'>
        {isLoading ? (
           <p>Loading ...</p>
        ): error? (
            <p>An error occured... </p>
        ) :
        <>
          <h2>New Arrivals</h2>
          <div className="products">
            {searchProduct.map(product => 
            <div key={product.id} className="product">
                <h3>{product.name}</h3>
                <img src={product.image} alt={product.name} />
                <div className="details">
                  <span >{product.desc}</span>
                  <span className='price'>${product.price}</span>
                </div>
                <button onClick={()=>handleCart(product)}>Add To Cart</button>
            </div>)}
            
  
          </div>
        </>}
      </div>
    
    
  )
}

export default Home
