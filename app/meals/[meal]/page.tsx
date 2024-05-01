export default function Meal ({params}: {params: {meal: string}}) {
    return (
        <main>
            <h1>meal page info {params.meal}</h1>
        </main>
    )
}