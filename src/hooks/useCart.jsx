import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';

const useCart = () => {
const {user} = useContext(AuthContext)
console.log(user?.email)
const { refetch,  data :cart =[] } = useQuery({
    queryKey: ['carts' , user?.email],
    // enabled:!!user?.email && !!localStorage.getItem("cart"),
    queryFn: async () =>{
        const response = await fetch(`http://localhost:5000/carts?email=${user?.email}`)
        return response.json();
    },
  })

  return [cart,  refetch]

}

export default useCart;