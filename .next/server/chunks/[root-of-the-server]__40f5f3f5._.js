module.exports = {

"[project]/.next-internal/server/app/api/trainee/route/actions.js [app-rsc] (server actions loader, ecmascript)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
}}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

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
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}}),
"[project]/src/app/api/trainee/route.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "POST": ()=>POST
});
async function POST(request, { params }) {
    const { id } = params;
    try {
        const data = await request.json();
        const { bank_name, account_number, account_name, bvn } = data;
        // Basic validation
        if (!id) {
            return NextResponse.json({
                error: 'Trainee ID is required'
            }, {
                status: 400
            });
        }
        if (!bank_name || !account_number || !account_name || !bvn) {
            return NextResponse.json({
                error: 'All bank fields are required'
            }, {
                status: 400
            });
        }
        const connection = await pool.getConnection();
        try {
            await connection.beginTransaction();
            // Optional: check if trainee exists
            const [existingTrainee] = await connection.query('SELECT id FROM trainees WHERE id = ?', [
                id
            ]);
            if (existingTrainee.length === 0) {
                await connection.rollback();
                return NextResponse.json({
                    error: 'Trainee not found'
                }, {
                    status: 404
                });
            }
            // Update bank info
            const [result] = await connection.query(`UPDATE trainees SET 
          bank_name = ?, account_number = ?, account_name = ?, bvn = ?
          WHERE id = ?`, [
                bank_name,
                account_number,
                account_name,
                bvn,
                id
            ]);
            if (result.affectedRows === 0) {
                await connection.rollback();
                return NextResponse.json({
                    error: 'No trainee updated'
                }, {
                    status: 500
                });
            }
            await connection.commit();
            return NextResponse.json({
                message: 'Trainee updated successfully'
            }, {
                status: 200
            });
        } catch (error) {
            await connection.rollback();
            console.error('Transaction error:', error);
            return NextResponse.json({
                error: 'Transaction failed'
            }, {
                status: 500
            });
        } finally{
            connection.release();
        }
    } catch (error) {
        console.error('Update trainee error:', error);
        return NextResponse.json({
            error: 'Internal server error'
        }, {
            status: 500
        });
    }
}
}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__40f5f3f5._.js.map