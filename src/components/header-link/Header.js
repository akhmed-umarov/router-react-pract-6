import { NavLink , Link, Outlet } from "react-router-dom";
import { useCallback, useMemo , useState } from "react";
import context from "../context/context";

const Header = ()=>{ 
 const Urray = [{name : 'First' , href: 'First'},
       {name : 'Second' , href: 'Second'},
       {name : 'Three' , href: 'Three'}]
   


 const listPage = useMemo(()=>{
   console.log(`useMemo`);
   return Urray.map(({name , href} , index)=>(
      <NavLink style={({isActive})=> isActive ? {"color":"red"} : null} key={index} to={href}>{name}</NavLink>
   ))
   } , [])

   const [data , setData] = useState({
      name: `Akhmed` , age: 25
   })

const [value , setValue] = useState('')

const onChangeVal = (e)=>{ 
setValue(e.target.value)
}


const changeForContext = ()=>{ 
   setValue(value+1)
}

const { Provider } = context;

   return ( 
      <Provider value={{valueCont: value , changeForContext}}>
      <div>
         <input type="text" value={value} onChange={onChangeVal}/>
         <p>Текст {value}</p>
         {listPage}
         <Outlet/>
      </div>
      </Provider>
   )
}

export default Header




