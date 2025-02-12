import { NextResponse } from "next/server";
import { conn } from "@/libs/mysql";

// Get all users
export async function GET() {
  try {
    const results = await conn.query("SELECT * FROM users");
    return NextResponse.json(results);
  } catch (error) {
    return NextResponse.json(
      {
        message: error.message,
      },
      {
        status: 500,
      }
    );
  }
}

// Create a new user
export async function POST(request) {
  try {
    const { name, email, password } = await request.json();
    const result = await conn.query("INSERT INTO users SET ?", {
      name,
      email,
      password,
    });

    return NextResponse.json({
      name,
      email,
      id: result.insertId,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: error.message,
      },
      {
        status: 500,
      }
    );
  }
}

// Delete a user
export async function DELETE(request) {
  try {
    const { id } = await request.json();
    await conn.query("DELETE FROM users WHERE id = ?", [id]);
    return NextResponse.json({ message: "Usuario eliminado exitosamente" });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: error.message,
      },
      {
        status: 500,
      }
    );
  }
}

// Update a user
export async function PUT(request) {
  try {
    const { id, name, email, password } = await request.json();
    await conn.query("UPDATE users SET name = ?, email = ?, password = ? WHERE id = ?", [name, email, password, id]);
    return NextResponse.json({ message: "Usuario actualizado exitosamente" });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: error.message,
      },
      {
        status: 500,
      }
    );
  }
}
