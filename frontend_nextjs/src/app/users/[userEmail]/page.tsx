export default function UserDetails({params}: 
    {params : {userEmail: string}}) 
{
    return (
        <h1>Welcome user {params.userEmail}!!</h1>
    )
}