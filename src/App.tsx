
import { useState } from 'react';
import RichTextEditor from './components/RichTextEditor'
import './styles/custom.css'

function App() {
    const [content, setContent] = useState("<p>Hello, start typing...</p>");

    return (
        <>
            <div className="card">
                <RichTextEditor
                    initialContent={content}
                    onChange={(htmlContent) => {
                        setContent(htmlContent);
                    }}
                />

                {content}
            </div>
        </>
    )
}

export default App
