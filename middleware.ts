import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {

    if (request.nextUrl.pathname === '/idex2025' || request.nextUrl.pathname === '/ucretsiz-demo-talebi') {
        return NextResponse.redirect("https://docs.google.com/forms/d/e/1FAIpQLSfonAa1IxWoqlHxcwv5iAjv9ommE4KY9TyPXV1fyElFLWMRFQ/viewform?usp=header");
    }

    return NextResponse.next();
}