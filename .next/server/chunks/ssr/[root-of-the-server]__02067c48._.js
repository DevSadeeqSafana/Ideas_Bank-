module.exports = {

"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
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
"[project]/src/lib/cryptoUtil.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "decrypt": ()=>decrypt,
    "encrypt": ()=>encrypt
});
function encrypt(text) {
    return Buffer.from(String(text).toString(), 'utf8').toString('base64');
}
function decrypt(encodedText) {
    return Buffer.from(encodedText, 'base64').toString('utf8');
}
}),
"[project]/src/lib/traineeUtils.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "extractTraineeId": ()=>extractTraineeId,
    "getTraineeIdFromParams": ()=>getTraineeIdFromParams,
    "getTraineeIdFromStorage": ()=>getTraineeIdFromStorage,
    "isValidTraineeId": ()=>isValidTraineeId,
    "normalizeTraineeData": ()=>normalizeTraineeData,
    "normalizeTraineeId": ()=>normalizeTraineeId,
    "storeTraineeId": ()=>storeTraineeId
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cryptoUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/cryptoUtil.js [app-ssr] (ecmascript)");
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
function getTraineeIdFromParams(searchParams, paramName = 'traineeId', encrypted = false) {
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
                return encrypted ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cryptoUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decrypt"])(value) : value;
            } catch (error) {
                console.error(`Error decrypting trainee ID from param ${param}:`, error);
                // If decryption fails, try returning the raw value
                return value;
            }
        }
    }
    return null;
}
function getTraineeIdFromStorage() {
    if ("TURBOPACK compile-time truthy", 1) return null;
    //TURBOPACK unreachable
    ;
}
function storeTraineeId(traineeId, additionalData = null) {
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
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
}),
"[project]/src/hooks/useUserInfo.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "useFormData": ()=>useFormData,
    "useUserInfo": ()=>useUserInfo
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$traineeUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/traineeUtils.js [app-ssr] (ecmascript)");
"use client";
;
;
;
const USER_INFO_KEY = 'userInfo';
// Helper function to get initial data from localStorage
const getInitialUserData = ()=>{
    if ("TURBOPACK compile-time truthy", 1) return null;
    //TURBOPACK unreachable
    ;
};
// Helper function to sync with localStorage
const syncWithLocalStorage = (data)=>{
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
};
const useUserInfo = ()=>{
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQueryClient"])();
    // Query to get user info
    const query = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            USER_INFO_KEY
        ],
        queryFn: ()=>getInitialUserData(),
        staleTime: Infinity,
        gcTime: 1000 * 60 * 60 * 24
    });
    // Mutation to update user info
    const updateMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: (newData)=>{
            const currentData = queryClient.getQueryData([
                USER_INFO_KEY
            ]) || {};
            const updatedData = {
                ...currentData,
                ...newData
            };
            syncWithLocalStorage(updatedData);
            return updatedData;
        },
        onSuccess: (updatedData)=>{
            queryClient.setQueryData([
                USER_INFO_KEY
            ], updatedData);
        }
    });
    // Mutation to clear user info
    const clearMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: ()=>{
            syncWithLocalStorage(null);
            return null;
        },
        onSuccess: ()=>{
            queryClient.setQueryData([
                USER_INFO_KEY
            ], null);
        }
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
        getTraineeId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
            const data = query.data;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$traineeUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["extractTraineeId"])(data);
        }, [
            query.data
        ]),
        // Refresh from localStorage (useful if data was updated externally)
        refresh: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>queryClient.invalidateQueries({
                queryKey: [
                    USER_INFO_KEY
                ]
            }), [
            queryClient
        ]),
        // Check if user has any data stored
        hasUserData: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>!!query.data, [
            query.data
        ])
    };
};
const useFormData = (formType)=>{
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
                    traineeId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$traineeUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["extractTraineeId"])(userInfo)
                };
            case 'bank':
                return {
                    bank_name: userInfo.bank_name || '',
                    account_number: userInfo.account_number || '',
                    account_name: userInfo.account_name || '',
                    bvn: userInfo.bvn || '',
                    traineeId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$traineeUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["extractTraineeId"])(userInfo)
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
}),
"[project]/src/app/page.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>WelcomePage
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useUserInfo$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useUserInfo.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function WelcomePage() {
    const { clearUserInfo } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useUserInfo$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useUserInfo"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Clear all user data and traineeId from localStorage when landing on home page
        clearUserInfo();
        // Also directly clear localStorage items to ensure complete reset
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gradient-to-br from-purple-200 via-pink-100 to-blue-200 flex items-center justify-center p-6 font-inter",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                opacity: 0,
                y: -30
            },
            animate: {
                opacity: 1,
                y: 0
            },
            transition: {
                duration: 0.8
            },
            className: "backdrop-blur-lg bg-white/30 border border-white/40 shadow-xl rounded-3xl p-10 max-w-md w-full text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-32 h-32 mx-auto mb-6 overflow-hidden rounded-full shadow-lg border-4 border-white/30",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: "/ideas-logo.jpg",
                        alt: "Logo",
                        className: "object-cover w-full h-full"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 30,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 29,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-4xl font-semibold text-gray-800 mb-4 drop-shadow-sm",
                    children: "Welcome, Trainee!"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 33,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-lg text-gray-700 mb-8",
                    children: "We’re excited to have you back. Please complete your bank information registration."
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 37,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    href: "/login",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                        whileHover: {
                            scale: 1.05
                        },
                        whileTap: {
                            scale: 0.95
                        },
                        className: "px-8 py-3 rounded-xl bg-gradient-to-r from-blue-300 to-indigo-300 text-white font-medium shadow-md hover:from-blue-700 hover:to-indigo-700 transition-all",
                        children: "Click to Continue"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 42,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 41,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 23,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/page.js",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__02067c48._.js.map