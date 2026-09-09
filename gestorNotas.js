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

export function agregarNota(titulo, contenido) {
  if (!titulo || !contenido) {
    console.warn('[AVISO] Título y contenido son obligatorios para crear una nota.');
    return false;
  }

  const notas = leerNotasArchivo();
  const existe = notas.some((nota) => nota.titulo.toLowerCase() === titulo.trim().toLowerCase());

  if (existe) {
    console.warn(`[DUPLICADO] Ya existe una nota con el título "${titulo}". Usa otro título.`);
    return false;
  }

  const nuevaNota = {
    id: notas.length > 0 ? Math.max(...notas.map((n) => n.id || 0)) + 1 : 1,
    titulo: titulo.trim(),
    contenido: contenido.trim(),
    fecha: new Date().toISOString()
  };

  notas.push(nuevaNota);
  guardarNotasArchivo(notas);
  console.log(`[OK] Nota agregada con éxito: "${titulo}"`);
  return true;
}

export function listarNotas() {
  const notas = leerNotasArchivo();

  console.log('\n========================================');
  console.log('         LISTADO DE NOTAS GUARDADAS     ');
  console.log('========================================');

  if (notas.length === 0) {
    console.log('No hay notas guardadas actualmente.');
    console.log('========================================\n');
    return;
  }

  notas.forEach((nota, index) => {
    console.log(`Nota #${index + 1} (ID: ${nota.id})`);
    console.log(`  * Título   : ${nota.titulo}`);
    console.log(`  * Contenido: ${nota.contenido}`);
    console.log(`  * Fecha    : ${nota.fecha}`);
    console.log('----------------------------------------');
  });

  console.log(`Total de notas registradas: ${notas.length}`);
  console.log('========================================\n');
}

listarNotas();