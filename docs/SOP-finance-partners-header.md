# SOP: Integración de Finance Partners en Primal Strength US

**Versión:** 1.0  
**Fecha:** 2 de septiembre de 2026  
**Autor:** Manus AI  
**Sitio:** [us.primalstrength.com](https://us.primalstrength.com)  
**Tema:** `primal-strength-us/ux-project - Live` (`142304510051`)

## 1. Objetivo

Este procedimiento documenta la instalación del script de Finance Partners en el encabezado global del sitio Primal Strength US. El script se carga en todas las páginas que utilizan el layout principal del tema, de acuerdo con la solicitud recibida por correo de Finance Partners.

> La pestaña de financiamiento existente no fue modificada. Este cambio se limita a cargar el script de integración dentro del encabezado global.

## 2. Cambio implementado

El archivo actualizado es:

```text
layout/theme.liquid
```

El siguiente elemento fue agregado dentro de la etiqueta `<head>`, después de los scripts globales existentes:

```html
<script type="text/javascript" src="https://integration.financepartners.com/ascstart.js?acv=92914413-cfea-4160-87af-e38b55aaf816" id="acapital"></script>
```

La ubicación en `layout/theme.liquid` permite que el script se incluya en el encabezado del tema y no requiere insertar código individualmente en cada plantilla de página. Shopify documenta que los archivos de layout controlan la estructura HTML general de un tema y que `theme.liquid` es el layout principal del storefront [1].

## 3. Alcance y controles de seguridad

La modificación fue deliberadamente limitada a un solo archivo y a una sola línea de script. No se modificaron plantillas de producto, formularios, snippets, estilos, configuraciones de financiamiento, contenido de la pestaña de financiamiento ni integraciones de Klaviyo.

La credencial de Theme Access se utilizó de manera temporal para el despliegue y se eliminó después de completar la verificación. No se incluyeron credenciales, tokens ni secretos en el repositorio.

| Elemento | Resultado |
|---|---|
| Archivo modificado | `layout/theme.liquid` |
| Scripts de Finance Partners agregados | 1 |
| ID utilizado | `acapital` |
| Pestaña de financiamiento existente | Sin cambios |
| Formularios y Klaviyo | Sin cambios |
| Credenciales en el repositorio | Ninguna |

## 4. Validación previa al despliegue

Antes de publicar el cambio se confirmó que la URL completa de Finance Partners aparecía exactamente una vez en el archivo local y que el elemento estaba dentro de `<head>`. El despliegue se realizó únicamente con `layout/theme.liquid`, evitando enviar otros archivos del tema.

## 5. Verificación posterior al despliegue

La página pública [us.primalstrength.com](https://us.primalstrength.com) fue consultada después del despliegue. La validación confirmó lo siguiente:

| Prueba | Resultado |
|---|---:|
| URL del script presente en el HTML público | Sí |
| Script dentro de `<head>` | Sí |
| Ocurrencias de la URL | 1 |
| Ocurrencias del ID `acapital` | 1 |
| Tema live actualizado | Sí |

La verificación confirma que el script está cargado una sola vez en el encabezado público del sitio.

## 6. Procedimiento de reversión

Si Finance Partners solicita retirar la integración, eliminar la línea `<script>` mostrada en la sección 2 de `layout/theme.liquid` y desplegar únicamente ese archivo al tema live. Después, consultar el HTML público y confirmar que la URL de Finance Partners y el ID `acapital` ya no aparecen.

No se debe eliminar ni modificar la pestaña de financiamiento existente como parte de esta reversión, salvo que el responsable del sitio lo solicite por separado.

## 7. Mantenimiento futuro

Si Finance Partners entrega una nueva URL, un nuevo parámetro `acv` o un nuevo identificador, sustituir únicamente los atributos correspondientes de la línea de integración, validar que exista una sola ocurrencia y volver a ejecutar la comprobación pública descrita en la sección 5. Cualquier cambio en la pestaña, el copy, los precios o la experiencia visual de financiamiento requiere una solicitud y validación independientes.

## Referencias

[1]: https://shopify.dev/docs/storefronts/themes/architecture/layouts "Shopify Developer Documentation — Layouts"

[2]: https://integration.financepartners.com/ascstart.js?acv=92914413-cfea-4160-87af-e38b55aaf816 "Finance Partners — Integration Script URL"
