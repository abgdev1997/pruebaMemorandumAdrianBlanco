Arranque del proyecto en modo dev: npm start

Arranque de test E2E: npx cypress open

NOTA: Debe tener el proyecto ejecutandose en modo dev para pasar los test.

· ¿Cómo decidió las opciones técnicas y arquitectónicas utilizadas como parte de su solución?

Basándome en anteriores proyectos profesionales y personales, he decidido la siguiente arquitectura:

cypress
e2e: En esta carpeta se encuentran las pruebas e2e.
public: Lugar del index.html y sample.json.
src:
assets: Material utilizado para confeccionar la web app.
components: Aquí se encuentran todos los componentes.
middleware: Todas las funciones para peticiones a servicios REST.
pages: Layouts de cada página.
routes: Rutas de la aplicación.
Types: Tipos de TypeScript.
He utilizado esta disposición de carpetas por que creo que es la más adecuada para el orden del proyecto, ya que tienes todo a la vista y facil acceso.

· ¿Hay alguna mejora que pueda hacer en su envío?

Sí, páginas individuales para cada película o serie con su url dinámica correspondiente. También un servicio de registro y login, además de las políticas de privacidad y demás.

· ¿Qué haría de manera diferente si se le asignara más tiempo?

Me basaría en un diseño ya creado o realizaria uno mucho más sofisticado. Mejoraría el rendimiento de la aplicación. Testearía el responsive para comprobar que todo va bien.
