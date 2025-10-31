export class Formatter {
  static capitalize(str: string) {
    return str.replace(/\b\w/, l => l.toUpperCase());
  }

  static capitalizeAll(str: string) {
    return str.replaceAll(/\b\w/g, l => l.toUpperCase());
  }
}
