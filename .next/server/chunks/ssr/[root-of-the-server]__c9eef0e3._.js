module.exports = {

"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
"[project]/src/components/FormWrapper.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>FormWrapper
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
;
;
function FormWrapper({ children, title, description }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            x: 100
        },
        animate: {
            opacity: 1,
            x: 0
        },
        exit: {
            opacity: 0,
            x: -100
        },
        transition: {
            duration: 0.5
        },
        className: "max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-2xl font-bold mb-2 text-blue-600",
                children: title
            }, void 0, false, {
                fileName: "[project]/src/components/FormWrapper.js",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-gray-600 mb-6",
                children: description
            }, void 0, false, {
                fileName: "[project]/src/components/FormWrapper.js",
                lineNumber: 13,
                columnNumber: 23
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/FormWrapper.js",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/FormNavigation.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>FormNavigation
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function FormNavigation({ currentStep, totalSteps, onNext, onBack, isLastStep, isLoading }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex justify-between mt-6",
        children: [
            currentStep > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: onBack,
                disabled: isLoading,
                className: "px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 transition disabled:opacity-50 disabled:cursor-not-allowed",
                children: "Back"
            }, void 0, false, {
                fileName: "[project]/src/components/FormNavigation.js",
                lineNumber: 5,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: onNext,
                disabled: isLoading,
                className: `px-4 py-2 ml-auto ${isLastStep ? 'bg-green-600' : 'bg-blue-600'} text-white rounded hover:bg-opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed`,
                children: isLoading ? 'Processing...' : isLastStep ? 'Submit' : 'Continue'
            }, void 0, false, {
                fileName: "[project]/src/components/FormNavigation.js",
                lineNumber: 13,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/FormNavigation.js",
        lineNumber: 3,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/SearchableSelect.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>SearchableSelect
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ChevronDownIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/ChevronDownIcon.js [app-ssr] (ecmascript) <export default as ChevronDownIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$MagnifyingGlassIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MagnifyingGlassIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/MagnifyingGlassIcon.js [app-ssr] (ecmascript) <export default as MagnifyingGlassIcon>");
"use client";
;
;
;
function SearchableSelect({ options = [], value, onChange, placeholder = "Select an option...", searchPlaceholder = "Search...", name, required = false, className = "", disabled = false }) {
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [filteredOptions, setFilteredOptions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(options);
    const dropdownRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const searchInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Filter options based on search term
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (searchTerm) {
            const filtered = options.filter((option)=>option.toLowerCase().includes(searchTerm.toLowerCase()));
            setFilteredOptions(filtered);
        } else {
            setFilteredOptions(options);
        }
    }, [
        searchTerm,
        options
    ]);
    // Close dropdown when clicking outside
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
                setSearchTerm('');
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return ()=>document.removeEventListener('mousedown', handleClickOutside);
    }, []);
    // Focus search input when dropdown opens
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isOpen && searchInputRef.current) {
            searchInputRef.current.focus();
        }
    }, [
        isOpen
    ]);
    const handleSelect = (option)=>{
        onChange({
            target: {
                name,
                value: option
            }
        });
        setIsOpen(false);
        setSearchTerm('');
    };
    const handleToggle = ()=>{
        if (!disabled) {
            setIsOpen(!isOpen);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `relative ${className}`,
        ref: dropdownRef,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: handleToggle,
                disabled: disabled,
                className: `w-full px-4 py-2 rounded-xl bg-white/60 text-gray-800 outline-none border border-gray-300 focus:ring-1 focus:ring-gray-400 transition text-left flex items-center justify-between ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:bg-white/70'}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: value ? 'text-gray-800' : 'text-gray-500',
                        children: value || placeholder
                    }, void 0, false, {
                        fileName: "[project]/src/components/SearchableSelect.js",
                        lineNumber: 77,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ChevronDownIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownIcon$3e$__["ChevronDownIcon"], {
                        className: `w-4 h-4 text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`
                    }, void 0, false, {
                        fileName: "[project]/src/components/SearchableSelect.js",
                        lineNumber: 80,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/SearchableSelect.js",
                lineNumber: 69,
                columnNumber: 7
            }, this),
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-xl shadow-lg max-h-60 overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-2 border-b border-gray-200",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$MagnifyingGlassIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MagnifyingGlassIcon$3e$__["MagnifyingGlassIcon"], {
                                    className: "absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SearchableSelect.js",
                                    lineNumber: 90,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    ref: searchInputRef,
                                    type: "text",
                                    placeholder: searchPlaceholder,
                                    value: searchTerm,
                                    onChange: (e)=>setSearchTerm(e.target.value),
                                    className: "w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg outline-none focus:ring-1 focus:ring-blue-400 text-sm"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SearchableSelect.js",
                                    lineNumber: 91,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/SearchableSelect.js",
                            lineNumber: 89,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/SearchableSelect.js",
                        lineNumber: 88,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-h-48 overflow-y-auto",
                        children: filteredOptions.length > 0 ? filteredOptions.map((option, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>handleSelect(option),
                                className: `w-full px-4 py-2 text-left hover:bg-gray-100 focus:bg-gray-100 outline-none transition-colors ${value === option ? 'bg-blue-50 text-blue-600 font-medium' : 'text-gray-800'}`,
                                children: option
                            }, index, false, {
                                fileName: "[project]/src/components/SearchableSelect.js",
                                lineNumber: 106,
                                columnNumber: 17
                            }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "px-4 py-3 text-gray-500 text-sm text-center",
                            children: "No options found"
                        }, void 0, false, {
                            fileName: "[project]/src/components/SearchableSelect.js",
                            lineNumber: 118,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/SearchableSelect.js",
                        lineNumber: 103,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/SearchableSelect.js",
                lineNumber: 86,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "hidden",
                name: name,
                value: value || '',
                required: required
            }, void 0, false, {
                fileName: "[project]/src/components/SearchableSelect.js",
                lineNumber: 127,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/SearchableSelect.js",
        lineNumber: 68,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/lib/nigeria-state-and-lgas.json (json)": ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("[{\"state\":\"Adamawa\",\"alias\":\"adamawa\",\"lgas\":[\"Demsa\",\"Fufure\",\"Ganye\",\"Gayuk\",\"Gombi\",\"Grie\",\"Hong\",\"Jada\",\"Larmurde\",\"Madagali\",\"Maiha\",\"Mayo Belwa\",\"Michika\",\"Mubi North\",\"Mubi South\",\"Numan\",\"Shelleng\",\"Song\",\"Toungo\",\"Yola North\",\"Yola South\"]},{\"state\":\"Akwa Ibom\",\"alias\":\"akwa_ibom\",\"lgas\":[\"Abak\",\"Eastern Obolo\",\"Eket\",\"Esit Eket\",\"Essien Udim\",\"Etim Ekpo\",\"Etinan\",\"Ibeno\",\"Ibesikpo Asutan\",\"Ibiono-Ibom\",\"Ikot Abasi\",\"Ika\",\"Ikono\",\"Ikot Ekpene\",\"Ini\",\"Mkpat-Enin\",\"Itu\",\"Mbo\",\"Nsit-Atai\",\"Nsit-Ibom\",\"Nsit-Ubium\",\"Obot Akara\",\"Okobo\",\"Onna\",\"Oron\",\"Udung-Uko\",\"Ukanafun\",\"Oruk Anam\",\"Uruan\",\"Urue-Offong/Oruko\",\"Uyo\"]},{\"state\":\"Anambra\",\"alias\":\"anambra\",\"lgas\":[\"Aguata\",\"Anambra East\",\"Anaocha\",\"Awka North\",\"Anambra West\",\"Awka South\",\"Ayamelum\",\"Dunukofia\",\"Ekwusigo\",\"Idemili North\",\"Idemili South\",\"Ihiala\",\"Njikoka\",\"Nnewi North\",\"Nnewi South\",\"Ogbaru\",\"Onitsha North\",\"Onitsha South\",\"Orumba North\",\"Orumba South\",\"Oyi\"]},{\"state\":\"Ogun\",\"alias\":\"ogun\",\"lgas\":[\"Abeokuta North\",\"Abeokuta South\",\"Ado-Odo/Ota\",\"Egbado North\",\"Ewekoro\",\"Egbado South\",\"Ijebu North\",\"Ijebu East\",\"Ifo\",\"Ijebu Ode\",\"Ijebu North East\",\"Imeko Afon\",\"Ikenne\",\"Ipokia\",\"Odeda\",\"Obafemi Owode\",\"Odogbolu\",\"Remo North\",\"Ogun Waterside\",\"Shagamu\"]},{\"state\":\"Ondo\",\"alias\":\"ondo\",\"lgas\":[\"Akoko North-East\",\"Akoko North-West\",\"Akoko South-West\",\"Akoko South-East\",\"Akure North\",\"Akure South\",\"Ese Odo\",\"Idanre\",\"Ifedore\",\"Ilaje\",\"Irele\",\"Ile Oluji/Okeigbo\",\"Odigbo\",\"Okitipupa\",\"Ondo West\",\"Ose\",\"Ondo East\",\"Owo\"]},{\"state\":\"Rivers\",\"alias\":\"rivers\",\"lgas\":[\"Abua/Odual\",\"Ahoada East\",\"Ahoada West\",\"Andoni\",\"Akuku-Toru\",\"Asari-Toru\",\"Bonny\",\"Degema\",\"Emuoha\",\"Eleme\",\"Ikwerre\",\"Etche\",\"Gokana\",\"Khana\",\"Obio/Akpor\",\"Ogba/Egbema/Ndoni\",\"Ogu/Bolo\",\"Okrika\",\"Omuma\",\"Opobo/Nkoro\",\"Oyigbo\",\"Port Harcourt\",\"Tai\"]},{\"state\":\"Bauchi\",\"alias\":\"bauchi\",\"lgas\":[\"Alkaleri\",\"Bauchi\",\"Bogoro\",\"Damban\",\"Darazo\",\"Dass\",\"Gamawa\",\"Ganjuwa\",\"Giade\",\"Itas/Gadau\",\"Jama'are\",\"Katagum\",\"Kirfi\",\"Misau\",\"Ningi\",\"Shira\",\"Tafawa Balewa\",\"Toro\",\"Warji\",\"Zaki\"]},{\"state\":\"Benue\",\"alias\":\"benue\",\"lgas\":[\"Agatu\",\"Apa\",\"Ado\",\"Buruku\",\"Gboko\",\"Guma\",\"Gwer East\",\"Gwer West\",\"Katsina-Ala\",\"Konshisha\",\"Kwande\",\"Logo\",\"Makurdi\",\"Obi\",\"Ogbadibo\",\"Ohimini\",\"Oju\",\"Okpokwu\",\"Oturkpo\",\"Tarka\",\"Ukum\",\"Ushongo\",\"Vandeikya\"]},{\"state\":\"Borno\",\"alias\":\"borno\",\"lgas\":[\"Abadam\",\"Askira/Uba\",\"Bama\",\"Bayo\",\"Biu\",\"Chibok\",\"Damboa\",\"Dikwa\",\"Guzamala\",\"Gubio\",\"Hawul\",\"Gwoza\",\"Jere\",\"Kaga\",\"Kala/Balge\",\"Konduga\",\"Kukawa\",\"Kwaya Kusar\",\"Mafa\",\"Magumeri\",\"Maiduguri\",\"Mobbar\",\"Marte\",\"Monguno\",\"Ngala\",\"Nganzai\",\"Shani\"]},{\"state\":\"Bayelsa\",\"alias\":\"bayelsa\",\"lgas\":[\"Brass\",\"Ekeremor\",\"Kolokuma/Opokuma\",\"Nembe\",\"Ogbia\",\"Sagbama\",\"Southern Ijaw\",\"Yenagoa\"]},{\"state\":\"Cross River\",\"alias\":\"cross_river\",\"lgas\":[\"Abi\",\"Akamkpa\",\"Akpabuyo\",\"Bakassi\",\"Bekwarra\",\"Biase\",\"Boki\",\"Calabar Municipal\",\"Calabar South\",\"Etung\",\"Ikom\",\"Obanliku\",\"Obubra\",\"Obudu\",\"Odukpani\",\"Ogoja\",\"Yakuur\",\"Yala\"]},{\"state\":\"Delta\",\"alias\":\"delta\",\"lgas\":[\"Aniocha North\",\"Aniocha South\",\"Bomadi\",\"Burutu\",\"Ethiope West\",\"Ethiope East\",\"Ika North East\",\"Ika South\",\"Isoko North\",\"Isoko South\",\"Ndokwa East\",\"Ndokwa West\",\"Okpe\",\"Oshimili North\",\"Oshimili South\",\"Patani\",\"Sapele\",\"Udu\",\"Ughelli North\",\"Ukwuani\",\"Ughelli South\",\"Uvwie\",\"Warri North\",\"Warri South\",\"Warri South West\"]},{\"state\":\"Ebonyi\",\"alias\":\"ebonyi\",\"lgas\":[\"Abakaliki\",\"Afikpo North\",\"Ebonyi\",\"Afikpo South\",\"Ezza North\",\"Ikwo\",\"Ezza South\",\"Ivo\",\"Ishielu\",\"Izzi\",\"Ohaozara\",\"Ohaukwu\",\"Onicha\"]},{\"state\":\"Edo\",\"alias\":\"edo\",\"lgas\":[\"Akoko-Edo\",\"Egor\",\"Esan Central\",\"Esan North-East\",\"Esan South-East\",\"Esan West\",\"Etsako Central\",\"Etsako East\",\"Etsako West\",\"Igueben\",\"Ikpoba Okha\",\"Orhionmwon\",\"Oredo\",\"Ovia North-East\",\"Ovia South-West\",\"Owan East\",\"Owan West\",\"Uhunmwonde\"]},{\"state\":\"Ekiti\",\"alias\":\"ekiti\",\"lgas\":[\"Ado Ekiti\",\"Efon\",\"Ekiti East\",\"Ekiti South-West\",\"Ekiti West\",\"Emure\",\"Gbonyin\",\"Ido Osi\",\"Ijero\",\"Ikere\",\"Ilejemeje\",\"Irepodun/Ifelodun\",\"Ikole\",\"Ise/Orun\",\"Moba\",\"Oye\"]},{\"state\":\"Enugu\",\"alias\":\"enugu\",\"lgas\":[\"Awgu\",\"Aninri\",\"Enugu East\",\"Enugu North\",\"Ezeagu\",\"Enugu South\",\"Igbo Etiti\",\"Igbo Eze North\",\"Igbo Eze South\",\"Isi Uzo\",\"Nkanu East\",\"Nkanu West\",\"Nsukka\",\"Udenu\",\"Oji River\",\"Uzo Uwani\",\"Udi\"]},{\"state\":\"Federal Capital Territory\",\"alias\":\"abuja\",\"lgas\":[\"Abaji\",\"Bwari\",\"Gwagwalada\",\"Kuje\",\"Kwali\",\"Municipal Area Council\"]},{\"state\":\"Gombe\",\"alias\":\"gombe\",\"lgas\":[\"Akko\",\"Balanga\",\"Billiri\",\"Dukku\",\"Funakaye\",\"Gombe\",\"Kaltungo\",\"Kwami\",\"Nafada\",\"Shongom\",\"Yamaltu/Deba\"]},{\"state\":\"Jigawa\",\"alias\":\"jigawa\",\"lgas\":[\"Auyo\",\"Babura\",\"Buji\",\"Biriniwa\",\"Birnin Kudu\",\"Dutse\",\"Gagarawa\",\"Garki\",\"Gumel\",\"Guri\",\"Gwaram\",\"Gwiwa\",\"Hadejia\",\"Jahun\",\"Kafin Hausa\",\"Kazaure\",\"Kiri Kasama\",\"Kiyawa\",\"Kaugama\",\"Maigatari\",\"Malam Madori\",\"Miga\",\"Sule Tankarkar\",\"Roni\",\"Ringim\",\"Yankwashi\",\"Taura\"]},{\"state\":\"Oyo\",\"alias\":\"oyo\",\"lgas\":[\"Afijio\",\"Akinyele\",\"Atiba\",\"Atisbo\",\"Egbeda\",\"Ibadan North\",\"Ibadan North-East\",\"Ibadan North-West\",\"Ibadan South-East\",\"Ibarapa Central\",\"Ibadan South-West\",\"Ibarapa East\",\"Ido\",\"Ibarapa North\",\"Irepo\",\"Iseyin\",\"Itesiwaju\",\"Iwajowa\",\"Kajola\",\"Lagelu\",\"Ogbomosho North\",\"Ogbomosho South\",\"Ogo Oluwa\",\"Olorunsogo\",\"Oluyole\",\"Ona Ara\",\"Orelope\",\"Ori Ire\",\"Oyo\",\"Oyo East\",\"Saki East\",\"Saki West\",\"Surulere Oyo State\"]},{\"state\":\"Imo\",\"alias\":\"imo\",\"lgas\":[\"Aboh Mbaise\",\"Ahiazu Mbaise\",\"Ehime Mbano\",\"Ezinihitte\",\"Ideato North\",\"Ideato South\",\"Ihitte/Uboma\",\"Ikeduru\",\"Isiala Mbano\",\"Mbaitoli\",\"Isu\",\"Ngor Okpala\",\"Njaba\",\"Nkwerre\",\"Nwangele\",\"Obowo\",\"Oguta\",\"Ohaji/Egbema\",\"Okigwe\",\"Orlu\",\"Orsu\",\"Oru East\",\"Oru West\",\"Owerri Municipal\",\"Owerri North\",\"Unuimo\",\"Owerri West\"]},{\"state\":\"Kaduna\",\"alias\":\"kaduna\",\"lgas\":[\"Birnin Gwari\",\"Chikun\",\"Giwa\",\"Ikara\",\"Igabi\",\"Jaba\",\"Jema'a\",\"Kachia\",\"Kaduna North\",\"Kaduna South\",\"Kagarko\",\"Kajuru\",\"Kaura\",\"Kauru\",\"Kubau\",\"Kudan\",\"Lere\",\"Makarfi\",\"Sabon Gari\",\"Sanga\",\"Soba\",\"Zangon Kataf\",\"Zaria\"]},{\"state\":\"Kebbi\",\"alias\":\"kebbi\",\"lgas\":[\"Aleiro\",\"Argungu\",\"Arewa Dandi\",\"Augie\",\"Bagudo\",\"Birnin Kebbi\",\"Bunza\",\"Dandi\",\"Fakai\",\"Gwandu\",\"Jega\",\"Kalgo\",\"Koko/Besse\",\"Maiyama\",\"Ngaski\",\"Shanga\",\"Suru\",\"Sakaba\",\"Wasagu/Danko\",\"Yauri\",\"Zuru\"]},{\"state\":\"Kano\",\"alias\":\"kano\",\"lgas\":[\"Ajingi\",\"Albasu\",\"Bagwai\",\"Bebeji\",\"Bichi\",\"Bunkure\",\"Dala\",\"Dambatta\",\"Dawakin Kudu\",\"Dawakin Tofa\",\"Doguwa\",\"Fagge\",\"Gabasawa\",\"Garko\",\"Garun Mallam\",\"Gezawa\",\"Gaya\",\"Gwale\",\"Gwarzo\",\"Kabo\",\"Kano Municipal\",\"Karaye\",\"Kibiya\",\"Kiru\",\"Kumbotso\",\"Kunchi\",\"Kura\",\"Madobi\",\"Makoda\",\"Minjibir\",\"Nasarawa\",\"Rano\",\"Rimin Gado\",\"Rogo\",\"Shanono\",\"Takai\",\"Sumaila\",\"Tarauni\",\"Tofa\",\"Tsanyawa\",\"Tudun Wada\",\"Ungogo\",\"Warawa\",\"Wudil\"]},{\"state\":\"Kogi\",\"alias\":\"kogi\",\"lgas\":[\"Ajaokuta\",\"Adavi\",\"Ankpa\",\"Bassa\",\"Dekina\",\"Ibaji\",\"Idah\",\"Igalamela Odolu\",\"Ijumu\",\"Kogi\",\"Kabba/Bunu\",\"Lokoja\",\"Ofu\",\"Mopa Muro\",\"Ogori/Magongo\",\"Okehi\",\"Okene\",\"Olamaboro\",\"Omala\",\"Yagba East\",\"Yagba West\"]},{\"state\":\"Osun\",\"alias\":\"osun\",\"lgas\":[\"Aiyedire\",\"Atakunmosa West\",\"Atakunmosa East\",\"Aiyedaade\",\"Boluwaduro\",\"Boripe\",\"Ife East\",\"Ede South\",\"Ife North\",\"Ede North\",\"Ife South\",\"Ejigbo\",\"Ife Central\",\"Ifedayo\",\"Egbedore\",\"Ila\",\"Ifelodun\",\"Ilesa East\",\"Ilesa West\",\"Irepodun\",\"Irewole\",\"Isokan\",\"Iwo\",\"Obokun\",\"Odo Otin\",\"Ola Oluwa\",\"Olorunda\",\"Oriade\",\"Orolu\",\"Osogbo\"]},{\"state\":\"Sokoto\",\"alias\":\"sokoto\",\"lgas\":[\"Gudu\",\"Gwadabawa\",\"Illela\",\"Isa\",\"Kebbe\",\"Kware\",\"Rabah\",\"Sabon Birni\",\"Shagari\",\"Silame\",\"Sokoto North\",\"Sokoto South\",\"Tambuwal\",\"Tangaza\",\"Tureta\",\"Wamako\",\"Wurno\",\"Yabo\",\"Binji\",\"Bodinga\",\"Dange Shuni\",\"Goronyo\",\"Gada\"]},{\"state\":\"Plateau\",\"alias\":\"plateau\",\"lgas\":[\"Bokkos\",\"Barkin Ladi\",\"Bassa\",\"Jos East\",\"Jos North\",\"Jos South\",\"Kanam\",\"Kanke\",\"Langtang South\",\"Langtang North\",\"Mangu\",\"Mikang\",\"Pankshin\",\"Qua'an Pan\",\"Riyom\",\"Shendam\",\"Wase\"]},{\"state\":\"Taraba\",\"alias\":\"taraba\",\"lgas\":[\"Ardo Kola\",\"Bali\",\"Donga\",\"Gashaka\",\"Gassol\",\"Ibi\",\"Jalingo\",\"Karim Lamido\",\"Kumi\",\"Lau\",\"Sardauna\",\"Takum\",\"Ussa\",\"Wukari\",\"Yorro\",\"Zing\"]},{\"state\":\"Yobe\",\"alias\":\"yobe\",\"lgas\":[\"Bade\",\"Bursari\",\"Damaturu\",\"Fika\",\"Fune\",\"Geidam\",\"Gujba\",\"Gulani\",\"Jakusko\",\"Karasuwa\",\"Machina\",\"Nangere\",\"Nguru\",\"Potiskum\",\"Tarmuwa\",\"Yunusari\",\"Yusufari\"]},{\"state\":\"Zamfara\",\"alias\":\"zamfara\",\"lgas\":[\"Anka\",\"Birnin Magaji/Kiyaw\",\"Bakura\",\"Bukkuyum\",\"Bungudu\",\"Gummi\",\"Gusau\",\"Kaura Namoda\",\"Maradun\",\"Shinkafi\",\"Maru\",\"Talata Mafara\",\"Tsafe\",\"Zurmi\"]},{\"state\":\"Lagos\",\"alias\":\"lagos\",\"lgas\":[\"Agege\",\"Ajeromi-Ifelodun\",\"Alimosho\",\"Amuwo-Odofin\",\"Badagry\",\"Apapa\",\"Epe\",\"Eti Osa\",\"Ibeju-Lekki\",\"Ifako-Ijaiye\",\"Ikeja\",\"Ikorodu\",\"Kosofe\",\"Lagos Island\",\"Mushin\",\"Lagos Mainland\",\"Ojo\",\"Oshodi-Isolo\",\"Shomolu\",\"Surulere Lagos State\"]},{\"state\":\"Katsina\",\"alias\":\"katsina\",\"lgas\":[\"Bakori\",\"Batagarawa\",\"Batsari\",\"Baure\",\"Bindawa\",\"Charanchi\",\"Danja\",\"Dandume\",\"Dan Musa\",\"Daura\",\"Dutsi\",\"Dutsin Ma\",\"Faskari\",\"Funtua\",\"Ingawa\",\"Jibia\",\"Kafur\",\"Kaita\",\"Kankara\",\"Kankia\",\"Katsina\",\"Kurfi\",\"Kusada\",\"Mai'Adua\",\"Malumfashi\",\"Mani\",\"Mashi\",\"Matazu\",\"Musawa\",\"Rimi\",\"Sabuwa\",\"Safana\",\"Sandamu\",\"Zango\"]},{\"state\":\"Kwara\",\"alias\":\"kwara\",\"lgas\":[\"Asa\",\"Baruten\",\"Edu\",\"Ilorin East\",\"Ifelodun\",\"Ilorin South\",\"Ekiti Kwara State\",\"Ilorin West\",\"Irepodun\",\"Isin\",\"Kaiama\",\"Moro\",\"Offa\",\"Oke Ero\",\"Oyun\",\"Pategi\"]},{\"state\":\"Nasarawa\",\"alias\":\"nasarawa\",\"lgas\":[\"Akwanga\",\"Awe\",\"Doma\",\"Karu\",\"Keana\",\"Keffi\",\"Lafia\",\"Kokona\",\"Nasarawa Egon\",\"Nasarawa\",\"Obi\",\"Toto\",\"Wamba\"]},{\"state\":\"Niger\",\"alias\":\"niger\",\"lgas\":[\"Agaie\",\"Agwara\",\"Bida\",\"Borgu\",\"Bosso\",\"Chanchaga\",\"Edati\",\"Gbako\",\"Gurara\",\"Katcha\",\"Kontagora\",\"Lapai\",\"Lavun\",\"Mariga\",\"Magama\",\"Mokwa\",\"Mashegu\",\"Moya\",\"Paikoro\",\"Rafi\",\"Rijau\",\"Shiroro\",\"Suleja\",\"Tafa\",\"Wushishi\"]},{\"state\":\"Abia\",\"alias\":\"abia\",\"lgas\":[\"Aba North\",\"Arochukwu\",\"Aba South\",\"Bende\",\"Isiala Ngwa North\",\"Ikwuano\",\"Isiala Ngwa South\",\"Isuikwuato\",\"Obi Ngwa\",\"Ohafia\",\"Osisioma\",\"Ugwunagbo\",\"Ukwa East\",\"Ukwa West\",\"Umuahia North\",\"Umuahia South\",\"Umu Nneochi\"]}]"));}),
"[project]/src/app/internship-info/page.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>InternshipInfoPage
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FormWrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/FormWrapper.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FormNavigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/FormNavigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SearchableSelect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/SearchableSelect.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$nigeria$2d$state$2d$and$2d$lgas$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/lib/nigeria-state-and-lgas.json (json)");
"use client";
;
;
;
;
;
;
;
;
function InternshipInfoContent() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [acceptanceFile, setAcceptanceFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [start, setstart] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [completed, setcompleted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [state, setstate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [lga, setlga] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [completionFile, setCompletionFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isUploadingAcceptance, setIsUploadingAcceptance] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isUploadingCompletion, setIsUploadingCompletion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [formData, setFormData] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState(null);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useEffect(()=>{
        const info = JSON.parse(localStorage.getItem("data"));
        setstart(info?.has_started_internship ? info?.has_started_internship : false);
        setcompleted(info?.has_completed_internship ? info?.has_completed_internship : false);
        setstate(info?.state_of_internship ? info?.state_of_internship : "");
        setlga(info?.LGA_of_internship ? info?.LGA_of_internship : "");
        setFormData(info);
    }, []);
    // Extract states and LGAs from the JSON data
    const states = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$nigeria$2d$state$2d$and$2d$lgas$2e$json__$28$json$29$__["default"].map((item)=>item.state).sort();
    }, []);
    const availableLGAs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!state) return [];
        const selectedState = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$nigeria$2d$state$2d$and$2d$lgas$2e$json__$28$json$29$__["default"].find((item)=>item.state === state);
        return selectedState ? selectedState.lgas.sort() : [];
    }, [
        state
    ]);
    const handleFileChange = async (e, fileType)=>{
        const file = e.target.files[0];
        if (file) {
            const allowedTypes = [
                "image/jpeg",
                "image/jpg",
                "image/png",
                "image/gif",
                "application/pdf"
            ];
            const imageTypes = [
                "image/jpeg",
                "image/jpg",
                "image/png",
                "image/gif"
            ];
            if (!allowedTypes.includes(file.type)) {
                setError(`Invalid file type. Please upload an image or PDF`);
                e.target.value = "";
                return;
            }
            setError("");
            // Check if file is an image
            if (imageTypes.includes(file.type)) {
                try {
                    // Set loading state based on file type
                    if (fileType === "acceptance") {
                        setIsUploadingAcceptance(true);
                    } else if (fileType === "completion") {
                        setIsUploadingCompletion(true);
                    }
                    // Send POST request to backend
                    const formData = new FormData();
                    formData.append("photo", file);
                    const response = await fetch("https://backend.cosmopolitan.edu.ng", {
                        method: "POST",
                        body: formData
                    });
                    if (response.ok) {
                        const data = await response.json();
                        // Store the response based on file type
                        if (fileType === "acceptance") {
                            setAcceptanceFile(data.link);
                        } else if (fileType === "completion") {
                            setCompletionFile(data.link);
                        }
                    } else {
                        setError("Failed to upload image. Please try again.");
                        e.target.value = "";
                    }
                } catch (error) {
                    console.error("Error uploading image:", error);
                    setError("Network error while uploading image. Please try again.");
                    e.target.value = "";
                } finally{
                    // Clear loading state
                    if (fileType === "acceptance") {
                        setIsUploadingAcceptance(false);
                    } else if (fileType === "completion") {
                        setIsUploadingCompletion(false);
                    }
                }
            } else {
                // If it's a PDF, handle as before
                if (fileType === "acceptance") {
                    setAcceptanceFile(file.link);
                } else if (fileType === "completion") {
                    setCompletionFile(file.link);
                }
            }
        }
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        // Try to get trainee ID from URL params first, then fallback to stored data
        const traineeId = formData.id;
        if (!traineeId) {
            setError("Trainee ID not found. Please log in again.");
            return;
        }
        if (!state || !lga) {
            setError("Please fill in all required fields");
            return;
        }
        if (start || completed) {
            if (start && !acceptanceFile) {
                setError("Please upload or provide URL for acceptance letter");
                return;
            }
        }
        setIsLoading(true);
        setError("");
        try {
            const submitFormData = new FormData();
            submitFormData.append("traineeId", traineeId);
            submitFormData.append("has_started_internship", start);
            submitFormData.append("has_completed_internship", completed);
            submitFormData.append("state_of_internship", state);
            submitFormData.append("LGA_of_internship", lga);
            submitFormData.append("internship_letter_url", acceptanceFile);
            submitFormData.append("completion_letter_url", completionFile);
            if (acceptanceFile) {
                submitFormData.append("acceptancePhoto", acceptanceFile);
            }
            if (completionFile) {
                submitFormData.append("completionPhoto", completionFile);
            }
            const response = await fetch("/api/internship", {
                method: "POST",
                body: submitFormData
            });
            if (response.ok) {
                router.push("/thank-you");
            } else {
                const errorData = await response.json();
                setError(errorData.error || "An error occurred while submitting the form");
            }
        } catch (error) {
            console.error("Error:", error);
            setError("Network error. Please check your connection and try again.");
        } finally{
            setIsLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gradient-to-br from-purple-200 via-pink-100 to-blue-200 flex items-center justify-center px-4 font-inter",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                opacity: 0,
                y: 30
            },
            animate: {
                opacity: 1,
                y: 0
            },
            transition: {
                duration: 0.6
            },
            className: "w-full max-w-3xl bg-white/30 backdrop-blur-md shadow-lg border border-white/30 rounded-3xl p-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FormWrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                title: "Internship Information",
                description: "Please provide details about your internship",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleSubmit,
                    children: [
                        error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-4 p-3 bg-red-100/60 border border-red-300 rounded-xl text-red-700 text-sm",
                            children: error
                        }, void 0, false, {
                            fileName: "[project]/src/app/internship-info/page.js",
                            lineNumber: 206,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-6 mb-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0 items-start md:items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center space-x-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "checkbox",
                                                    id: "has_started_internship",
                                                    name: "has_started_internship",
                                                    checked: start,
                                                    onChange: (r)=>setstart(r.target.value),
                                                    className: "w-3 h-3 text-blue-600 bg-white border border-gray-300 rounded focus:ring-1 focus:ring-gray-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/internship-info/page.js",
                                                    lineNumber: 214,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    htmlFor: "has_started_internship",
                                                    className: "text-gray-800 text-sm font-small",
                                                    children: "I have started my internship"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/internship-info/page.js",
                                                    lineNumber: 222,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/internship-info/page.js",
                                            lineNumber: 213,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center space-x-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "checkbox",
                                                    id: "has_completed_internship",
                                                    name: "has_completed_internship",
                                                    checked: completed,
                                                    onChange: (r)=>setcompleted(r.target.value),
                                                    className: "w-3 h-3 text-blue-600 bg-white border border-gray-300 rounded focus:ring-1 focus:ring-gray-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/internship-info/page.js",
                                                    lineNumber: 231,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    htmlFor: "has_completed_internship",
                                                    className: "text-gray-800 text-sm font-small",
                                                    children: "I have completed my internship"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/internship-info/page.js",
                                                    lineNumber: 239,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/internship-info/page.js",
                                            lineNumber: 230,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/internship-info/page.js",
                                    lineNumber: 212,
                                    columnNumber: 15
                                }, this),
                                start && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-gray-800 text-sm mb-2 font-small",
                                                    children: "Upload Acceptance Letter (Photo/PDF)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/internship-info/page.js",
                                                    lineNumber: 251,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "file",
                                                    accept: "image/*,.pdf",
                                                    onChange: (e)=>handleFileChange(e, "acceptance"),
                                                    disabled: isUploadingAcceptance,
                                                    className: "w-full px-4 py-2 rounded-xl bg-white/60 text-gray-800 outline-none border border-gray-300 focus:ring-1 focus:ring-gray-400 transition file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100 disabled:opacity-50 disabled:cursor-not-allowed"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/internship-info/page.js",
                                                    lineNumber: 254,
                                                    columnNumber: 21
                                                }, this),
                                                isUploadingAcceptance && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-blue-600 mt-1 animate-pulse",
                                                    children: "Uploading acceptance letter..."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/internship-info/page.js",
                                                    lineNumber: 262,
                                                    columnNumber: 23
                                                }, this),
                                                acceptanceFile && !isUploadingAcceptance && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-green-600 mt-1",
                                                    children: "✓ Acceptance letter uploaded successfully"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/internship-info/page.js",
                                                    lineNumber: 267,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/internship-info/page.js",
                                            lineNumber: 250,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-gray-800 text-sm mb-2 font-small",
                                                    children: "Or Enter Acceptance Letter URL (Optional)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/internship-info/page.js",
                                                    lineNumber: 273,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    readOnly: true,
                                                    value: acceptanceFile,
                                                    placeholder: "https://example.com/acceptance-letter",
                                                    className: "w-full px-4 py-2 rounded-xl bg-white/60 text-gray-800 placeholder-gray-500 outline-none border border-gray-300 focus:ring-1 focus:ring-gray-400 transition"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/internship-info/page.js",
                                                    lineNumber: 276,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/internship-info/page.js",
                                            lineNumber: 272,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true),
                                completed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-gray-800 text-sm mb-2 font-small",
                                                    children: "Upload Completion Letter (Photo/PDF)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/internship-info/page.js",
                                                    lineNumber: 290,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "file",
                                                    accept: "image/*,.pdf",
                                                    onChange: (e)=>handleFileChange(e, "completion"),
                                                    disabled: isUploadingCompletion,
                                                    className: "w-full px-4 py-2 rounded-xl bg-white/60 text-gray-800 outline-none border border-gray-300 focus:ring-1 focus:ring-gray-400 transition file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100 disabled:opacity-50 disabled:cursor-not-allowed"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/internship-info/page.js",
                                                    lineNumber: 293,
                                                    columnNumber: 21
                                                }, this),
                                                isUploadingCompletion && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-blue-600 mt-1 animate-pulse",
                                                    children: "Uploading completion letter..."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/internship-info/page.js",
                                                    lineNumber: 301,
                                                    columnNumber: 23
                                                }, this),
                                                completionFile && !isUploadingCompletion && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-green-600 mt-1",
                                                    children: "✓ Completion letter uploaded successfully"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/internship-info/page.js",
                                                    lineNumber: 306,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/internship-info/page.js",
                                            lineNumber: 289,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-gray-800 text-sm mb-2 font-small",
                                                    children: "Or Enter Completion Letter URL (Optional)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/internship-info/page.js",
                                                    lineNumber: 312,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    readOnly: true,
                                                    value: completionFile,
                                                    placeholder: "https://example.com/completion-letter",
                                                    className: "w-full px-4 py-2 rounded-xl bg-white/60 text-gray-800 placeholder-gray-500 outline-none border border-gray-300 focus:ring-1 focus:ring-gray-400 transition"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/internship-info/page.js",
                                                    lineNumber: 315,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/internship-info/page.js",
                                            lineNumber: 311,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-gray-800 text-sm mb-2 font-small",
                                            children: "State of Internship"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/internship-info/page.js",
                                            lineNumber: 327,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SearchableSelect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            options: states,
                                            value: state,
                                            onChange: (r)=>setstate(r.target.value),
                                            name: "state_of_internship",
                                            placeholder: "Select state...",
                                            searchPlaceholder: "Search states...",
                                            required: true
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/internship-info/page.js",
                                            lineNumber: 330,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/internship-info/page.js",
                                    lineNumber: 326,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-gray-800 text-sm mb-2 font-small",
                                            children: "LGA of Internship"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/internship-info/page.js",
                                            lineNumber: 342,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SearchableSelect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            options: availableLGAs,
                                            value: lga,
                                            onChange: (e)=>setlga(e.target.value),
                                            name: "LGA_of_internship",
                                            placeholder: state ? "Select LGA..." : "Select state first",
                                            searchPlaceholder: "Search LGAs...",
                                            disabled: !state,
                                            required: true
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/internship-info/page.js",
                                            lineNumber: 345,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/internship-info/page.js",
                                    lineNumber: 341,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/internship-info/page.js",
                            lineNumber: 210,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FormNavigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            currentStep: 4,
                            totalSteps: 5,
                            onNext: handleSubmit,
                            onBack: ()=>router.back(),
                            isLastStep: true,
                            isLoading: isLoading
                        }, void 0, false, {
                            fileName: "[project]/src/app/internship-info/page.js",
                            lineNumber: 362,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/internship-info/page.js",
                    lineNumber: 204,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/internship-info/page.js",
                lineNumber: 200,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/internship-info/page.js",
            lineNumber: 194,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/internship-info/page.js",
        lineNumber: 193,
        columnNumber: 5
    }, this);
}
function InternshipInfoPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Suspense"], {
        fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-200 via-pink-100 to-blue-200",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-lg font-medium text-gray-700",
                children: "Loading..."
            }, void 0, false, {
                fileName: "[project]/src/app/internship-info/page.js",
                lineNumber: 382,
                columnNumber: 11
            }, void 0)
        }, void 0, false, {
            fileName: "[project]/src/app/internship-info/page.js",
            lineNumber: 381,
            columnNumber: 9
        }, void 0),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(InternshipInfoContent, {}, void 0, false, {
            fileName: "[project]/src/app/internship-info/page.js",
            lineNumber: 386,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/internship-info/page.js",
        lineNumber: 379,
        columnNumber: 5
    }, this);
}
}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__c9eef0e3._.js.map