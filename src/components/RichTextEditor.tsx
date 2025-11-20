import React, { useRef, useEffect, useState } from 'react';
import './Editor.css';

// 1. Define the Interface for Component Props
// Defines the expected structure and types of the props passed to the component.
export interface EditorProps {
    /** Callback function to handle content changes (returns HTML string) */
    onChange: (htmlContent: string) => void;

    /** Initial HTML content to load into the editor (optional) */
    initialContent?: string;
}

// 2. Type the Functional Component using React.FC
// FC is a generic type that accepts the Props interface.
const RichTextEditor: React.FC<EditorProps> = ({ onChange, initialContent = "" }) => {

    // 3. Type the useRef Hook
    // Tells TypeScript that this ref will point to an HTMLDivElement (or start as null).
    const editorRef = useRef<HTMLDivElement>(null);

    // 4. Type the useState Hook
    // Tells TypeScript that isMounted is a boolean.
    const [isMounted, setIsMounted] = useState<boolean>(false);

    // === NEXT.JS / SSR Protection ===
    useEffect(() => {
        setIsMounted(true);
    }, []);

    // 1. Core function to modify text using native browser API
    const executeCommand = (command: string, value?: string) => {
        // TypeScript knows editorRef.current is a div, so no need to check for existence here
        // but the logic handles the null case just in case the ref is not ready.
        if (editorRef.current) {
            document.execCommand(command, false, value);
            editorRef.current.focus();
        }
    };

    // 2. Handle updates to parent component
    // Type the event handler explicitly as React.FormEvent<HTMLDivElement>
    const handleInput = (e: React.FormEvent<HTMLDivElement>) => {
        // Using e.currentTarget to safely access the target element
        const innerHTML = e.currentTarget.innerHTML;
        if (onChange) {
            onChange(innerHTML);
        }
    };

    // 3. Set initial content
    useEffect(() => {
        if (editorRef.current && initialContent) {
            editorRef.current.innerHTML = initialContent;
        }
    }, [isMounted, initialContent]); // Added initialContent to dependency array

    // If running on the server (or before client hydration), return null
    if (!isMounted) {
        return null; // or a simple loading div
    }

    // === RENDER CLIENT-SIDE ONLY ===
    return (
        <div className="editor-container">
            {/* TOOLBAR */}
            <div className="toolbar">
                {/* Type the mouse event handlers explicitly as React.MouseEvent<HTMLButtonElement> */}
                <button className="toolbar-btn" onMouseDown={(e: React.MouseEvent<HTMLButtonElement>) => { e.preventDefault(); executeCommand('bold'); }}>B</button>
                <button className="toolbar-btn" onMouseDown={(e: React.MouseEvent<HTMLButtonElement>) => { e.preventDefault(); executeCommand('italic'); }}>I</button>
                <button className="toolbar-btn" onMouseDown={(e: React.MouseEvent<HTMLButtonElement>) => { e.preventDefault(); executeCommand('underline'); }}>U</button>

                <div style={{ width: '1px', background: '#ccc', margin: '0 5px' }}></div>

                <button className="toolbar-btn" onMouseDown={(e: React.MouseEvent<HTMLButtonElement>) => { e.preventDefault(); executeCommand('formatBlock', 'H1'); }}>H1</button>
                <button className="toolbar-btn" onMouseDown={(e: React.MouseEvent<HTMLButtonElement>) => { e.preventDefault(); executeCommand('formatBlock', 'H2'); }}>H2</button>
                <button className="toolbar-btn" onMouseDown={(e: React.MouseEvent<HTMLButtonElement>) => { e.preventDefault(); executeCommand('insertUnorderedList'); }}>• List</button>
            </div>

            {/* EDITABLE AREA */}
            <div
                ref={editorRef}
                className="editor-content"
                contentEditable={true}
                onInput={handleInput}
                data-placeholder="Start typing..."
                // suppressContentEditableWarning is still needed for React's internal warnings
                suppressContentEditableWarning={true}
            />
        </div>
    );
};

export default RichTextEditor;