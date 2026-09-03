import { useEffect, useRef, useState } from 'react';
import { portfolioData } from '@/data/portfolioData';
import type { Locale } from '@/types/portfolio';
import { useLanguage } from '@/hooks/useLanguage';
import { getUi } from '@/data/i18n';
import { pickLocalized } from '@/utils/localize';

interface TerminalLine {
  type: 'input' | 'output' | 'system';
  content: string;
}

const PROMPT = 'clementthee@archlinux ~ $';
const QUICK_COMMANDS = ['help', 'skills', 'exp', 'contact', 'clear'] as const;

function getCommandOutput(command: string, locale: Locale, t: (key: import('@/data/i18n').UiKey) => string): string[] {
  const cmd = command.trim().toLowerCase();

  switch (cmd) {
    case 'help':
      return [
        t('terminalHelpTitle'),
        t('terminalHelpHelp'),
        t('terminalHelpSkills'),
        t('terminalHelpExp'),
        t('terminalHelpContact'),
        t('terminalHelpClear'),
      ];
    case 'skills':
      return portfolioData.skills.flatMap((group) => [
        `[${pickLocalized(group.category, locale)}]`,
        ...group.skills.map((skill) => `  • ${skill}`),
      ]);
    case 'exp':
      return portfolioData.experience.slice(0, 2).flatMap((job) => [
        `${job.role} @ ${job.company}`,
        `  ${job.period} · ${job.location}`,
        `  ${job.keyTechnologies.join(', ')}`,
        '',
      ]);
    case 'contact':
      return [
        `email:    ${portfolioData.personal.email}`,
        `phone:    ${portfolioData.personal.phone}`,
        `github:   ${portfolioData.personal.social.github ?? '—'}`,
        `linkedin: ${portfolioData.personal.social.linkedin ?? '—'}`,
        `youtube:  ${portfolioData.personal.social.youtube ?? '—'}`,
        `whatsapp: ${portfolioData.personal.social.whatsapp ? t('terminalWhatsappAvailable') : '—'}`,
      ];
    case 'clear':
      return [];
    case '':
      return [];
    default:
      return [`${t('terminalCmdNotFound')} ${command}`, t('terminalTypeHelp')];
  }
}

export default function HeroTerminal() {
  const { locale, t } = useLanguage();
  const [lines, setLines] = useState<TerminalLine[]>([]);
  const [input, setInput] = useState('');
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setLines([
      { type: 'system', content: getUi(locale, 'terminalSession') },
      { type: 'system', content: getUi(locale, 'terminalHint') },
    ]);
  }, [locale]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [lines]);

  function runCommand(command: string) {
    const output = getCommandOutput(command, locale, t);

    if (command.trim().toLowerCase() === 'clear') {
      setLines([]);
      return;
    }

    setLines((prev) => [
      ...prev,
      { type: 'input', content: `${PROMPT} ${command}` },
      ...output.map((line) => ({ type: 'output' as const, content: line })),
    ]);
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const command = input.trim();
    if (!command) return;
    runCommand(command);
    setInput('');
  }

  return (
    <div className="flex h-full min-h-[280px] flex-col overflow-hidden rounded-xl border border-white/8 bg-zinc-950/90 font-mono text-sm shadow-inner shadow-cyan-500/5">
      <div className="flex items-center gap-2 border-b border-white/5 bg-zinc-900/90 px-4 py-2.5">
        <span className="size-2.5 rounded-full bg-red-500/80" />
        <span className="size-2.5 rounded-full bg-yellow-500/80" />
        <span className="size-2.5 rounded-full bg-emerald-500/80" />
        <span className="ml-1 text-xs text-zinc-500">kitty · zsh · archlinux</span>
      </div>

      <div className="flex-1 space-y-1 overflow-y-auto p-4 text-xs leading-relaxed sm:text-sm" onClick={() => inputRef.current?.focus()} role="log" aria-live="polite">
        {lines.map((line, index) => (
          <div key={`${line.type}-${index}`} className={line.type === 'input' ? 'text-cyan-400' : line.type === 'system' ? 'text-zinc-600' : 'text-zinc-400'}>
            {line.content || '\u00A0'}
          </div>
        ))}

        <form onSubmit={handleSubmit} className="flex items-center gap-2 pt-1">
          <span className="shrink-0 text-emerald-400/90">{PROMPT}</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            className="min-w-0 flex-1 bg-transparent text-zinc-100 outline-none placeholder:text-zinc-700"
            placeholder="help"
            spellCheck={false}
            autoComplete="off"
            aria-label={t('terminalInputAria')}
          />
        </form>
        <div ref={bottomRef} />
      </div>

      <div className="flex flex-wrap gap-1.5 border-t border-white/5 bg-zinc-900/50 p-3">
        {QUICK_COMMANDS.map((cmd) => (
          <button key={cmd} type="button" onClick={() => runCommand(cmd)} className="rounded border border-white/10 bg-white/5 px-2 py-0.5 text-xs text-zinc-400 transition-colors hover:border-cyan-500/30 hover:bg-cyan-500/10 hover:text-cyan-400">
            {cmd}
          </button>
        ))}
      </div>
    </div>
  );
}
