
/* ------------------------------------------JS--------------------*/
import { NextRequest, NextResponse } from 'next/server';
/* ------------------------------------------Data & Type-----------*/

/* ------------------------------------------Components------------*/

/* ------------------------------------------Function--------------*/

/* ------------------------------------------Run-------------------*/
export async function POST(request: NextRequest) {
  try {
    return NextResponse.json({ 
      success: true, 
      message: 'Form submitted successfully' 
    });
    
  } catch (error) {
    console.error('Error in formProduct API:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
