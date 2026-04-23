const BRAND = 'Geo-Gestión';

/** Número por defecto (solo dígitos, código país). Opcional: `VITE_WHATSAPP_PHONE` en `.env` lo reemplaza. */
const WHATSAPP_PHONE_DEFAULT = '5492236686775';

const RATE_LIMIT_STORAGE_KEY = 'gg_whatsapp_opens_v1';
/** Máximo de aperturas de WhatsApp en la ventana de tiempo (por pestaña / sessionStorage). */
const RATE_LIMIT_MAX = 5;
/** Ventana deslizante en ms (30 min). */
const RATE_LIMIT_WINDOW_MS = 30 * 60 * 1000;

function getPhoneDigits(): string {
  const raw = (import.meta.env.VITE_WHATSAPP_PHONE as string | undefined) ?? WHATSAPP_PHONE_DEFAULT;
  return raw.replace(/\D/g, '') || WHATSAPP_PHONE_DEFAULT;
}

export function buildWhatsAppHref(prefilledMessage: string): string {
  const digits = getPhoneDigits();
  const text = encodeURIComponent(prefilledMessage);
  return `https://wa.me/${digits}?text=${text}`;
}

export const whatsAppPresets = {
  demo: `Hola, quiero solicitar una demo gratuita de ${BRAND}.`,
  plan: (planName: 'Starter' | 'Estudio') =>
    `Hola, me interesa consultar por el plan ${planName} de ${BRAND}.`,
} as const;

const RATE_LIMIT_MESSAGE =
  'Alcanzaste el límite de contactos por WhatsApp en esta sesión. Probá de nuevo más tarde. Si necesitás ayuda urgente, escribinos por email.';

function readTimestamps(): number[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = sessionStorage.getItem(RATE_LIMIT_STORAGE_KEY);
    if (!raw) return [];
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter((n): n is number => typeof n === 'number' && Number.isFinite(n));
  } catch {
    return [];
  }
}

/** Reserva un intento de apertura; devuelve false si ya se superó el límite en la ventana actual. */
export function tryConsumeWhatsAppOpen(): boolean {
  if (typeof window === 'undefined') return true;

  const now = Date.now();
  const cutoff = now - RATE_LIMIT_WINDOW_MS;
  const recent = readTimestamps().filter((t) => t > cutoff);

  if (recent.length >= RATE_LIMIT_MAX) return false;

  recent.push(now);
  sessionStorage.setItem(RATE_LIMIT_STORAGE_KEY, JSON.stringify(recent));
  return true;
}

/** Usar en `onClick` de enlaces a WhatsApp: bloquea la navegación si se superó el límite. */
export function guardWhatsAppNavigation(e: { preventDefault(): void }): void {
  if (!tryConsumeWhatsAppOpen()) {
    e.preventDefault();
    window.alert(RATE_LIMIT_MESSAGE);
  }
}
