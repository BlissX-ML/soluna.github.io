import { useParams } from "react-router-dom"

export default function HandbookItems() {
    const params = useParams();

    return (
        <main>
            <p>{params.handbookId}</p>
        </main>
    )
}