# Actividad 8: Manejo de Archivos con Node.js (Gestor de Notas Personales)

## Descripción
Esta aplicación para backend en Node.js implementa un **Gestor de Notas Personales persistente** utilizando el módulo nativo `fs` (File System) y formato JSON para almacenar, consultar, crear y eliminar notas en el disco.

---

## Métodos de File System Utilizados
- `fs.existsSync(filePath)`: Comprueba si el archivo `notas.json` existe previamente.
- `fs.readFileSync(filePath, 'utf8')`: Lee el contenido síncrono del archivo en formato texto.
- `fs.writeFileSync(filePath, data, 'utf8')`: Escribe y persiste las notas en formato JSON con indentación.

---

## Guía de Commits Paso a Paso (6 Commits)

### Commit 1: Inicialización del Proyecto e Importación de fs
- **Mensaje:** `feat: inicializar proyecto Node.js e importar modulo fs con ruta de notas.json`
- **Archivos:** `gestorNotas.js`, `package.json`, `notas.json`

### Commit 2: Función para Agregar Notas con Persistencia
- **Mensaje:** `feat: implementar funcion agregarNota con lectura previa y guardado en JSON`
- **Archivos:** `gestorNotas.js`

### Commit 3: Función para Listar Notas Formateadas
- **Mensaje:** `feat: implementar funcion listarNotas para mostrar notas formateadas en consola`
- **Archivos:** `gestorNotas.js`

### Commit 4: Función para Eliminar Notas por Título
- **Mensaje:** `feat: implementar funcion eliminarNota con filtrado de arreglo y actualizacion del archivo`
- **Archivos:** `gestorNotas.js`

### Commit 5: Soporte para CLI con process.argv y Búsqueda
- **Mensaje:** `feat: agregar funcion buscarNota y soporte para comandos interactivos por CLI`
- **Archivos:** `gestorNotas.js`

### Commit 6: Documentación y Manual de Comandos
- **Mensaje:** `docs: documentar uso del modulo fs, ejemplos interactivos y README completo`
- **Archivos:** `README.md`

---