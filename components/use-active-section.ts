'use client';

import * as React from 'react';

/**
 * Returns the id of the section currently crossing a thin band ~40% down the
 * viewport. `ids` must be a stable (module-level) array.
 */
export function useActiveSection(ids: readonly string[]) {
  const [active, setActive] = React.useState<string | null>(null);

  React.useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (elements.length === 0) return;

    const intersecting = new Set<string>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) intersecting.add(entry.target.id);
          else intersecting.delete(entry.target.id);
        }
        setActive(ids.find((id) => intersecting.has(id)) ?? null);
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids]);

  return active;
}
