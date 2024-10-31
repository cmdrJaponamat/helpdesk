import { NextResponse, NextRequest } from "next/server";
import { cookies } from "next/headers";

export async function GET ( req ) {
  var cookie = await cookies();
  var accessToken = cookie.get('access-token')?.value;
  const reurl = 'http://' + req.headers.get('host');
  console.log( req.headers.get('host') );
  if ( accessToken == 'success' ) {
    return Response.redirect(reurl + '/registration');
  }
  else {
    return Response.redirect(reurl + '/login');
  }
}
