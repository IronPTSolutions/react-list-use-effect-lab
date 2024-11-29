# React Use Effect LAB

## Iteración 1: Crear la Página Home

En esta primera iteración, trabajaremos con **react-router-dom** (ya instalado en el proyecto). El objetivo es crear una página llamada *Home*, que será accesible desde la ruta `/`.

> Simplemente muestra un texto _lorem ipsum_ en la página Home.

---

## Iteración 2: Componente PageLayout

La página que acabamos de construir, junto con las próximas que crearemos, no respetan los márgenes de CSS. En esta iteración, crearemos un componente llamado `PageLayout` que solucionará este problema. 

📂 **Ubicación:** `components/layouts/page-layout`

1. Usa un contenedor de **Bootstrap** para definir el diseño.
2. Establece los márgenes necesarios.

---

## Iteración 3: Listado de Contactos

En esta iteración, trabajaremos con el listado de contactos ubicado en `data/users.json`. Si tienes curiosidad, puedes generar nuevos usuarios ejecutando el comando `npm run build-users`. Para entender cómo funciona, revisa las instrucciones en el `package.json`. 

### Componentes a crear:
- **ContactList**: será responsable de gestionar el estado de los contactos.
- **ContactItem**: representará cada contacto individual.

**Tareas:**
- Usa el hook `useEffect` en `ContactList` para cargar la lista de contactos desde `data/users.json`.
- Enfócate en implementar la lógica y funcionalidad. No te preocupes demasiado por el diseño en esta etapa; ya habrá tiempo para eso.

---

## Iteración 4: Eliminar Contactos

Añade un botón al componente `ContactItem` que permita eliminar un contacto de la lista. 

**Nota:** Recuerda que el estado de la lista de contactos está gestionado por el componente `ContactList`.

---

## Iteración 5: Filtrar Contactos por Nombre

En esta última iteración, agrega un campo de entrada en la página *Home*. El texto ingresado en este input deberá filtrar la lista de contactos en tiempo real, mostrando únicamente aquellos cuyo nombre coincida con el filtro.
