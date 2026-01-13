# EGO Agency challenge
Challenge técnico para postulación a puesto de Frontend Developer 

# Tecnologías/librerías utilizadas
- Next.js (React.js) + Typescript
- TailwindCSS
- HeadlessUI
- Heroicons
- Embla Carousel

# Links
- Repo:
- Deploy:

# Consideraciones
Se asumieron los siguientes aspectos de diseño:
- Para aplicar filtros y orden en la vista general se hace una nueva llamada externa a la API, aunque podría haberse hecho del lado del cliente para evitar llamadas nuevas, teniendo en cuenta que el contenido puede cambiar de forma poco frecuente.
- Para ver el detalle del modelo desde la lista en pantallas grandes, se debe hacer un hover con el mouse y figurará el botón.
- Para ver el detalle del modelo desde la lista en pantallas pequeñas, se debe presionar sobre la card.
- La ruta para ver la lista general de modelos es /
- La ruta para ver un modelo en detalle es /detail/:carid

# Todo's
- Añadir loading
- Añadir mensajes de error en casos de fallar alguna llamada
- Añadir estilos condicionales para los filtros/ordenes activos
- Añadir estilos condicionales en el header, según si está en la vista larga o en el detalle del modelo.