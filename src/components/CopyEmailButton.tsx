import { useState } from 'react';
import { Check, Copy } from 'lucide-react';

interface CopyEmailButtonProps {
  email: string;
}

export default function CopyEmailButton({ email }: CopyEmailButtonProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable */
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="group inline-flex items-center gap-2 rounded-lg border border-white/10 bg-zinc-900/80 px-4 py-2.5 font-code text-sm text-zinc-300 transition-all duration-200 hover:border-cyan-500/30 hover:bg-cyan-500/5 hover:text-cyan-400"
      aria-label={copied ? 'Correo copiado' : 'Copiar correo al portapapeles'}
    >
      <span className="text-cyan-500/60 transition-colors group-hover:text-cyan-400">$</span>
      <span>{email}</span>
      {copied ? (
        <Check className="size-4 text-emerald-400" aria-hidden="true" />
      ) : (
        <Copy className="size-4 text-zinc-500 transition-colors group-hover:text-cyan-400" aria-hidden="true" />
      )}
      {copied && (
        <span className="sr-only" role="status">
          Copiado
        </span>
      )}
    </button>
  );
}
