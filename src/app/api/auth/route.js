import { NextResponse } from "next/server";
import pool from "@/lib/db";
import { loginSchema } from "@/schema/auth";
import { encrypt } from "@/lib/cryptoUtil";

export async function POST(request) {
  try {
    const requestData = await request.json();
    const validatedData = loginSchema.safeParse(requestData);
    console.log("Login Request:", requestData);

    if (!validatedData.success) {
      console.error("Validation errors:", validatedData.error.errors);
      return NextResponse.json(
        { error: "Validation failed", details: validatedData.error.errors },
        { status: 400 }
      );
    }

    const { registrationno } = validatedData.data;

    const [users] = await pool.query(
      "SELECT * FROM trainees WHERE registrationno = ?",
      [registrationno]
    );

    if (users.length === 0) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }

    const user = users[0];
    console.log("User data from DB:", user);
    
    // Check different possible field names for the ID
    const userId = user.SN || user.sn || user.id || user.trainee_sn;
    
    if (!userId) {
      console.error("No ID field found in user data:", Object.keys(user));
    }

    return NextResponse.json({
      traineeId: userId ? encrypt(String(userId)) : null,
      FullName: user.FullName || user.fullname,
      info: user,
    });
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
