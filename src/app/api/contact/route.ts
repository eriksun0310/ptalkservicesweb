import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

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

    // 準備郵件內容
    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>新的諮詢訊息</title>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px; }
            .field { margin-bottom: 20px; }
            .label { font-weight: bold; color: #555; margin-bottom: 5px; }
            .value { background: white; padding: 10px; border-radius: 4px; border: 1px solid #e0e0e0; }
            .message { background: white; padding: 15px; border-radius: 4px; border-left: 4px solid #667eea; margin-top: 20px; }
            .footer { text-align: center; margin-top: 20px; font-size: 12px; color: #888; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0;">新的諮詢訊息</h1>
              <p style="margin: 5px 0 0 0; opacity: 0.9;">來自 PTalk 網站的聯絡表單</p>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">姓名：</div>
                <div class="value">${name}</div>
              </div>
              <div class="field">
                <div class="label">電子郵件：</div>
                <div class="value"><a href="mailto:${email}">${email}</a></div>
              </div>
              <div class="field">
                <div class="label">電話：</div>
                <div class="value">${phone || '未提供'}</div>
              </div>
              <div class="field">
                <div class="label">諮詢服務：</div>
                <div class="value">${service || '未指定'}</div>
              </div>
              <div class="field">
                <div class="label">訊息內容：</div>
                <div class="message">${message.replace(/\n/g, '<br>')}</div>
              </div>
              <div class="footer">
                <p>提交時間：${new Date().toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' })}</p>
              </div>
            </div>
          </div>
        </body>
      </html>
    `;

    // 發送郵件
    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'PTalk <onboarding@resend.dev>',
      to: process.env.RESEND_TO_EMAIL || 'connect.ptalk@gmail.com',
      subject: `新的諮詢來自 ${name} - ${service || '一般諮詢'}`,
      html: emailHtml,
      replyTo: email,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    console.log('Email sent successfully:', data);

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for contacting us. We will respond within 24 hours.',
        emailId: data?.id
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