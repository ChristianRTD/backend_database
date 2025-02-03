import { NextResponse } from 'next/server';
import { conn } from '@/libs/mysql';

export async function GET(request, { params }) {
 
try {
  
  

  const result = await conn.query('SELECT * FROM product WHERE id = ?', [params.id]);
  


  if(result.lenght === 0){
    return NextResponse.json({
      message: "Producto no Encontrado",
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
    status: 500
  }
)

}

}













export async function DELETE(req, { params }) {
  try {
    const { id } = params;

    // Verificar si el producto existe antes de eliminarlo
    const checkProduct = await conn.query("SELECT * FROM product WHERE id = ?", [id]);

    if (checkProduct.length === 0) {
      return NextResponse.json(
        { message: "Producto no encontrado" },
        { status: 404 }
      );
    }

    // Si existe, eliminar el producto
    await conn.query("DELETE FROM product WHERE id = ?", [id]);

    return NextResponse.json(
      { message: "Producto eliminado correctamente" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Error al eliminar el producto", error: error.message },
      { status: 500 }
    );
  }
}







export async function PUT(req, { params }) {
  try {
    const { id } = params; // Obtener el ID del producto desde los parámetros
    const body = await req.json(); // Obtener los datos enviados en la solicitud

    const { name, price, description } = body; // Extraer los valores a actualizar

    // Verificar si el producto existe antes de actualizarlo
    const checkProduct = await conn.query("SELECT * FROM product WHERE id = ?", [id]);

    if (checkProduct.length === 0) {
      return NextResponse.json(
        { message: "Producto no encontrado" },
        { status: 404 }
      );
    }

    // Ejecutar la actualización en la base de datos
    await conn.query(
      "UPDATE product SET name = ?, price = ?, description = ? WHERE id = ?",
      [name, price, description, id]
    );

    return NextResponse.json(
      { message: `Producto con ID ${id} actualizado correctamente` },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Error al actualizar el producto", error: error.message },
      { status: 500 }
    );
  }
}



















export  function PUT() {
    return NextResponse.json('ACTUALIZANDO UN PRODUCTO');
}