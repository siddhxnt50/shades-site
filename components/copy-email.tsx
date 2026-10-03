'use client';

import * as React from 'react';
import { Check, Copy } from 'lucide-react';

/**
 * Fallback for visitors without a mail client: shows the address and
 * copies it to the clipboard, announcing the result to screen readers.
 */
export function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = React.useState(false);
  const timer = React.useRef<ReturnType<typeof setTimeout>>(undefined);

  React.useEffect(() => () => clearTimeout(timer.current), []);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      // Clipboard API is unavailable on insecure origins and some in-app browsers.
      const field = document.createElement('textarea');
      field.value = email;
      field.setAttribute('readonly', '');
      field.style.position = 'fixed';
      field.style.opacity = '0';
      document.body.appendChild(field);
      field.select();
      document.execCommand('copy');
      field.remove();
    }
    setCopied(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 2200);
  }

  return (
    <div className="flex min-h-14 w-full items-center justify-between gap-3 rounded-[1.75rem] border border-ink-600 py-1.5 pl-5 pr-1.5 sm:w-auto sm:pl-6">
      <span className="min-w-0 break-all font-mono text-[13px] text-paper-dim sm:text-sm">{email}</span>
      <button
        type="button"
        onClick={copy}
        className="inline-flex h-11 shrink-0 items-center gap-2 rounded-full bg-ink-700 px-4 text-sm font-medium text-paper transition-colors hover:bg-ink-600"
      >
        {copied ? (
          <Check aria-hidden="true" className="h-4 w-4 text-signal" />
        ) : (
          <Copy aria-hidden="true" className="h-4 w-4" />
        )}
        {copied ? 'Copied' : 'Copy'}
        <span className="sr-only"> email address</span>
      </button>
      <span role="status" aria-live="polite" className="sr-only">
        {copied ? 'Email address copied to clipboard' : ''}
      </span>
    </div>
  );
}
