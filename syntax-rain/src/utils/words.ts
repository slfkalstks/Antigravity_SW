export const WORD_LIST = [
    "const", "let", "var", "function", "return", "if", "else", "import", "from", "map", "filter",
    "reduce", "forEach", "useState", "useEffect", "props", "component", "div", "span", "console.log",
    "async", "await", "promise", "try", "catch", "throw", "new", "class", "extends", "interface",
    "type", "module", "export", "default", "switch", "case", "break", "continue", "while", "for"
];

export interface Word {
    id: number;
    text: string;
    x: number;
    y: number;
}
