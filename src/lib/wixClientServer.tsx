import { createClient, OAuthStrategy } from "@wix/sdk";
import { products, collections } from "@wix/stores"
import { cookies } from "next/headers";


const clientId: any = process.env.NEXT_PUBLIC_WIX_CLIENT_ID;

export const wixClientServer = async () => {

    let refreshToken;

    try {
        const cookieStore = cookies();
        refreshToken = JSON.parse(cookieStore.get("refreshToken")?.value || "{}");
    } catch (error) {

    }
    const wixClient = createClient({
        modules: {
            products,
            collections
        },
        auth: OAuthStrategy({
            clientId,
            tokens: {
                refreshToken,
                accessToken: { value: "", expiresAt: 0 }
            }
        })
    })
    return wixClient;
}