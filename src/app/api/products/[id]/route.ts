// import { NextResponse } from 'next/server';
// import { products } from '@/lib/data';

// export async function generateStaticParams(
//   request: Request,
//   { params }: { params: { id: string } }
// ) {
//   const product = products.find((p) => p.id === params.id);
  
//   if (!product) {
//     return new NextResponse('Product not found', { status: 404 });
//   }

//   return NextResponse.json(product);
// }