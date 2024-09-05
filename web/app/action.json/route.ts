import { ACTIONS_CORS_HEADERS, ActionsJson } from "@solana/actions";

export const GET = async () => {
  const payload: ActionsJson = {
    rules: [
      // map all root level routes to an action
      {
        pathPattern: "/blink",
        apiPath: "/api/donate-sol",
      },
      // idempotent rule as the fallback
    //   {
    //     pathPattern: "/api/**",
    //     apiPath: "/api/**",
    //   },
    ],
  };

  return Response.json(payload, {
    headers: ACTIONS_CORS_HEADERS,
  });
};

// DO NOT FORGET TO INCLUDE THE `OPTIONS` HTTP METHOD
// THIS WILL ENSURE CORS WORKS FOR BLINK
export const OPTIONS = GET;