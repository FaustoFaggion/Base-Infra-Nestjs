export default function FriendDetails({params}: {
   params: {
    userEmail: string,
    friendId: string
    } 
}) {
    return (
        <h1>Welcome friend {params.friendId} of {params.userEmail} </h1>
    )
}