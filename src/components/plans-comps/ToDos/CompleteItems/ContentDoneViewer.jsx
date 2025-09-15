import { useContext, useEffect, useState } from 'react';

import { TodosContext } from '../../../../store/context/TodosManagaeContext.jsx';

import PdfViewer from './PdfViewer.jsx';
import ImageViewer from './ImageViewer.jsx';

export default function ContentDoneViewer({ slot }) {
    const ctx = useContext(TodosContext);
    const section = slot === 'future' ? ctx.future : ctx.done;
    const src = section.content;
    console.log(src)
    const [isPDF, setIsPDF] = useState(false);


    useEffect(() => {
        const ext = src.toString().split('/').pop().split('.').pop()
        setIsPDF(ext === 'webp')
    }, [src])

    console.log(isPDF)

    return (
        <div>
            {
                isPDF ?
                    <ImageViewer src={src} /> :
                    <PdfViewer slot={slot} src={src} />
            }
        </div>
    );

}