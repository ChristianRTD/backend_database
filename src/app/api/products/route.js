import { NextResponse } from 'next/server';

export  function GET() {
  return NextResponse.json("OBTENIENDO PRODUCTOS");
}

export   function DELETE() {
    return NextResponse.json("ELIMINANDO PRODUCTOS");
  }



  export   function PUT() {
    return NextResponse.json("ACTUALIZANDO PRODUCTOS");
  }