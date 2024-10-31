import { NextRequest, NextResponse } from "next/server";
import pool from "@/db";

export async function POST(req) {
  const payload = await req.json();
  try {
//проверка на повторы
    var query = "SELECT name FROM users WHERE name='" + payload['username'] + "';";
    var nameRes = await pool.query(query);
    var query = "SELECT name FROM users WHERE email='" + payload['email'] + "';";
    var emailRes = await pool.query(query);
    if ( nameRes.rows.length == 0 && emailRes.rows.length == 0) {
//запись в БД    
      const isadmin = payload.usertype == 'admin' ? true : false;
      query = "INSERT INTO users VALUES (default, '" + payload['username'] + "', '" 
        + payload['email'] + "', '" + payload['password'] + "', '" + isadmin + "' )";
      res = await pool.query(query);
// ------------- конец записи
    } else {
      console.log('Login or email allready exists');
      return NextResponse.json(
        { message: 'Login or email allready exists' },
        { status: 400 }
      )
    }
// ____________ конец проверки
  } catch (error) {
    console.log('Query error route: ', error);
  } finally {

  }
  return NextResponse.json(
    { message: 'Added' },
    { status: 200 },
  ) 
}

