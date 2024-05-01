import Link from "next/link"
export default function Meals () {
    return (
        <main>
            <h1>meals page list</h1>
            <p><Link href='/meals/meal-1'>Meals share</Link></p>
            <p><Link href='/meals/meal-2'>Meals share</Link></p>
            <p><Link href='/meals/meal-3'>Meals share</Link></p>
        </main>
    )
}