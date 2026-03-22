import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const webhookUrl = process.env.LEAD_WEBHOOK_URL;

  if (!webhookUrl) {
    console.log('[lead] No LEAD_WEBHOOK_URL set. Payload:', body);
    return NextResponse.json({ ok: true });
  }

  try {
    const upstream = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    if (!upstream.ok) {
      console.error('[lead] Webhook returned', upstream.status);
      return NextResponse.json({ error: 'Webhook error' }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[lead] Fetch error:', err);
    return NextResponse.json({ error: 'Network error' }, { status: 500 });
  }
}
