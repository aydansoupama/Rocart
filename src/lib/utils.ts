import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function hexToRgba(
  hex: string,
  alpha: number,
  backgroundColor?: string
): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  // Si pas de backgroundColor, retourner rgba normal
  if (!backgroundColor) {
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }

  // Parser la couleur de fond
  const bgR = parseInt(backgroundColor.slice(1, 3), 16);
  const bgG = parseInt(backgroundColor.slice(3, 5), 16);
  const bgB = parseInt(backgroundColor.slice(5, 7), 16);

  // Mélanger les couleurs selon l'alpha
  const finalR = Math.round(r * alpha + bgR * (1 - alpha));
  const finalG = Math.round(g * alpha + bgG * (1 - alpha));
  const finalB = Math.round(b * alpha + bgB * (1 - alpha));

  return `rgb(${finalR}, ${finalG}, ${finalB})`;
}

export function findAlphaForTarget(
  sourceHex: string,
  targetHex: string,
  backgroundHex: string = "#000000"
): number {
  const sR = parseInt(sourceHex.slice(1, 3), 16);
  const sG = parseInt(sourceHex.slice(3, 5), 16);
  const sB = parseInt(sourceHex.slice(5, 7), 16);

  const tR = parseInt(targetHex.slice(1, 3), 16);
  const tG = parseInt(targetHex.slice(3, 5), 16);
  const tB = parseInt(targetHex.slice(5, 7), 16);

  const bgR = parseInt(backgroundHex.slice(1, 3), 16);
  const bgG = parseInt(backgroundHex.slice(3, 5), 16);
  const bgB = parseInt(backgroundHex.slice(3, 5), 16);

  // Calculer l'alpha moyen qui minimise l'erreur
  const alphaR = (tR - bgR) / (sR - bgR);
  const alphaG = (tG - bgG) / (sG - bgG);
  const alphaB = (tB - bgB) / (sB - bgB);

  // Moyenne pondérée (l'œil humain est plus sensible au vert)
  const alpha = (alphaR + alphaG * 2 + alphaB) / 4;

  return Math.max(0, Math.min(1, alpha));
}

export function applyDiscountedPrice(
  originalPrice: number,
  discountPercentage: number
): string {
  const discounted = originalPrice * (discountPercentage / 100);
  const floored = Math.floor(discounted * 100) / 100;
  return floored.toFixed(2);
}
