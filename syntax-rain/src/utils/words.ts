export const WORD_LIST = [
    // JavaScript (ES6+)
    "const", "let", "var", "function", "return", "if", "else", "switch", "case", "break", "default",
    "for", "while", "do", "continue", "try", "catch", "finally", "throw", "new", "this", "super",
    "class", "extends", "static", "import", "export", "from", "as", "default", "async", "await",
    "yield", "void", "typeof", "instanceof", "in", "of", "delete", "debugger", "null", "undefined",
    "true", "false", "NaN", "Infinity", "Promise", "Symbol", "Map", "Set", "WeakMap", "WeakSet",
    "Proxy", "Reflect", "Intl", "JSON", "Math", "Date", "RegExp", "Error", "Array", "Object",
    "String", "Number", "Boolean", "BigInt", "Function", "console", "window", "document", "navigator",
    "localStorage", "sessionStorage", "fetch", "alert", "prompt", "confirm", "setTimeout", "setInterval",
    "clearTimeout", "clearInterval", "parseInt", "parseFloat", "isNaN", "isFinite", "encodeURI",
    "decodeURI", "encodeURIComponent", "decodeURIComponent", "eval", "globalThis", "undefined",
    "prototype", "__proto__", "constructor", "toString", "valueOf", "join", "split", "slice",
    "splice", "push", "pop", "shift", "unshift", "map", "filter", "reduce", "forEach", "find",
    "findIndex", "includes", "indexOf", "lastIndexOf", "some", "every", "sort", "reverse", "fill",
    "copyWithin", "entries", "keys", "values", "flat", "flatMap", "from", "isArray", "of", "concat",

    // React
    "useState", "useEffect", "useContext", "useReducer", "useCallback", "useMemo", "useRef",
    "useImperativeHandle", "useLayoutEffect", "useDebugValue", "useTransition", "useDeferredValue",
    "useId", "useSyncExternalStore", "useInsertionEffect", "Component", "PureComponent", "memo",
    "forwardRef", "lazy", "Suspense", "Fragment", "StrictMode", "Profiler", "Portal", "Context",
    "Provider", "Consumer", "createElement", "cloneElement", "isValidElement", "Children",
    "createContext", "createRef", "createFactory", "render", "hydrate", "unmountComponentAtNode",
    "findDOMNode", "createPortal", "flushSync", "unstable_batchedUpdates", "act", "isMounted",
    "props", "state", "setState", "forceUpdate", "defaultProps", "displayName", "propTypes",
    "contextType", "getDerivedStateFromProps", "getSnapshotBeforeUpdate", "componentDidMount",
    "componentDidUpdate", "componentWillUnmount", "shouldComponentUpdate", "componentDidCatch",
    "key", "ref", "children", "dangerouslySetInnerHTML", "style", "className", "htmlFor",
    "onChange", "onClick", "onSubmit", "onInput", "onBlur", "onFocus", "onKeyDown", "onKeyUp",
    "onKeyPress", "onMouseEnter", "onMouseLeave", "onMouseDown", "onMouseUp", "onTouchStart",

    // Java
    "public", "private", "protected", "static", "final", "abstract", "synchronized", "volatile",
    "transient", "native", "strictfp", "class", "interface", "enum", "implements", "extends",
    "throws", "void", "int", "long", "short", "byte", "double", "float", "char", "boolean",
    "if", "else", "switch", "case", "default", "while", "do", "for", "break", "continue",
    "return", "try", "catch", "finally", "throw", "new", "this", "super", "instanceof", "assert",
    "package", "import", "true", "false", "null", "System", "out", "println", "main", "String",
    "Integer", "Double", "Float", "Long", "Boolean", "Character", "Byte", "Short", "Math",
    "Object", "Class", "Thread", "Runnable", "Exception", "RuntimeException", "Throwable",
    "Error", "Cloneable", "Serializable", "Comparable", "Comparator", "List", "ArrayList",
    "LinkedList", "Set", "HashSet", "TreeSet", "Map", "HashMap", "TreeMap", "Queue", "Deque",
    "Stack", "Vector", "Iterator", "Collections", "Arrays", "Stream", "Optional", "File",
    "InputStream", "OutputStream", "Reader", "Writer", "BufferedReader", "BufferedWriter",
    "Scanner", "PrintWriter", "StringBuilder", "StringBuffer", "Date", "Calendar", "TimeZone",
    "Locale", "Random", "Timer", "TimerTask", "Socket", "ServerSocket", "URL", "URI",

    // Kotlin
    "val", "var", "fun", "class", "object", "interface", "typealias", "package", "import",
    "if", "else", "when", "try", "catch", "finally", "throw", "return", "continue", "break",
    "as", "is", "in", "!in", "!is", "this", "super", "for", "while", "do", "null", "true", "false",
    "open", "final", "abstract", "enum", "annotation", "data", "sealed", "inner", "override",
    "lateinit", "const", "private", "protected", "public", "internal", "companion", "constructor",
    "init", "get", "set", "field", "it", "by", "lazy", "observable", "delegates", "suspend",
    "coroutine", "launch", "async", "await", "runBlocking", "withContext", "job", "deferred",
    "channel", "flow", "select", "actor", "mutex", "semaphore", "count", "filter", "map",
    "flatMap", "reduce", "fold", "forEach", "any", "all", "none", "find", "first", "last",
    "single", "take", "drop", "slice", "chunked", "windowed", "zip", "unzip", "associate",
    "groupBy", "partition", "plus", "minus", "times", "div", "rem", "rangeTo", "downTo", "step",
    "indices", "withIndex", "let", "run", "with", "apply", "also", "takeIf", "takeUnless",
    "repeat", "TODO", "error", "check", "require", "assert", "lazy", "synchronized",

    "Cosmolink", "UCM", "CanSat", "Devse"
];

export interface Word {
    id: number;
    text: string;
    x: number;
    y: number;
}
