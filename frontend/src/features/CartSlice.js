import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify';

const initialState = {
    cartItem: localStorage.getItem('cartItem')? JSON.parse(localStorage.getItem('cartItem')) :[],
    cartProductQuantity: 0,
    totalProductPrice: 0
}
const CartSlice = createSlice({
    name:'Cart',
    initialState,
    reducers:{
        addToCart: (state, action) => {
            const itemIndex = state.cartItem.findIndex((item) => item.id === action.payload.id );
            
            if(itemIndex >=0){
                state.cartItem[itemIndex].cartQuantity +=1
                toast.info(`increased ${state.cartItem[itemIndex].name} cart quantity`,{
                    position:'bottom-left'
                })
            } else {
                const cartOccur = {...action.payload, cartQuantity : 1 }
                state.cartItem.push(cartOccur);  
                toast.success(`${action.payload.name} added to Cart`,{
                    position:'bottom-left'
                })
            }
            localStorage.setItem('cartItem' , JSON.stringify(state.cartItem))
        },
        RemoveFromCart:(state,action) => {
            state.cartItem=state.cartItem.filter((item) => item.id !== action.payload.id)
            localStorage.setItem('cartItem' , JSON.stringify(state.cartItem))
            toast.error(`${action.payload.name} removed from Cart`,{
                position:'bottom-left'
            })
        },
        DecreaseQuantity:(state,action) => {
            const itemIndex = state.cartItem.findIndex((item) => item.id === action.payload.id );
            if(state.cartItem[itemIndex].cartQuantity >1) {
                state.cartItem[itemIndex].cartQuantity-=1
                toast.info(`decreased ${state.cartItem[itemIndex].name} cart quantity`,{
                    position:'bottom-left'
                })
            } else{
                state.cartItem=state.cartItem.filter((item) => item.id !== action.payload.id)
                toast.error(`${action.payload.name} removed from Cart`,{
                    position:'bottom-left'
                }) 
            }
            localStorage.setItem('cartItem' , JSON.stringify(state.cartItem))
        },
        ClearCart:(state,action) =>{
            state.cartItem = [];
            toast.error(`Cart cleared`,{
                position:'bottom-left'
            })
            localStorage.clear();
        },
        getTotal:(state,action) =>{
            let {total,quantity}=state.cartItem.reduce(
                (cartTotal,item)=>{
                const {price,cartQuantity} = item;
                const itemTotal= price * cartQuantity;
                cartTotal.total+=itemTotal;
                cartTotal.quantity+=cartQuantity;
                return cartTotal;
            },{
                total:0,
                quantity:0
            })

            state.totalProductPrice=total;
            state.cartProductQuantity=quantity;
        },
        clearCheckout:(state,action)=>{
            state.cartItem = [];
            state.cartProductQuantity=0;
            localStorage.clear();
        }
    }
})

export const {addToCart,RemoveFromCart, DecreaseQuantity ,ClearCart, getTotal , clearCheckout} = CartSlice.actions;
export default CartSlice.reducer;