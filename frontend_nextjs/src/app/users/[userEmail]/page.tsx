export default function UserDetails({params}: 
    {params : {userEmail: string}}) 
{
    return (
        <h1> to Dynamic Route {params.userEmail}!!</h1>
    )
}