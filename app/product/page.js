

export const getData = async()=>{
  const res = await fetch("http://localhost:3000/eee",{
    headers:{
      "content-type":"application/json"
    },
    method:"GET"
  }) 
  const data = res.json()
  return data
}

 const page =() => {

 const data = getData()
  return (
    <div>
           products {data}
    </div>
  )
}

export default page

