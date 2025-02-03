import { NextResponse } from 'next/server';
import { conn } from '@/libs/mysql';

export async function GET(request, { params }) {
 
try {
  
  console.log(params.id);
  const result = await conn.query('SELECT * FROM product WHERE id = ?', [params.id])
  


  if(result.lenght == 0){
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

export  function DELETE() {
    return NextResponse.json('ELIMINANDO UN PRODUCTO');
}


export  function PUT() {
    return NextResponse.json('ACTUALIZANDO UN PRODUCTO');
}