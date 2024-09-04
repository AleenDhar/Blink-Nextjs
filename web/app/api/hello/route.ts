import {ActionGetRequest,ActionPostRequest, ActionPostResponse,ActionGetResponse,ACTIONS_CORS_HEADERS} from "@solana/actions"

export async function GET(request: Request) {
  const response : ActionGetResponse = {
    icon:"https://solana-asset-recovery.vercel.app/solandy-logo.png",
    title:"do blink",
    description:"Aleen Dhar made this blink",
    label:"click me",
    error:{
      message:"error",
    },
  }
  return  Response.json(response,{headers:ACTIONS_CORS_HEADERS});
}

export async function POST(request:Request){
  const postRequest : ActionPostRequest = await request.json()
  const userPubkey = postRequest.account
  console.log(userPubkey)

  const response : ActionPostResponse={
    transaction:"",
    message:"hello  "+userPubkey,
  }

  return Response.json(response,{headers:ACTIONS_CORS_HEADERS})
}