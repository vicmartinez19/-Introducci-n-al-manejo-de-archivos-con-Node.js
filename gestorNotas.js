import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, 'notas.json');

export function leerNotasArchivo() {
  try {
    if (!fs.existsSync(filePath)) {
      return [];
    }
    const rawData = fs.readFileSync(filePath, 'utf8');
    if (!rawData.trim()) return [];
    return JSON.parse(rawData);
  } catch (error) {
    console.error('[ERROR] Error al leer el archivo de notas:', error.message);
    return [];
  }
}

export function guardarNotasArchivo(notas) {
  try {
    fs.writeFileSync(filePath, JSON.stringify(notas, null, 2), 'utf8');
  } catch (error) {
    console.error('[ERROR] Error al escribir en el archivo de notas:', error.message);
  }
}

console.log('Notas cargadas inicialmente:', leerNotasArchivo());