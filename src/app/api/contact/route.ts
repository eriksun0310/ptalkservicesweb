import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, service, message } = body;

    // 驗證必填欄位
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email and message are required' },
        { status: 400 }
      );
    }

    // 這裡通常會整合郵件服務如 SendGrid, Resend, 或 Nodemailer
    // 目前僅記錄並返回成功狀態

    console.log('Contact form submission:', {
      to: 'connect.ptalk@gmail.com',
      from: email,
      subject: `新的諮詢來自 ${name}`,
      data: {
        name,
        email,
        phone: phone || 'Not provided',
        service: service || 'Not specified',
        message,
        timestamp: new Date().toISOString()
      }
    });

    // TODO: 實際發送郵件的實作
    // 可以使用以下服務之一：
    // 1. Resend (推薦用於 Next.js)
    // 2. SendGrid
    // 3. AWS SES
    // 4. Nodemailer with SMTP

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for contacting us. We will respond within 24 hours.'
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}