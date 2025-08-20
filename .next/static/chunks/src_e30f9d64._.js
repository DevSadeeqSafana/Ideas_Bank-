(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

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
"[project]/src/app/page.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>WelcomePage
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useUserInfo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useUserInfo.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function WelcomePage() {
    _s();
    const { clearUserInfo } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useUserInfo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUserInfo"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WelcomePage.useEffect": ()=>{
            // Clear all user data and traineeId from localStorage when landing on home page
            clearUserInfo();
            // Also directly clear localStorage items to ensure complete reset
            if ("TURBOPACK compile-time truthy", 1) {
                localStorage.removeItem('data');
                localStorage.removeItem('traineeId');
            }
        }
    }["WelcomePage.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gradient-to-br from-purple-200 via-pink-100 to-blue-200 flex items-center justify-center p-6 font-inter",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-32 h-32 mx-auto mb-6 overflow-hidden rounded-full shadow-lg border-4 border-white/30",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-4xl font-semibold text-gray-800 mb-4 drop-shadow-sm",
                    children: "Welcome, Trainee!"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 33,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-lg text-gray-700 mb-8",
                    children: "We’re excited to have you back. Please complete your bank information registration."
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 37,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/login",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
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
_s(WelcomePage, "PVqXRpNLMaKlp78xxQqz3EBpyyI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useUserInfo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUserInfo"]
    ];
});
_c = WelcomePage;
var _c;
__turbopack_context__.k.register(_c, "WelcomePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_e30f9d64._.js.map