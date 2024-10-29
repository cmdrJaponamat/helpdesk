import { NextRequest, NextResponse } from "next/server";
import pool from "@/db";

export async function POST(req) {
  const payload = await req.json();
  console.log('*****', payload);
  //try {
  //  var query = "INSERT INTO users VALUES (default, '" + payload['username'] + "', '" + payload['password'] + "' )";
  //  console.log("${payload['username']}")
  //  console.log(query);
  //  var res = await pool.query(query);
  //  //console.log('Query result route: ', res.rows);
  //} catch (error) {
  //  console.log('Query error route: ', error);
  //} finally {

  //}
  return NextResponse.json(
    { status: 200 },
    //res.json()
  ) 
}

