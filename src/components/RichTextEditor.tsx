import React, { useRef, useEffect, useState, useCallback } from "react";
import "./Editor.css";

export interface EditorProps {
    onChange: (htmlContent: string) => void;
    initialContent?: string;
}

type ToolbarButton =
    | { type: "button"; command: string; icon: React.ReactNode; title?: string }
    | {
        type: "dropdown";
        command: string;
        options: { label: string; value: string }[];
        title?: string;
    }
    | {
        type: "color";
        command: string;
        title: string;
    }
    | {
        type: "custom";
        id: "hyperlink";
        icon: React.ReactNode;
        title?: string;
    };

const TOOLBAR_CONFIG: ToolbarButton[] = [
    { type: "button", command: "bold", icon: <i className="fa-solid fa-bold"></i> },
    { type: "button", command: "italic", icon: <i className="fa-solid fa-italic"></i> },
    { type: "button", command: "underline", icon: <i className="fa-solid fa-underline"></i> },

    {
        type: "dropdown",
        command: "formatBlock",
        options: [
            { label: "Normal", value: "p" },
            { label: "Heading 1", value: "H1" },
            { label: "Heading 2", value: "H2" },
            { label: "Heading 3", value: "H3" },
            { label: "Heading 4", value: "H4" },
            { label: "Heading 5", value: "H5" },
            { label: "Heading 6", value: "H6" },
        ],
    },

    {
        type: "dropdown",
        command: "fontSize",
        options: [
            { label: "12px", value: "1" },
            { label: "14px", value: "2" },
            { label: "16px", value: "3" },
            { label: "18px", value: "4" },
            { label: "24px", value: "5" },
            { label: "32px", value: "6" },
            { label: "48px", value: "7" },
        ],
    },

    { type: "color", command: "foreColor", title: "Text Color" },
    { type: "color", command: "hiliteColor", title: "Highlight" },

    { type: "button", command: "insertUnorderedList", icon: <i className="fa-solid fa-list"></i> },
    { type: "button", command: "insertOrderedList", icon: <i className="fa-solid fa-list-ol"></i> },

    { type: "button", command: "justifyLeft", icon: <i className="fa-solid fa-align-left"></i> },
    { type: "button", command: "justifyCenter", icon: <i className="fa-solid fa-align-center"></i> },
    { type: "button", command: "justifyRight", icon: <i className="fa-solid fa-align-right"></i> },
    { type: "button", command: "justifyFull", icon: <i className="fa-solid fa-align-justify"></i> },

    { type: "button", command: "undo", icon: <i className="fa-solid fa-rotate-left"></i> },
    { type: "button", command: "redo", icon: <i className="fa-solid fa-rotate-right"></i> },

    { type: "custom", id: "hyperlink", icon: <i className="fa-solid fa-link"></i>, title: "Insert Link" },
];

