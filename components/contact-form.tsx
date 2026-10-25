'use client';
import { useState, type FormEvent } from 'react';
type Status = 'idle' | 'sending' | 'success' | 'error';
export function ContactForm() {
  const [status,setStatus]=useState<Status>('idle');
  const [message,setMessage]=useState('');
  async function submit(event:FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form=event.currentTarget;
    if (!form.reportValidity()) return;
    const data=new FormData(form);
    setStatus('sending');setMessage('');
    try {
      const response=await fetch('/api/contact',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(Object.fromEntries(data))});
      const result=await response.json() as {error?:string};
      if(!response.ok) throw new Error(result.error || 'No pudimos enviar tu consulta.');
      form.reset();setStatus('success');setMessage('Recibimos tu consulta. Gracias por escribirnos.');
    } catch(error) {setStatus('error');setMessage(error instanceof Error?error.message:'No pudimos enviar tu consulta.');}
  }
  const field='mt-2 w-full rounded-lg border border-white/20 bg-white/5 p-3 text-white placeholder:text-slate-400';
  return <form onSubmit={submit} className="space-y-5" aria-label="Formulario de contacto">
    <label className="block text-sm">Tu nombre<input name="name" required maxLength={100} autoComplete="name" placeholder="Nombre y apellido" className={field}/></label>
    <label className="block text-sm">Tu correo<input name="email" required type="email" maxLength={254} autoComplete="email" placeholder="tu@empresa.com" className={field}/></label>
    <label className="block text-sm">¿Qué necesitás?<select name="category" required defaultValue="" className="mt-2 w-full rounded-lg border border-white/20 bg-[#152936] p-3 text-white"><option value="" disabled>Elegí una categoría</option><option value="Comunicación">Comunicación</option><option value="Tecnología">Tecnología</option><option value="Producción">Producción</option><option value="Orientación">Necesito orientación</option></select></label>
    <label className="block text-sm">Tu proyecto<textarea name="details" required minLength={15} maxLength={3000} rows={4} placeholder="Contanos brevemente qué querés hacer..." className={field}/></label>
    <div className="hidden" aria-hidden="true"><label>No completar<input name="website" tabIndex={-1} autoComplete="off"/></label></div>
    <p className="text-xs leading-relaxed text-slate-400">Usaremos estos datos únicamente para responder tu consulta.</p>
    <button type="submit" disabled={status==='sending'} className="w-full rounded-full bg-cyan-300 px-5 py-3 font-semibold text-slate-950 hover:bg-cyan-200 disabled:opacity-60">{status==='sending'?'Enviando…':'Enviar consulta'}</button>
    <p role="status" aria-live="polite" className={status==='error'?'text-sm text-rose-300':'text-sm text-cyan-200'}>{message}</p>
  </form>;
}
