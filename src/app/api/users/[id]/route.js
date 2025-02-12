import { NextResponse } from 'next/server';
import { conn } from '@/libs/mysql';

// Get a user by ID
export async function GET(request, { params }) {
  try {
    const result = await conn.query('SELECT * FROM users WHERE id = ?', [params.id]);

    if (result.length === 0) {
      return NextResponse.json(
        {
          message: "User Not Found",
        },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json(result[0]);
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

// Update a user by ID
export async function PUT(request, { params }) {
  try {
    const { name, email, password } = await request.json();
    await conn.query("UPDATE users SET name = ?, email = ?, password = ? WHERE id = ?", [name, email, password, params.id]);
    return NextResponse.json({ message: "Usuario actualizado exitosamente" });
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

// Delete a user by ID
export async function DELETE(request, { params }) {
  try {
    await conn.query("DELETE FROM users WHERE id = ?", [params.id]);
    return NextResponse.json({ message: "Usuario eliminado exitosamente" });
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


