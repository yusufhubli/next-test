

export const GET = async(req,res)=>{
    // const data = {name:"hello"}
    // return Response.json(data)

    const search = req.nextUrl.searchParams
    const query = search.get('query')
    return new Response(query)

}