import { useCallback, useState } from "react"
import { BrowserRouter as Router , Routes , Route , Link , useMatch, Outlet, useParams } from "react-router-dom"
import { useContext , Consumer} from "react"
import contextFirst from "../../context/context"
const useValidation = (num)=>{ 
const [value , setValue] = useState(num)
const onChange = useCallback((e)=>{
e.target.value = e.target.value.replace(/\D/img , "");
setValue(e.target.value)
} , [value] )

return { value , setValue , onChange}

}




const FirstPage = ()=>{ 

   const {valueCont , name , age , changeForContext} = useContext(contextFirst)

   let { id } = useParams();

   const {value , setValue , onChange} = useValidation(0)

   console.log(id);

   return (
      <div>
         <p> {value} koo {valueCont} </p>
         <input type="text" value={value} onChange={onChange}/>
         <Link to={value}>{value} {name}</Link>
         <button onClick={changeForContext}>context change</button>
         <Outlet/>
     </div>
   )
}


export default FirstPage


         {/* <Link to={`${value}`}>Переход к юзеру {value}</Link> */}



            {/* <Routes>
               <Route path=":id">{<p>oas</p>}</Route>
            </Routes> */}
         {/* <Outlet/> */}