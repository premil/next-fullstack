'use client'
import { useRouter } from "next/router"


export default function DeleteButton({postId}){
    const router = useRouter;

    async function handleClick(){
        try{
            await fetch(`/api/post/${postId}`,{
                method: 'DELETE'
            })
            router.refresh
        }catch(e){
            console.log(e);
        }
        
    }
    return(
        <button onClick={handleClick}>Delete Post</button>
    )
}