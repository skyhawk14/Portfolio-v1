import { Social } from "../typings";

export const fetchSocials = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`);
    console.log(res);
    const data = await res.json()
    const social: Social[] = data.socials
    return social
}