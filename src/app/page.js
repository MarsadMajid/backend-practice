// "use client"
// import { useState } from "react"
// export default function Home() {
//   const [name, setName] = useState([]);
//   const responce = async ()=>{
//      let all = await fetch('https://fakestoreapi.com/carts')
//      let data= await  all.json();
//      setName(data);
//     }
//     responce()
//   return (
//     <>
//       <h1>hello</h1>
//       {name.length ?
//         <div>
//           {name.map((e) => {
//             return (<p key={e.id}>{e.id}</p>)
//           })}
//         </div>
//         :
//         <div>
//           <h1>not found</h1>
//         </div>
//       }
//     </>
//   )
// }  
const responce = async ()=>{
     let all = await fetch('https://fakestoreapi.com/products')
     let data= await  all.json();
    return data}
export default async function  Home () {
  let data = await responce()
return(
  <>       <h1>hello</h1>
      {data.length ?
           <div>
             {data.map((e) => {
               return (
                <>
               <p>{e.id}</p>
                  <img src={e.image} alt=""  width={50}/>
                  </>
               )
             })}
           </div>
          :
          <div>
            <h1>not found</h1>
          </div>
        }
    </>
)
    
}