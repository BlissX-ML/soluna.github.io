import { useParams } from "react-router-dom"

export default function HandbookItem() {
    const params = useParams();

    return (
        <main>
            <p>{params.handbookId}</p>
        </main>
    )
}