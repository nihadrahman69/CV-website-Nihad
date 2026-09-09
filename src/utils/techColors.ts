export function getTechTextColor(tech: string): string {
  switch (tech.toLowerCase()) {
    case 'python':
      return '!text-emerald-500';
    case 'swift':
      return '!text-red-500';
    case 'java':
      return '!text-amber-500';
    case 'c':
      return '!text-blue-500';
    case 'mysql':
      return '!text-orange-500';
    default:
      return '';
  }
}
