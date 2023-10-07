
const fetchdata = async ()=>{
  let res = await fetch("http://localhost:3000/api/post" ,{
    cache :'no-store'
  })
  let responce = await res.json()
  return responce
}
export default async function page() {
  let a = await fetchdata()
  return (
    <div>
      {a.map((e)=>{
        return(
          <>
          <h1>{e.content}</h1>
          </>
        )
      })}
    </div>
  )
}
