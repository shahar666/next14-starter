"use client"
import Link from "next/link"
import { usePathname, useRouter, useSearchParams } from "next/navigation"

const NavigationTest = () => {

    // CLIEN SIDE NAVIGATION
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const q = searchParams.get("q");
    console.log(q);
    console.log(pathname);

    const handleClick = () => {
        console.log("Clicked");
        router.back("/")
    }

    return (
        <div>
            <Link href="/" prefetch={false}>Click Here!</Link>
            <button onClick={handleClick}>Write and Redirect</button>
        </div>
    )
}

export default NavigationTest