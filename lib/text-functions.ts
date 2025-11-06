export function parseText(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z]/g, '-'); // 'g' flag = global (replace all)
}