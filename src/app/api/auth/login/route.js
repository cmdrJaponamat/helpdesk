import { NextRequest, NextResponse } from "next/server";
import pool from "@/db";
import { redirect } from "next/navigation";

export async function POST(req) {
  const payload = await req.json();
  console.log('*****', payload);
  try {
    var query = "SELECT * FROM users WHERE name='" + payload['username'] + "';";
    console.log(query);
    var result = await pool.query(query);
    console.log('Query result route: ', result.rows[0]);
    if (payload['password'] == result.rows[0]['password']) {
//      console.log('if enter');
//      delete result.rows[0]['password'];
//      let mystr = func`{"id": ${result.rows[0].id}, "name": ${result.rows[0].name}, "email": ${result.rows[0].email}`;
      const jsonReq = JSON.parse(`{"id": ${result.rows[0].id}, "name": "${result.rows[0].name}", "email": "${result.rows[0].email}"}`);
      console.log('resJSON.name: ' + jsonReq.name);
      const response = NextResponse.json(
        {message: 'successfull'},
        {status: 200},
      );
//      response.cookies.set('access-token', 'success');
      return response;
//      NextRsponse.json(
//        {message: 'successfull'},
//        {status: 200},
//      );
    }
    else {
      console.log('Wrong credantials.');
      return false;
//      NextResponse.json(
//        { message: 'wrong credantials' },
//        { status: 400 }
//      )
    }
  } catch (error) {
    console.log('Query error route: ', error);
    return NextResponse.json(
      { message: 'some error: '+error },
      { status: 300 }
    )
  } finally {
  }
}
export async function GET ( req, res ) {
  return NextResponse.json(
    {message: 'some get response'},
    {status: 200}
  );
}
