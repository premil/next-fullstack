'use client'
import { useRouter } from "next/router"


export default function DeleteButton({postId}){
    const router = useRouter;

    async function handleClick(){
        try{
            // await fetch(`/api/post/${postId}`,{
            //     method: 'DELETE'
            // })
            // router.refresh

            const response = await fetch('/api/post', {
                method: 'DELETE',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({id: postId})
                //data:({ id: postId }),
              });
              console.log("Res >>>", response);
              router.refresh
        }catch(e){
            console.log("error >>>",e);
        }
        
    }
    return(
        <button onClick={handleClick}>Delete Post</button>
    )
}