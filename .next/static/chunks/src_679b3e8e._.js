(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/components/FormWrapper.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>FormWrapper
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
;
;
function FormWrapper(param) {
    let { children, title, description } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-2xl font-bold mb-2 text-blue-600",
                children: title
            }, void 0, false, {
                fileName: "[project]/src/components/FormWrapper.js",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
_c = FormWrapper;
var _c;
__turbopack_context__.k.register(_c, "FormWrapper");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/FormNavigation.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>FormNavigation
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function FormNavigation(param) {
    let { currentStep, totalSteps, onNext, onBack, isLastStep, isLoading } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex justify-between mt-6",
        children: [
            currentStep > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: onBack,
                disabled: isLoading,
                className: "px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 transition disabled:opacity-50 disabled:cursor-not-allowed",
                children: "Back"
            }, void 0, false, {
                fileName: "[project]/src/components/FormNavigation.js",
                lineNumber: 5,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: onNext,
                disabled: isLoading,
                className: "px-4 py-2 ml-auto ".concat(isLastStep ? 'bg-green-600' : 'bg-blue-600', " text-white rounded hover:bg-opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed"),
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
_c = FormNavigation;
var _c;
__turbopack_context__.k.register(_c, "FormNavigation");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/cryptoUtil.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "decrypt": ()=>decrypt,
    "encrypt": ()=>encrypt
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/compiled/buffer/index.js [app-client] (ecmascript)");
function encrypt(text) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(String(text).toString(), 'utf8').toString('base64');
}
function decrypt(encodedText) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(encodedText, 'base64').toString('utf8');
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/traineeUtils.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "extractTraineeId": ()=>extractTraineeId,
    "getTraineeIdFromParams": ()=>getTraineeIdFromParams,
    "getTraineeIdFromStorage": ()=>getTraineeIdFromStorage,
    "isValidTraineeId": ()=>isValidTraineeId,
    "normalizeTraineeData": ()=>normalizeTraineeData,
    "normalizeTraineeId": ()=>normalizeTraineeId,
    "storeTraineeId": ()=>storeTraineeId
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cryptoUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/cryptoUtil.js [app-client] (ecmascript)");
;
function extractTraineeId(data) {
    if (!data || typeof data !== 'object') {
        return null;
    }
    // Try different possible field names in order of preference
    const possibleFields = [
        'traineeId',
        'id',
        'ID',
        'SN',
        'sn',
        'trainee_sn',
        'trainee_id'
    ];
    for (const field of possibleFields){
        if (data[field] != null && data[field] !== '') {
            return data[field];
        }
    }
    return null;
}
function getTraineeIdFromParams(searchParams) {
    let paramName = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 'traineeId', encrypted = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
    if (!searchParams) return null;
    // Try different parameter names
    const possibleParams = [
        paramName,
        'id',
        'traineeId'
    ];
    for (const param of possibleParams){
        const value = searchParams.get(param);
        if (value) {
            try {
                return encrypted ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cryptoUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decrypt"])(value) : value;
            } catch (error) {
                console.error("Error decrypting trainee ID from param ".concat(param, ":"), error);
                // If decryption fails, try returning the raw value
                return value;
            }
        }
    }
    return null;
}
function getTraineeIdFromStorage() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        // First try the dedicated traineeId storage
        const directId = localStorage.getItem('traineeId');
        if (directId) return directId;
        // Fallback to extracting from stored data
        const storedData = localStorage.getItem('data');
        if (storedData) {
            const parsed = JSON.parse(storedData);
            return extractTraineeId(parsed);
        }
    } catch (error) {
        console.error('Error reading trainee ID from localStorage:', error);
    }
    return null;
}
function storeTraineeId(traineeId) {
    let additionalData = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        if (traineeId != null && traineeId !== '') {
            localStorage.setItem('traineeId', String(traineeId));
            if (additionalData) {
                const existingData = localStorage.getItem('data');
                const dataToStore = existingData ? {
                    ...JSON.parse(existingData),
                    ...additionalData,
                    traineeId
                } : {
                    ...additionalData,
                    traineeId
                };
                localStorage.setItem('data', JSON.stringify(dataToStore));
            }
        }
    } catch (error) {
        console.error('Error storing trainee ID:', error);
    }
}
function isValidTraineeId(traineeId) {
    if (traineeId == null || traineeId === '') {
        return false;
    }
    const stringId = String(traineeId).trim();
    // Check if it's a valid number or non-empty string
    return stringId.length > 0 && !isNaN(Number(stringId));
}
function normalizeTraineeId(traineeId) {
    if (!isValidTraineeId(traineeId)) {
        return null;
    }
    const numericId = Number(traineeId);
    return isNaN(numericId) ? null : numericId;
}
function normalizeTraineeData(rawData) {
    if (!rawData || typeof rawData !== 'object') {
        return {};
    }
    const traineeId = extractTraineeId(rawData);
    return {
        ...rawData,
        traineeId: normalizeTraineeId(traineeId),
        // Ensure consistent field names
        fullname: rawData.fullname || rawData.FullName || rawData.full_name,
        registrationno: rawData.registrationno || rawData.registrationNo || rawData.registration_no
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/hooks/useUserInfo.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "useFormData": ()=>useFormData,
    "useUserInfo": ()=>useUserInfo
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$traineeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/traineeUtils.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
const USER_INFO_KEY = 'userInfo';
// Helper function to get initial data from localStorage
const getInitialUserData = ()=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const data = localStorage.getItem('data');
        const traineeId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$traineeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTraineeIdFromStorage"])();
        if (data) {
            const parsed = JSON.parse(data);
            const normalizedData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$traineeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeTraineeData"])({
                ...parsed,
                traineeId: traineeId || (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$traineeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractTraineeId"])(parsed)
            });
            return normalizedData;
        }
    } catch (error) {
        console.error('Error reading from localStorage:', error);
    }
    return null;
};
// Helper function to sync with localStorage
const syncWithLocalStorage = (data)=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        if (data) {
            const normalizedData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$traineeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeTraineeData"])(data);
            localStorage.setItem('data', JSON.stringify(normalizedData));
            const traineeId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$traineeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractTraineeId"])(normalizedData);
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$traineeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidTraineeId"])(traineeId)) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$traineeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["storeTraineeId"])(traineeId);
            }
        } else {
            localStorage.removeItem('data');
            localStorage.removeItem('traineeId');
        }
    } catch (error) {
        console.error('Error syncing with localStorage:', error);
    }
};
const useUserInfo = ()=>{
    _s();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    // Query to get user info
    const query = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            USER_INFO_KEY
        ],
        queryFn: {
            "useUserInfo.useQuery[query]": ()=>getInitialUserData()
        }["useUserInfo.useQuery[query]"],
        staleTime: Infinity,
        gcTime: 1000 * 60 * 60 * 24
    });
    // Mutation to update user info
    const updateMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useUserInfo.useMutation[updateMutation]": (newData)=>{
                const currentData = queryClient.getQueryData([
                    USER_INFO_KEY
                ]) || {};
                const updatedData = {
                    ...currentData,
                    ...newData
                };
                syncWithLocalStorage(updatedData);
                return updatedData;
            }
        }["useUserInfo.useMutation[updateMutation]"],
        onSuccess: {
            "useUserInfo.useMutation[updateMutation]": (updatedData)=>{
                queryClient.setQueryData([
                    USER_INFO_KEY
                ], updatedData);
            }
        }["useUserInfo.useMutation[updateMutation]"]
    });
    // Mutation to clear user info
    const clearMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useUserInfo.useMutation[clearMutation]": ()=>{
                syncWithLocalStorage(null);
                return null;
            }
        }["useUserInfo.useMutation[clearMutation]"],
        onSuccess: {
            "useUserInfo.useMutation[clearMutation]": ()=>{
                queryClient.setQueryData([
                    USER_INFO_KEY
                ], null);
            }
        }["useUserInfo.useMutation[clearMutation]"]
    });
    return {
        // Data
        userInfo: query.data,
        isLoading: query.isLoading,
        error: query.error,
        // Actions
        updateUserInfo: (data)=>updateMutation.mutate(data),
        clearUserInfo: ()=>clearMutation.mutate(),
        // Mutation states
        isUpdating: updateMutation.isPending,
        updateError: updateMutation.error,
        // Utilities
        getTraineeId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
            "useUserInfo.useCallback": ()=>{
                const data = query.data;
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$traineeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractTraineeId"])(data);
            }
        }["useUserInfo.useCallback"], [
            query.data
        ]),
        // Refresh from localStorage (useful if data was updated externally)
        refresh: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
            "useUserInfo.useCallback": ()=>queryClient.invalidateQueries({
                    queryKey: [
                        USER_INFO_KEY
                    ]
                })
        }["useUserInfo.useCallback"], [
            queryClient
        ]),
        // Check if user has any data stored
        hasUserData: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
            "useUserInfo.useCallback": ()=>!!query.data
        }["useUserInfo.useCallback"], [
            query.data
        ])
    };
};
_s(useUserInfo, "XECKH+7g28q2cccE2XDMtku9Jec=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
const useFormData = (formType)=>{
    _s1();
    const { userInfo, updateUserInfo, isUpdating } = useUserInfo();
    const getFormData = ()=>{
        if (!userInfo) return {};
        switch(formType){
            case 'personal':
                return {
                    fullname: userInfo.fullname || '',
                    registrationno: userInfo.registrationno || '',
                    email: userInfo.email || '',
                    phone: userInfo.phone || '',
                    gender: userInfo.gender || '',
                    traineeId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$traineeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractTraineeId"])(userInfo)
                };
            case 'bank':
                return {
                    bank_name: userInfo.bank_name || '',
                    account_number: userInfo.account_number || '',
                    account_name: userInfo.account_name || '',
                    bvn: userInfo.bvn || '',
                    traineeId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$traineeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractTraineeId"])(userInfo)
                };
            case 'internship':
                return {
                    has_started_internship: userInfo.has_started_internship || false,
                    internship_letter_url: userInfo.internship_letter_url || '',
                    has_completed_internship: userInfo.has_completed_internship || false,
                    completion_letter_url: userInfo.completion_letter_url || '',
                    state_of_internship: userInfo.state_of_internship || '',
                    LGA_of_internship: userInfo.LGA_of_internship || ''
                };
            default:
                return userInfo || {};
        }
    };
    const updateFormData = (formData)=>{
        updateUserInfo(formData);
    };
    return {
        formData: getFormData(),
        updateFormData,
        isUpdating
    };
};
_s1(useFormData, "aq9YyiiSaae43tKu73lnfe+g6is=", false, function() {
    return [
        useUserInfo
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/bank-info/page.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>BankInfoPage
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FormWrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/FormWrapper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FormNavigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/FormNavigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useUserInfo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useUserInfo.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$traineeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/traineeUtils.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function BankInfoContent() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const [bvn, setbvn] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [name, setname] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [bank, setbank] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [number, setnumber] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const { updateFormData, isUpdating } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useUserInfo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFormData"])('bank');
    const { getTraineeId } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useUserInfo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUserInfo"])();
    const [formData, setFormData] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(null);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "BankInfoContent.useEffect": ()=>{
            const info = JSON.parse(localStorage.getItem("data"));
            console.log(info);
            setFormData(info);
        }
    }["BankInfoContent.useEffect"], []);
    const handleChange = (e)=>{
        const { name, value } = e.target;
        const updatedFormData = {
            ...formData,
            [name]: value
        };
        updateFormData(updatedFormData);
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setError('');
        const traineeId = formData.id;
        if (!traineeId) {
            setError('Trainee ID not found. Please login again.');
            console.error('Trainee ID not found in URL params or stored data');
            router.push('/login');
            return;
        }
        const payload = {
            ...formData,
            traineeId: Number(traineeId)
        };
        try {
            const response = await fetch('/api/trainee', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });
            if (!response.ok) {
                const text = await response.text();
                console.error('API error:', text);
                return;
            }
            const data = await response.json();
            if (response.ok) {
                // Update the stored data with the response
                updateFormData(data === null || data === void 0 ? void 0 : data.info);
            // router.push(`/verify-info`);
            } else {
                const errorData = await response.json();
                console.error('Submission failed:', errorData);
            }
        } catch (error1) {
            console.error('Error:', error1);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gradient-to-br from-purple-300 via-pink-200 to-blue-200 flex items-center justify-center px-4 font-inter",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-2xl p-8 rounded-3xl backdrop-blur-md bg-white/10 border border-white/20 shadow-xl",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FormWrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                title: "Bank Information",
                description: "Please provide your bank details",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleSubmit,
                    children: [
                        error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-4 p-3 bg-red-100/60 border border-red-300 rounded-xl text-red-700 text-sm",
                            children: error
                        }, void 0, false, {
                            fileName: "[project]/src/app/bank-info/page.js",
                            lineNumber: 86,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 gap-6 mb-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm text-black mb-2 font-medium",
                                            children: "BVN"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/bank-info/page.js",
                                            lineNumber: 92,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            name: "bvn",
                                            value: bvn,
                                            onChange: (e)=>setbvn(e.target.value),
                                            // placeholder="e.g., 22334455667"
                                            className: "w-full px-4 py-2 rounded-xl bg-white/40 text-black placeholder-gray-600 outline-none border border-gray-300 focus:ring-2 focus:ring-gray-400 transition",
                                            required: true
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/bank-info/page.js",
                                            lineNumber: 95,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/bank-info/page.js",
                                    lineNumber: 91,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm text-black mb-2 font-medium",
                                            children: "Account Name"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/bank-info/page.js",
                                            lineNumber: 106,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            name: "account_name",
                                            value: name,
                                            onChange: (e)=>setname(e.target.value),
                                            // placeholder="e.g., John Doe"
                                            className: "w-full px-4 py-2 rounded-xl bg-white/40 text-black placeholder-gray-600 outline-none border border-gray-300 focus:ring-2 focus:ring-gray-400 transition",
                                            required: true
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/bank-info/page.js",
                                            lineNumber: 109,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/bank-info/page.js",
                                    lineNumber: 105,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm text-black mb-2 font-medium",
                                            children: "Bank Name"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/bank-info/page.js",
                                            lineNumber: 120,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            name: "bank_name",
                                            value: bank,
                                            onChange: (e)=>setbank(e.target.value),
                                            // placeholder="e.g., Zenith Bank"
                                            className: "w-full px-4 py-2 rounded-xl ring-black bg-white/40 text-black placeholder-gray-600 outline-none border border-gray-300 focus:ring-2 focus:ring-gray-400 transition",
                                            required: true
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/bank-info/page.js",
                                            lineNumber: 123,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/bank-info/page.js",
                                    lineNumber: 119,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm text-black mb-2 font-medium",
                                            children: "Account Number"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/bank-info/page.js",
                                            lineNumber: 135,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            name: "account_number",
                                            value: number,
                                            onChange: (e)=>setnumber(e.target.value),
                                            // placeholder="e.g., 1234567890"
                                            className: "w-full px-4 py-2 rounded-xl bg-white/40 text-black placeholder-gray-600 outline-none border border-gray-300 focus:ring-2 focus:ring-gray-400 transition",
                                            required: true
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/bank-info/page.js",
                                            lineNumber: 138,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/bank-info/page.js",
                                    lineNumber: 134,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/bank-info/page.js",
                            lineNumber: 90,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FormNavigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            currentStep: 2,
                            totalSteps: 5,
                            onNext: handleSubmit,
                            onBack: ()=>router.back()
                        }, void 0, false, {
                            fileName: "[project]/src/app/bank-info/page.js",
                            lineNumber: 151,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/bank-info/page.js",
                    lineNumber: 84,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/bank-info/page.js",
                lineNumber: 80,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/bank-info/page.js",
            lineNumber: 79,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/bank-info/page.js",
        lineNumber: 78,
        columnNumber: 5
    }, this);
}
_s(BankInfoContent, "cvRBcZT5il5kFfcJO6tHbSFVs3I=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useUserInfo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFormData"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useUserInfo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUserInfo"]
    ];
});
_c = BankInfoContent;
function BankInfoPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
        fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-300 via-pink-200 to-blue-200",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-lg font-medium text-gray-700",
                children: "Loading..."
            }, void 0, false, {
                fileName: "[project]/src/app/bank-info/page.js",
                lineNumber: 168,
                columnNumber: 9
            }, void 0)
        }, void 0, false, {
            fileName: "[project]/src/app/bank-info/page.js",
            lineNumber: 167,
            columnNumber: 7
        }, void 0),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BankInfoContent, {}, void 0, false, {
            fileName: "[project]/src/app/bank-info/page.js",
            lineNumber: 171,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/bank-info/page.js",
        lineNumber: 166,
        columnNumber: 5
    }, this);
}
_c1 = BankInfoPage;
var _c, _c1;
__turbopack_context__.k.register(_c, "BankInfoContent");
__turbopack_context__.k.register(_c1, "BankInfoPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_679b3e8e._.js.map