import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ddrr.clinic.18@gmail.com',
    pass: 'arcbrtsktzjvmcqf'
  }
});

// Helper function to send the auto-reply to the customer
const sendAutoReply = async (toEmail, name) => {
  try {
    await transporter.sendMail({
      from: '"DDRR Clinic" <ddrr.clinic.18@gmail.com>',
      to: toEmail,
      subject: 'Thank you for contacting DDRR Clinic',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #E8F0F2; border-radius: 10px;">
          <h2 style="color: #082744;">Hello ${name},</h2>
          <p style="color: #333; line-height: 1.6;">
            Thank you for reaching out to DDRR Clinic. We have received your request and our team will get back to you shortly.
          </p>
          <p style="color: #333; line-height: 1.6;">
            At DDRR Clinic, we are dedicated to helping you move better, feel better, and live better through personalized physiotherapy and rehabilitation care.
          </p>
          <p style="color: #333; line-height: 1.6;">
            If you need immediate assistance, please call us at <strong>9866512169</strong> or <strong>9493321777</strong>.
          </p>
          <br/>
          <p style="color: #079EA5; font-weight: bold;">
            Warm regards,<br/>
            DDRR Clinic Team
          </p>
        </div>
      `
    });
  } catch (error) {
    console.error('Error sending auto-reply:', error);
  }
};

app.post('/api/contact', async (req, res) => {
  const { name, email, phone, message } = req.body;

  try {
    // Send to Clinic
    await transporter.sendMail({
      from: '"DDRR Website" <ddrr.clinic.18@gmail.com>',
      to: 'ddrr.clinic.18@gmail.com',
      subject: `New Contact Request from ${name}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
      `
    });

    // Send to Customer
    await sendAutoReply(email, name);

    res.status(200).json({ success: true, message: 'Message sent successfully' });
  } catch (error) {
    console.error('SMTP Error:', error);
    res.status(500).json({ success: false, error: 'Failed to send message' });
  }
});

app.post('/api/appointment', async (req, res) => {
  const { name, email, phone, date, treatment } = req.body;

  try {
    // Send to Clinic
    await transporter.sendMail({
      from: '"DDRR Website" <ddrr.clinic.18@gmail.com>',
      to: 'ddrr.clinic.18@gmail.com',
      subject: `New Appointment Booking: ${name}`,
      html: `
        <h3>New Appointment Request</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Preferred Date:</strong> ${date}</p>
        <p><strong>Treatment Category:</strong> ${treatment}</p>
      `
    });

    // Send to Customer
    await sendAutoReply(email, name);

    res.status(200).json({ success: true, message: 'Appointment requested successfully' });
  } catch (error) {
    console.error('SMTP Error:', error);
    res.status(500).json({ success: false, error: 'Failed to send appointment request' });
  }
});

export default app;
