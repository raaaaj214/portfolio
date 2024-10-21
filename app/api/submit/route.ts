import { google } from 'googleapis';


export async function POST(request : any) {
  const { name, email, subject,message } = await request.json();
  const PRIVATE_KEY = process.env.PRIVATE_KEY!
  try {
    const auth = new google.auth.GoogleAuth({
      credentials : {
        client_email : process.env.CLIENT_EMAIL,
        private_key: PRIVATE_KEY.replace(/\\n/g, '\n'),
        client_id : process.env.CLIENT_ID,
        project_id : process.env.PROJECT_ID,
      
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    const spreadsheetId = '1rDFibmNN6NTm83shBOSaO5CjaYhSXu2cqb0FLLqJoa8'; // Replace with your ID
    const range = 'Sheet1!A:C'; // Adjust according to your sheet

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: 'RAW',
      requestBody: {
        values: [[name, email, subject ,message]],
      },
    });

    return new Response(JSON.stringify({ message: 'Success' }), { status: 200 });
  } catch (error) {
    console.error('Error appending to sheet:', error);
    return new Response(JSON.stringify({ message: 'Error saving data' }), { status: 500 });
  }
}
