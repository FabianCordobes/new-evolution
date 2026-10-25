import { NextResponse } from 'next/server';
const RECIPIENT='newevolutionpublicidad@gmail.com';
const CATEGORIES=new Set(['Comunicación','Tecnología','Producción','Orientación']);
const EMAIL=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export async function POST(request:Request) {
  let payload:unknown;
  try { payload=await request.json(); } catch { return NextResponse.json({error:'Solicitud inválida.'},{status:400}); }
  if(!payload || typeof payload!=='object' || Array.isArray(payload)) return NextResponse.json({error:'Solicitud inválida.'},{status:400});
  const data=payload as Record<string,unknown>;
  if(typeof data.website==='string' && data.website.trim()) return NextResponse.json({ok:true});
  const {name,email,category,details}=data;
  if(typeof name!=='string'||name.trim().length<2||name.length>100||
     typeof email!=='string'||email.length>254||!EMAIL.test(email)||
     typeof category!=='string'||!CATEGORIES.has(category)||
     typeof details!=='string'||details.trim().length<15||details.length>3000)
    return NextResponse.json({error:'Revisá los datos del formulario.'},{status:400});
  const apiKey=process.env.RESEND_API_KEY;
  const from=process.env.CONTACT_FROM_EMAIL;
  if(!apiKey||!from) return NextResponse.json({error:'El formulario todavía no está habilitado. Escribinos por Instagram.'},{status:503});
  const body=['Nueva consulta de New Evolution',`Nombre: ${name.trim()}`,`Correo: ${email.trim()}`,`Área: ${category}`,'','Proyecto:',details.trim()].join('\n');
  try {
    const response=await fetch('https://api.resend.com/emails',{method:'POST',headers:{Authorization:`Bearer ${apiKey}`,'Content-Type':'application/json'},body:JSON.stringify({from,to:[RECIPIENT],reply_to:email.trim(),subject:'Nueva consulta desde New Evolution',text:body}),cache:'no-store'});
    if(!response.ok) {console.error('Contact delivery failed',response.status);throw new Error('Delivery failed');}
    return NextResponse.json({ok:true});
  } catch {return NextResponse.json({error:'No pudimos enviar tu consulta. Intentá nuevamente o escribinos por Instagram.'},{status:502});}
}
