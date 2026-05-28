import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import connectToDatabase from '@/lib/mongodb';
import Contact from '@/models/Contact';

// Initialize Resend with env variable, fallback to hardcoded if not provided for now, but recommend env
const resend = new Resend(process.env.RESEND_API_KEY || 're_G2Gk1HVq_MWU2rUBpX45J1KCu6RcidkpQ');

export async function POST(request: Request) {
  try {
    const { name, email, phone, company, message } = await request.json();

    // 1. Connect to MongoDB and save the contact
    await connectToDatabase();
    
    const newContact = await Contact.create({
      name,
      email,
      phone,
      company,
      message
    });

    // 2. Send email notification
    const htmlContent = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Company:</strong> ${company}</p>
      <p><strong>Message:</strong></p>
      <p>${(message || '').replace(/\n/g, '<br/>')}</p>
    `;

    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['aditsharma2005.vs@gmail.com'],
      subject: `New Lead: ${name} from ${company || 'Website'}`,
      html: htmlContent,
    });

    if (error) {
      console.error('Resend Error:', error);
      // Even if email fails, we saved to DB, but we might want to let the user know
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, data: newContact });
  } catch (error: any) {
    console.error('Contact API Error:', error);
    return NextResponse.json({ error: 'Internal Server Error', details: error.message }, { status: 500 });
  }
}
