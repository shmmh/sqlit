import {auth} from "@/lib/auth"

export async function GET(){
    const session = await auth()
    console.log(session)
    if (!session){ return Response.json({error: "Not authenticated"}, {status: 401})
    }
    return Response.json({session})

}