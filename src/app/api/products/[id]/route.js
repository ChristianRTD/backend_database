import { NextResponse } from 'next/server';
import { conn } from '@/libs/mysql';

export async function GET(request, { params }) {
 
try {
  
  

  const result = await conn.query('SELECT * FROM product WHERE id = ?', [params.id]);
  


  if(result.lenght === 0){
    return NextResponse.json({
      message: "Product Not Found",
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

    // Check if the product exists before deleting it.
    const checkProduct = await conn.query("SELECT * FROM product WHERE id = ?", [id]);

    if (checkProduct.length === 0) {
      return NextResponse.json(
        { message: "Producto no encontrado" },
        { status: 404 }
      );
    }

    // If it exists, delete the product
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

























export  function PUT() {
    return NextResponse.json('ACTUALIZANDO UN PRODUCTO');
}