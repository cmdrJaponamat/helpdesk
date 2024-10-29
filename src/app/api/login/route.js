import { NextRequest, NextResponse } from "next/server";
import pool from "@/db";
import { redirect } from "next/navigation";

export async function POST(req) {
  const payload = await req.json();
  console.log('*****', payload);
  try {
    var query = "SELECT password FROM users WHERE name='" + payload['username'] + "';";
    console.log(query);
    var res = await pool.query(query);
    console.log('Query result route: ', res.rows[0]['password']);
    if (payload['password'] == res.rows[0]['password']) {
      console.log('if enter');
      const newUrl = new URL('/', req.url);
      return NextResponse.redirect(newUrl);
        //json(
        //{ status: 200 }
      //)
    }
    else {
      console.log('Wrong credantials.')
      return NextResponse.json(
        { status: 400 }
      )
    }
  } catch (error) {
    console.log('Query error route: ', error);
    return NextResponse.json(
      { status: 300 }
    )
  } finally {

  }
}