const RichTextEditor: React.FC<EditorProps> = ({ onChange, initialContent = "" }) => {
    const editorRef = useRef<HTMLDivElement | null>(null);
    const [isMounted, setIsMounted] = useState(false);

    // Link modal state
    const [showLinkModal, setShowLinkModal] = useState(false);
    const [linkUrl, setLinkUrl] = useState("");

    // Saved selection (range) so modal can restore it
    const savedRangeRef = useRef<Range | null>(null);

    const hasInitialized = useRef(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        if (isMounted && editorRef.current && !hasInitialized.current) {
            editorRef.current.innerHTML = initialContent;
            hasInitialized.current = true;
        }
    }, [isMounted, initialContent]);

    // Save current selection range (if any)
    const saveSelection = () => {
        const sel = window.getSelection();
        if (!sel) {
            savedRangeRef.current = null;
            return;
        }
        if (sel.rangeCount > 0) {
            savedRangeRef.current = sel.getRangeAt(0).cloneRange();
        } else {
            savedRangeRef.current = null;
        }
    };

    // Restore previously saved selection range
    const restoreSelection = () => {
        const sel = window.getSelection();
        sel?.removeAllRanges();
        if (savedRangeRef.current && sel) {
            sel.addRange(savedRangeRef.current);
        }
    };

    // Ensure link anchor created by execCommand gets target & rel attributes
    const ensureLinkAttributes = (url: string) => {
        if (!editorRef.current) return;
        // Find anchors with matching href inside editor; set target/rel
        const anchors = Array.from(editorRef.current.querySelectorAll(`a[href]`)) as HTMLAnchorElement[];
        anchors.forEach((a) => {
            // best-effort: if href equals url or contains it
            if (a.getAttribute("href") === url || a.getAttribute("href")?.includes(url)) {
                a.setAttribute("target", "_blank");
                a.setAttribute("rel", "noopener noreferrer");
            }
        });
    };

    const executeCommand = useCallback((command: string, value?: string) => {
        if (!editorRef.current) return;

        const sel = window.getSelection();
        if (!sel || sel.rangeCount === 0) return;

        if (command === "fontSizePx" && value) {
            // Wrap selected text in span with font-size
            const range = sel.getRangeAt(0);
            if (!range.collapsed) {
                const span = document.createElement("span");
                span.style.fontSize = value + "px";
                range.surroundContents(span);
            }
        } else if (command === "formatBlock" && value) {
            document.execCommand("formatBlock", false, `<${value}>`);
        } else {
            document.execCommand(command, false, value);
        }

        editorRef.current.focus();
    }, []);


    const handleInput = (e: React.FormEvent<HTMLDivElement>) => {
        onChange(e.currentTarget.innerHTML);
    };

    // Open link modal — save selection first
    const openLinkModal = (e?: React.MouseEvent) => {
        if (e) e.preventDefault();
        saveSelection();
        setLinkUrl("");
        setShowLinkModal(true);
        // don't focus editor; user will type into modal
    };

    // Insert link: restore selection, then create link or insert anchor node if caret only
    const insertLink = () => {
        setShowLinkModal(false);

        // restore selection so createLink acts on the right range
        restoreSelection();

        const url = linkUrl.trim();
        if (!url) return;

        const sel = window.getSelection();
        if (!sel) return;

        // If there is a selection (non-collapsed), use execCommand to create link
        if (sel.rangeCount > 0 && !sel.getRangeAt(0).collapsed) {
            document.execCommand("createLink", false, url);
            // set attributes on created anchors
            ensureLinkAttributes(url);
            // refocus editor
            editorRef.current?.focus();
            // sync content
            onChange(editorRef.current?.innerHTML ?? "");
            return;
        }

        // If selection is collapsed (caret only), insert an <a> element at caret
        const range = sel.getRangeAt(0);
        const a = document.createElement("a");
        a.href = url;
        a.textContent = url;
        a.target = "_blank";
        a.rel = "noopener noreferrer";

        range.insertNode(a);

        // move caret after the inserted link
        const newRange = document.createRange();
        newRange.setStartAfter(a);
        newRange.collapse(true);
        sel.removeAllRanges();
        sel.addRange(newRange);

        editorRef.current?.focus();
        onChange(editorRef.current?.innerHTML ?? "");
    };

    const [foreColor, setForeColor] = useState("#000000"); // text color
    const [hiliteColor, setHiliteColor] = useState("#ffff00"); // highlight


    const renderToolbar = () => (
        <div className="rte-toolbar">
            {TOOLBAR_CONFIG.map((tool, index) => {
                if (tool.type === "button") {
                    return (
                        <button
                            key={index}
                            className="rte-btn"
                            onMouseDown={(e) => {
                                e.preventDefault();
                                executeCommand(tool.command);
                            }}
                            title={tool.title}
                        >
                            {tool.icon}
                        </button>
                    );
                }

                if (tool.type === "dropdown") {
                    return (
                        <select
                            key={index}
                            className="rte-select"
                            title={tool.title}
                            onChange={(e) => executeCommand(tool.command, e.target.value)}
                        >
                            {tool.options.map((opt) => (
                                <option key={opt.value} value={opt.value}>
                                    {opt.label}
                                </option>
                            ))}
                        </select>
                    );
                }

                // if (tool.type === "color") {
                //     return (
                //         <label key={index} className="rte-color-picker" title={tool.title}>
                //             <input
                //                 type="color"
                //                 onChange={(e) => executeCommand(tool.command, e.target.value)}
                //             />
                //         </label>
                //     );
                // }

                if (tool.type === "color") {
                    const isForeColor = tool.command === "foreColor";
                    const isHiliteColor = tool.command === "hiliteColor";

                    return (
                        <label key={index} className="rte-color-picker" title={tool.title}>
                            <span
                                className="color-icon"
                                style={{
                                    backgroundColor: isForeColor ? foreColor : hiliteColor,
                                }}
                            >
                                {isForeColor && <i className="fa-solid fa-a"></i>}
                                {isHiliteColor && <i className="fa-solid fa-pen"></i>}
                            </span>
                            <input
                                type="color"
                                className="color-input"
                                value={isForeColor ? foreColor : hiliteColor} // controlled input
                                onChange={(e) => {
                                    const color = e.target.value;
                                    executeCommand(tool.command, color);
                                    if (isForeColor) {
                                        setForeColor(color);
                                    } else {
                                        setHiliteColor(color);
                                    }
                                }}
                            />
                        </label>
                    );
                }



                if (tool.type === "custom" && tool.id === "hyperlink") {
                    return (
                        <button
                            key={index}
                            className="rte-btn"
                            onMouseDown={(e) => {
                                e.preventDefault();
                                openLinkModal(e);
                            }}
                            title={tool.title}
                        >
                            {tool.icon}
                        </button>
                    );
                }

                return null;
            })}
        </div>
    );

    if (!isMounted) return null;

    return (
        <div className="editor-container">
            {renderToolbar()}

            <div
                ref={editorRef}
                className="editor-content"
                contentEditable
                onInput={handleInput}
                data-placeholder="Start typing..."
                suppressContentEditableWarning
            />

            {/* Link Modal */}
            {showLinkModal && (
                <div
                    className="rte-modal-overlay"
                    onMouseDown={() => {
                        // clicking backdrop closes modal
                        setShowLinkModal(false);
                    }}
                >
                    <div
                        className="rte-modal"
                        onMouseDown={(e) => {
                            // prevent backdrop click from closing when clicking inside modal
                            e.stopPropagation();
                        }}
                    >
                        <h3>Insert Hyperlink</h3>
                        <input
                            type="text"
                            placeholder="https://example.com"
                            value={linkUrl}
                            onChange={(e) => setLinkUrl(e.target.value)}
                            className="rte-modal-input"
                            autoFocus
                        />
                        <div className="rte-modal-actions">
                            <button
                                onClick={() => {
                                    setShowLinkModal(false);
                                }}
                            >
                                Cancel
                            </button>
                            <button className="primary" onClick={insertLink}>
                                Insert
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default RichTextEditor;
