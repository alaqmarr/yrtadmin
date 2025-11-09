export function parseText(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '-'); // 'g' flag = global (replace all)
}