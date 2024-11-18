"use client"
import { useRouter } from "next/navigation"
import { userAtom } from "@/atoms"
import { useAtom } from "jotai"

export default function PlacasSolares() {
    const [user] = useAtom(userAtom)
    const router = useRouter()

    if (!user) {
      router.push("/login")
    } 
    return (
        <main>
            <div></div>
            <div></div>
        </main>
    );
}