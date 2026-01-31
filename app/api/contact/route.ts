// src/app/api/contact/route.ts


import { NextResponse } from 'next/server';

import nodemailer from 'nodemailer';



export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // 1. Validate Environment Variables exist
    if (!process.env.EMAIL_USER || !process.env.CLIENT_ID || !process.env.CLIENT_SECRET || !process.env.REFRESH_TOKEN) {
        console.error('Missing Environment Variables');
        return NextResponse.json({ message: 'Server configuration error' }, { status: 500 });
    }

    // 2. Basic Form Validation
    if (!name || !email || !message) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    // 3. Configure Transporter (Let Nodemailer handle the Access Token)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: "OAuth2",
        user: process.env.EMAIL_USER,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken: process.env.REFRESH_TOKEN,
        // We do NOT need to pass accessToken here; Nodemailer generates it.
      },
    });

    // 4. Verify connection before sending (Optional but helpful for debugging)
    await new Promise((resolve, reject) => {
        transporter.verify(function (error, success) {
            if (error) {
                console.log("Transporter verification failed:", error);
                reject(error);
            } else {
                console.log("Server is ready to take our messages");
                resolve(success);
            }
        });
    });

    const mailOptions = {
      from: `"Vievely Suites" <${process.env.EMAIL_USER}>`,
      to: 'vievelysuites@gmail.com', // or process.env.EMAIL_USER if sending to yourself
      replyTo: email, // Good practice: allows you to hit "Reply" and send to the customer
      subject: `New Contact Form: ${name} - ${subject || 'No Subject'}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <h2 style="color: #10B981;">New Vievely Suites Inquiry</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>

            <p><strong>Subject:</strong> ${subject}</p>

            <div style="border: 1px solid #ccc; padding: 15px; border-radius: 5px; background-color: #f9f9f9;">
                ${message.replace(/\n/g, '<br>')}
            </div>

        </div>

      `,
    };

    // 5. Send Email
    await transporter.sendMail(mailOptions);


    return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 });

  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json({
      message: 'Failed to send email.',
      error: (error as Error).message,
    }, { status: 500 });
  }
}