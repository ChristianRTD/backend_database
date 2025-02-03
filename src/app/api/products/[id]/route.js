import { NextResponse } from 'next/server';

export  function GET() {
  return NextResponse.json('OBTENIENDO UN PRODUCTO');
}

export  function DELETE() {
    return NextResponse.json('ELIMINANDO UN PRODUCTO');
}


export  function PUT() {
    return NextResponse.json('ACTUALIZANDO UN PRODUCTO');
}