// src/app/api/contact/route.ts

import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { google } from "googleapis";

// Create OAuth2 client
const oAuth2Client = new google.auth.OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  process.env.REDIRECT_URI
);

oAuth2Client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN });


export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    console.log('form data', email, name, message);

    // Get a fresh access token for each request
    const accessToken = await oAuth2Client.getAccessToken();

    // Configure transporter inside the handler
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: "OAuth2",
        user: process.env.EMAIL_USER, // your Gmail address
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken: process.env.REFRESH_TOKEN,
        accessToken: accessToken.token as string,
      },
    });

    // Email content setup
    const mailOptions = {
      from: `"Vievely Suites & Apartments" <${process.env.EMAIL_USER}>`,
      to: 'vievelysuites@gmail.com', // The target email address
      subject: `New Contact Form Submission from Vievely Suites & Apartments Website: ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <h2 style="color: #10B981;">New Vievely Suites Inquiry</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong></p>
            <div style="border: 1px solid #ccc; padding: 15px; border-radius: 5px; background-color: #f9f9f9;">
                ${message.replace(/\n/g, '<br>')}
            </div>
            <p style="margin-top: 20px; font-size: 0.9em; color: #666;">
                This message was sent from the Vievely Suites website Contact Page.
            </p>
        </div>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Success response
    return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 });

  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json({
      message: 'Failed to send email. Check server logs.',
      error: (error as Error).message,
    }, { status: 500 });
  }
}

