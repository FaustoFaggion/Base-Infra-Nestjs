export default function RouteDetails({params}: 
    {params : {userEmail: string}}) 
{
    return (
        <h1>Welcome {params.userEmail}!!</h1>
    )
}