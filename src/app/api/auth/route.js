import { NextResponse } from "next/server";
import pool from "@/lib/db";
import { loginSchema } from "@/schema/auth";
import { encrypt } from "@/lib/cryptoUtil";
import { extractTraineeId, normalizeTraineeData } from "@/lib/traineeUtils";

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
      "SELECT * FROM trainees WHERE email = ?",
      [registrationno]
    );

    if (users.length === 0) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }

    const user = users[0];
    console.log("User data from DB:", user);
    
    // Use standardized trainee ID extraction
    const userId = extractTraineeId(user);
    
    if (!userId) {
      console.error("No ID field found in user data:", Object.keys(user));
      return NextResponse.json({ error: "Invalid user data - missing ID" }, { status: 500 });
    }

    // Normalize the user data for consistent field mapping
    const normalizedUser = normalizeTraineeData(user);

    return NextResponse.json({
      traineeId: encrypt(String(userId)),
      FullName: normalizedUser.fullname,
      info: normalizedUser,
    });
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
