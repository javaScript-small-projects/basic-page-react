export default function Main({title, facts}) {
    return (
        <main>
            <h1 id="title">{title}</h1>
            <ul>
                {facts.map((fact, index) => (
                    <li key={index}>{fact}</li>
                    )
                )}
            </ul>
        </main>
    )
}