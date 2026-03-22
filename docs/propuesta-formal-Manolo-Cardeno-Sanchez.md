## Manolo Cárdeno Sánchez
# Propuesta formal del proyecto: Scantral

## Índice

- [1. Identificación de necesidades](#1-identificación-de-necesidades-criterio-1c)
  - [Problema identificado](#problema-identificado)
  - [Detección de la necesidad](#detección-de-la-necesidad)
  - [Usuarios o beneficiarios de la solución](#usuarios-o-beneficiarios-de-la-solución)
- [2. Oportunidades de negocio](#2-oportunidades-de-negocio-criterio-1d)
  - [Análisis del mercado](#análisis-del-mercado)
  - [Limitaciones de las soluciones actuales](#limitaciones-de-las-soluciones-actuales)
  - [Diferenciación de la propuesta](#diferenciación-de-la-propuesta)
  - [Potencial de la solución](#potencial-de-la-solución)
- [3. Tipo de proyecto](#3-tipo-de-proyecto-criterio-1e)
  - [Tipo de aplicación](#tipo-de-aplicación)
  - [Justificación del tipo de proyecto](#justificación-del-tipo-de-proyecto)
  - [Arquitectura propuesta](#arquitectura-propuesta)
- [4. Características específicas](#4-características-específicas-criterio-1f)
  - [Funcionalidades principales (MVP)](#funcionalidades-principales-mvp)
  - [Funcionalidades adicionales](#funcionalidades-adicionales)
  - [Requisitos técnicos](#requisitos-técnicos)
- [5. Obligaciones legales y prevención](#5-obligaciones-legales-y-prevención-criterio-1g)
  - [Protección de datos personales (RGPD)](#protección-de-datos-personales-rgpd)
  - [Seguridad de la información](#seguridad-de-la-información)
  - [Cumplimiento de la LSSI-CE](#cumplimiento-de-la-lssi-ce)
  - [Accesibilidad web (WCAG)](#accesibilidad-web-wcag)
- [6. Ayudas y subvenciones](#6-ayudas-y-subvenciones-criterio-1h)
  - [Programas de ayudas públicas](#programas-de-ayudas-públicas)
  - [Recursos tecnológicos gratuitos o de bajo coste](#recursos-tecnológicos-gratuitos-o-de-bajo-coste)
  - [Viabilidad económica del proyecto](#viabilidad-económica-del-proyecto)
- [7. Guión de trabajo](#7-guión-de-trabajo-criterio-1i)
  - [Fases principales del proyecto](#fases-principales-del-proyecto)
  - [Cronograma general](#cronograma-general)
  - [Sprint 1 — Configuración del entorno, proyecto base y documentación inicial](#sprint-1--configuración-del-entorno-proyecto-base-y-documentación-inicial)
  - [Sprint 2 — Diseño UI/UX con Figma](#sprint-2--diseño-uiux-con-figma)
  - [Sprint 3 — Modelo de datos y API REST básica](#sprint-3--modelo-de-datos-y-api-rest-básica)
  - [Sprint 4 — CRUD completo y sistema de alertas](#sprint-4--crud-completo-y-sistema-de-alertas)
  - [Sprint 5 — Autenticación y seguridad](#sprint-5--autenticación-y-seguridad)
  - [Sprint 6 — Integración de inteligencia artificial](#sprint-6--integración-de-inteligencia-artificial)
  - [Sprint 7 — Integración OCR como sistema de respaldo](#sprint-7--integración-ocr-como-sistema-de-respaldo)
  - [Sprint 8 — Dashboard, duplicados e historial de renovaciones](#sprint-8--dashboard-duplicados-e-historial-de-renovaciones)
  - [Sprint 9 — Compartición, exportación, PDF y despliegue](#sprint-9--compartición-exportación-pdf-y-despliegue)
  - [Sprint 10 — Pruebas integrales y corrección de errores](#sprint-10--pruebas-integrales-y-corrección-de-errores)
  - [Sprint 11 — Pulido, documentación y entrega final](#sprint-11--pulido-documentación-y-entrega-final)
  - [Gestión de retrasos](#gestión-de-retrasos)
  - [Herramientas de gestión](#herramientas-de-gestión)

---

## 1. Identificación de necesidades (Criterio 1c)

### Problema identificado

En la vida cotidiana es bastante habitual que las personas pierdan tickets de compra, olviden cuándo caducan ciertos documentos importantes o descubran demasiado tarde que una garantía ya ha expirado. Este tipo de situaciones ocurre con más frecuencia de lo que parece y puede provocar pequeños problemas administrativos o incluso pérdidas económicas evitables.

Muchos documentos personales tienen una fecha de caducidad o requieren renovaciones periódicas. Entre ellos se encuentran, por ejemplo:

- Documento Nacional de Identidad (DNI)
- Pasaporte
- Carnet de conducir
- Seguros
- ITV del vehículo

Además de estos documentos oficiales, también existen otros elementos cotidianos que requieren cierto control temporal, como por ejemplo:

- Tickets de compra
- Garantías de productos electrónicos
- Plazos de devolución de productos
- Facturas o recibos de servicios

En muchos casos los usuarios no disponen de un sistema claro para organizar esta información. Es común que los tickets se pierdan, que los documentos se guarden en lugares diferentes o que los recordatorios de caducidad se olviden hasta que el problema ya ha aparecido.

Actualmente existen aplicaciones que permiten guardar documentos o crear recordatorios de fechas importantes. Sin embargo, la mayoría de estas herramientas se limitan a almacenar información o enviar notificaciones simples. No suelen interpretar la información contenida en los documentos ni aplicar ningún tipo de lógica que ayude al usuario a comprender mejor los plazos asociados a cada elemento.

Esto genera una oportunidad clara para desarrollar una herramienta que no solo almacene documentos o tickets, sino que también sea capaz de analizar su contenido y aplicar reglas automáticas para ayudar al usuario a gestionar su documentación de forma más inteligente.

### Detección de la necesidad

La idea del proyecto surge a partir de la observación de situaciones reales en el entorno cercano. En concreto, el problema aparece con frecuencia en personas que no tienen un sistema claro de organización de documentos o que tienden a perder tickets de compra y olvidar plazos de garantía.

A partir de esta observación se identificó que:

- Muchos usuarios no conservan correctamente los tickets de compra.
- La gestión de documentos personales suele hacerse de forma manual o desorganizada.
- Los recordatorios suelen depender únicamente de calendarios personales o notas.

Además, se realizó una búsqueda de aplicaciones existentes que realizan funciones similares. Durante este análisis se comprobó que muchas de ellas funcionan únicamente como repositorios de documentos o gestores de recordatorios, sin ofrecer funcionalidades avanzadas de interpretación o análisis automático.

Esto permitió identificar una oportunidad para crear una solución más completa que combine gestión documental, análisis automático de información y generación de alertas inteligentes.

### Usuarios o beneficiarios de la solución

El sistema está pensado principalmente para usuarios particulares que desean mejorar la organización de sus documentos personales y evitar olvidos relacionados con vencimientos o garantías.

Entre los usuarios potenciales se encuentran:

- Personas que desean tener controlados sus documentos personales.
- Usuarios que realizan muchas compras y quieren conservar correctamente los tickets.
- Personas que tienden a olvidar plazos de caducidad o renovación de documentos.
- Familias, parejas o grupos en general que quieran gestionar conjuntamente documentación común.

En general, la aplicación está orientada a cualquier usuario que quiera disponer de un sistema sencillo que le ayude a mantener organizada su documentación administrativa.

---

## 2. Oportunidades de negocio (Criterio 1d)

### Análisis del mercado

Durante el análisis del sector se identificaron varias aplicaciones que ofrecen funcionalidades relacionadas con el almacenamiento de tickets o la gestión de garantías.

Entre las más representativas se encuentran:

**ReceiptSafe**

Permite guardar tickets escaneados y gestionar las garantías asociadas a cada compra, incluyendo recordatorios antes de que estas caduquen.

Sin embargo presenta algunas limitaciones:

- Solo está disponible como aplicación móvil.
- Las fechas de expiración deben introducirse manualmente.
- No utiliza sistemas avanzados de interpretación automática de tickets.
- Es una aplicación de pago.

**SlipCrate**

Aplicación que permite escanear tickets utilizando inteligencia artificial para extraer información relevante.

Sus limitaciones principales son:

- Está enfocada únicamente en garantías de productos.
- No permite gestionar documentación oficial.
- Solo ofrece una versión gratuita limitada.
- No dispone de funcionalidades de gestión compartida entre usuarios.

**TrackWarranty**

Sistema basado en IA que analiza recibos y genera alertas antes de que la garantía expire.

Entre sus limitaciones destacan:

- Solo está disponible como aplicación móvil.
- Está centrada exclusivamente en garantías de productos.
- No permite gestionar otros tipos de documentos administrativos.

### Limitaciones de las soluciones actuales

Tras analizar las aplicaciones existentes se detectaron varias limitaciones comunes:

- Funcionan principalmente como archivadores de tickets o documentos.
- No interpretan el contenido del ticket o documento.
- No aplican reglas basadas en normativa o tipo de producto.
- No permiten gestionar documentación personal oficial.
- No incluyen funcionalidades de gestión compartida entre usuarios.

### Diferenciación de la propuesta

La propuesta de este proyecto busca diferenciarse mediante varias funcionalidades clave.

**Motor de reglas de garantías y devoluciones**

El sistema analizará el contenido de tickets o documentos mediante inteligencia artificial para extraer información relevante. A partir de estos datos, el sistema podrá aplicar reglas automáticas basadas en el tipo de producto, comercio o documento para estimar plazos de garantía o devolución.

**Gestor inteligente de vencimientos administrativos**

La aplicación permitirá al usuario simular si sus documentos oficiales estarán vigentes en una fecha concreta. Esta funcionalidad puede resultar útil para planificar viajes, trámites administrativos o renovaciones con antelación suficiente.

**Detector de documentos duplicados**

El sistema será capaz de detectar posibles duplicados comparando información como fechas, comercios o textos identificados en las imágenes subidas por el usuario.

**Gestión compartida de documentos**

La aplicación permitirá crear listas o colecciones de documentos compartidas entre varios usuarios, lo que facilitará la gestión de documentación dentro de unidades familiares o grupos.

**Historial de renovaciones**

Cuando un documento se renueve, el sistema permitirá conservar versiones anteriores para mantener un registro histórico.

**Exportación de recordatorios**

Los recordatorios de vencimiento podrán exportarse a calendarios externos como Google Calendar, Outlook o Apple Calendar.

**Generación de resúmenes**

El sistema permitirá generar documentos PDF con un resumen de los documentos almacenados.

### Potencial de la solución

El proyecto presenta potencial tanto a nivel de adopción por usuarios finales como de evolución futura hacia un producto más completo dentro del ámbito de la gestión personal de documentos.

En primer lugar, el público objetivo es amplio. Cualquier persona que realice compras, gestione garantías de productos o tenga que controlar la caducidad de documentos personales puede beneficiarse de una herramienta de este tipo. En la práctica, esto incluye a estudiantes, trabajadores, familias o incluso pequeños autónomos que necesiten organizar tickets, facturas y documentos administrativos. A diferencia de herramientas empresariales de gestión documental, esta solución se enfoca en el uso cotidiano y personal, lo que amplía considerablemente el número potencial de usuarios.

Además, existe un contexto tecnológico favorable para este tipo de aplicaciones. El aumento del uso del teléfono móvil como principal dispositivo de gestión personal, junto con la digitalización creciente de recibos y documentos, hace que cada vez sea más habitual que los usuarios necesiten centralizar información importante en un único lugar accesible y seguro. Una aplicación que combine almacenamiento, extracción automática de información y recordatorios inteligentes puede cubrir esta necesidad de forma eficiente.

Desde el punto de vista de escalabilidad, el proyecto también tiene margen de evolución. Aunque el MVP se centrará en la gestión de tickets, garantías y documentos con fechas relevantes, en el futuro podría ampliarse con funcionalidades adicionales como:
- Sincronización entre dispositivos
- Almacenamiento en la nube
- Gestión de suscripciones o contratos recurrentes.

Asimismo, el modelo podría evolucionar hacia un modelo freemium, donde la versión básica permita gestionar documentos y recordatorios, mientras que funciones avanzadas (mayor almacenamiento, análisis automático más avanzado o integraciones externas) podrían ofrecerse en versiones premium.

Por todo ello, aunque el proyecto se desarrolla inicialmente como propuesta académica, el concepto tiene potencial para evolucionar hacia una aplicación real con posibilidades de crecimiento tanto en funcionalidades como en base de usuarios.

---

## 3. Tipo de proyecto (Criterio 1e)

### Tipo de aplicación

El proyecto se desarrollará como una aplicación web moderna basada en el modelo de Single Page Application (SPA). En este tipo de aplicaciones, el navegador carga inicialmente una única página HTML y, a partir de ese momento, el contenido de la interfaz se actualiza dinámicamente mediante JavaScript sin necesidad de recargar completamente la página.

Aunque la aplicación contará con diferentes vistas o secciones (por ejemplo: página de inicio de sesión, dashboard principal, gestión de documentos y sección de ajustes), estas se gestionarán mediante un sistema de enrutado en el cliente, que permite cambiar entre vistas de forma dinámica manteniendo la experiencia fluida para el usuario.

Este enfoque es ampliamente utilizado en aplicaciones modernas que requieren una interacción continua con el usuario, como paneles de control, herramientas de gestión o aplicaciones de productividad. En este caso, resulta especialmente adecuado debido a la necesidad de visualizar información organizada, interactuar con documentos, gestionar recordatorios y actualizar datos de forma frecuente.

Además, este tipo de arquitectura facilita una mejor separación entre la lógica del cliente (interfaz de usuario) y la lógica del servidor (gestión de datos, autenticación, procesamiento de información), lo que contribuye a mejorar la mantenibilidad y escalabilidad del proyecto.

### Justificación del tipo de proyecto

La elección de una SPA responde a varios factores relacionados con la naturaleza del proyecto.

En primer lugar, la aplicación está orientada a la gestión personal de documentos, tickets y garantías, lo que implica que el usuario interactuará frecuentemente con la interfaz para consultar información, añadir nuevos documentos o revisar notificaciones. Una aplicación SPA permite realizar estas acciones de forma rápida y sin interrupciones visuales, mejorando la experiencia de usuario.

En segundo lugar, la aplicación incorporará funcionalidades de procesamiento de información, como la extracción automática de datos mediante inteligencia artificial a partir de imágenes. Esto requiere una interacción fluida entre el cliente y el servidor, donde el usuario pueda subir un documento o imagen y recibir de forma rápida los datos extraídos. Una arquitectura SPA facilita este tipo de interacción mediante llamadas asíncronas a la API del servidor.

También se ha tenido en cuenta la posibilidad de evolución futura del proyecto. Una arquitectura basada en SPA permite escalar la aplicación con relativa facilidad, añadiendo nuevas funcionalidades, integraciones o módulos sin necesidad de rediseñar completamente la estructura del sistema.

### Arquitectura propuesta

El sistema seguirá una arquitectura cliente-servidor, donde las responsabilidades estarán claramente separadas entre el frontend y el backend.

El cliente (frontend) será responsable de la interfaz de usuario y de la interacción con el usuario final. Desde el navegador, el usuario podrá realizar acciones como iniciar sesión, subir documentos, consultar garantías registradas o revisar recordatorios de caducidad. El frontend se encargará de gestionar las vistas de la aplicación, validar datos básicos introducidos por el usuario y comunicarse con el servidor mediante peticiones HTTP.

Por otro lado, el servidor (backend) será responsable de gestionar la lógica de negocio de la aplicación. Entre sus funciones principales se encuentran:

- Gestionar la autenticación de usuarios
- Almacenar y recuperar documentos y metadatos
- Procesar imágenes o tickets mediante IA/OCR para extraer información relevante
- Calcular automáticamente fechas de caducidad o vencimiento según el tipo de documento
- Gestionar recordatorios y notificaciones

El backend expondrá una API REST que permitirá al cliente realizar operaciones sobre los recursos del sistema, como crear documentos, consultar información almacenada o actualizar datos existentes.

Finalmente, toda la información relevante se almacenará en una base de datos, donde se guardarán los datos de los usuarios, los documentos registrados, las fechas asociadas y otros metadatos necesarios para el funcionamiento del sistema.

---

## 4. Características específicas (Criterio 1f)

### Funcionalidades principales (MVP)

El producto mínimo viable incluirá las siguientes funcionalidades:

- Registro y autenticación de usuarios.
- Registro manual de documentos personales con fechas de emisión y caducidad.
- Registro automático mediante subida de tickets o documentos a traves de imágenes.
- Análisis automático de documentos mediante inteligencia artificial directamente sobre la imagen.
- Extracción de texto mediante OCR como sistema de respaldo en caso de fallo de la IA.
- Cálculo automático de plazos de garantía o caducidad en base a los datos obtenidos.
- Sistema de alertas para documentos próximos a expirar.
- Dashboard principal con resumen de documentos y vencimientos.

### Funcionalidades adicionales

No tan importantes como las funcionalidades MVP, se añadirán funcionalidades extra como:

- Gestión compartida de documentos entre varios usuarios.
- Detección automática de tickets duplicados.
- Historial de renovaciones de documentos.
- Exportación de recordatorios a calendarios externos.
- Generación de informes en PDF.

**Cabe destacar que todas estas funcionalidades estarán implementadas en el proyecto y solo alguna de las extras podría quedarse en el tintero por falta de tiempo o imprevistos. La idea es incluir absolutamente todas.**

### Requisitos técnicos

**Frontend**

- Angular
- TypeScript
- HTML5
- CSS / SCSS

**Backend**

- Java
- Spring Boot

**Procesamiento de documentos**

- APIs de inteligencia artificial
- Tesseract OCR como sistema de respaldo

**Base de datos**

- PostgreSQL

**Despliegue**

- Docker
- Docker Compose

---

## 5. Obligaciones legales y prevención (Criterio 1g)

El desarrollo de una aplicación que gestiona información personal y documentos de los usuarios implica tener en cuenta diferentes normativas legales relacionadas con la protección de datos, la seguridad de la información y la accesibilidad de los servicios digitales. Aunque el proyecto se desarrolla inicialmente en un contexto académico, es importante contemplar estas obligaciones desde la fase de diseño para garantizar que la aplicación pueda adaptarse a un entorno real de uso.

### Protección de datos personales (RGPD)

La principal normativa aplicable es el Reglamento General de Protección de Datos (RGPD) de la Unión Europea, que regula el tratamiento de datos personales de los usuarios. Dado que la aplicación almacenará información como cuentas de usuario, documentos personales, tickets de compra y fechas asociadas a garantías o caducidades, será necesario aplicar medidas básicas de protección de datos.

Entre las medidas previstas se encuentran:

- Recopilación mínima de datos personales, solicitando únicamente la información necesaria para el funcionamiento de la aplicación.
- Consentimiento explícito del usuario para el almacenamiento y tratamiento de sus documentos y datos personales.
- Derecho de acceso, modificación y eliminación de datos, permitiendo que el usuario pueda consultar, editar o eliminar su información almacenada.
- Transparencia en el uso de los datos, informando claramente al usuario sobre qué información se almacena y con qué finalidad.

### Seguridad de la información

Para proteger los datos almacenados en la aplicación, se implementarán diversas medidas de seguridad básicas orientadas a evitar accesos no autorizados o pérdidas de información.

Entre estas medidas se incluyen:

- Autenticación de usuarios mediante sistema de login seguro, utilizando credenciales únicas para cada usuario.
- Almacenamiento seguro de contraseñas, aplicando técnicas de cifrado o hashing para evitar que las contraseñas se guarden en texto plano.
- Uso de conexiones seguras mediante HTTPS, garantizando que la comunicación entre el cliente y el servidor esté cifrada.
- Control de acceso a los datos, de forma que cada usuario solo pueda acceder a sus propios documentos y registros.
- Gestión segura de archivos subidos por los usuarios, evitando la ejecución de archivos maliciosos y limitando los formatos permitidos.

Estas medidas contribuyen a mejorar la protección de la información personal y a reducir posibles riesgos de seguridad.

### Cumplimiento de la LSSI-CE

Otra normativa relevante es la Ley de Servicios de la Sociedad de la Información y Comercio Electrónico (LSSI-CE), que regula determinados aspectos de los servicios digitales prestados a través de internet.

Aunque el proyecto no está inicialmente orientado a la comercialización, a futuro y escalando el proyecto podría estarlo, asi que en un escenario real sería necesario incluir elementos como:

- Aviso legal
- Política de privacidad
- Política de cookies, en caso de utilizar tecnologías de seguimiento o análisis.

Estos documentos informan al usuario sobre el funcionamiento del servicio, el tratamiento de sus datos y las responsabilidades del proveedor de la aplicación.

### Accesibilidad web (WCAG)

Además de los aspectos legales relacionados con la protección de datos, también se tendrá en cuenta la accesibilidad de la aplicación, siguiendo en la medida de lo posible las recomendaciones de las Web Content Accessibility Guidelines (WCAG).

El objetivo es facilitar que la aplicación pueda ser utilizada por el mayor número posible de personas, incluyendo usuarios con diferentes capacidades o limitaciones.

Entre las medidas básicas que se contemplarán se encuentran:

- Uso de contrastes adecuados de color para mejorar la legibilidad
- Estructura clara de la interfaz y navegación sencilla
- Uso de etiquetas semánticas

Aunque no se pretende implementar un cumplimiento completo de todas las pautas WCAG, se procurará seguir buenas prácticas de accesibilidad durante el desarrollo de la interfaz.

En conjunto, la consideración de estos aspectos legales y de seguridad desde el inicio del proyecto contribuye a desarrollar una aplicación más responsable, segura y preparada para un posible uso real por parte de usuarios.

---

## 6. Ayudas y subvenciones (Criterio 1h)

El desarrollo de proyectos tecnológicos, especialmente aquellos relacionados con la digitalización y el desarrollo de software, puede beneficiarse de diferentes programas de ayudas, subvenciones o financiación tanto a nivel nacional como europeo. Aunque este proyecto se desarrolla inicialmente en un contexto académico, resulta interesante analizar qué tipos de apoyo podrían aprovecharse si la aplicación evolucionara hacia un producto real.

### Programas de ayudas públicas

Uno de los programas más conocidos en España es el Kit Digital, una iniciativa impulsada por el Gobierno de España. Este programa tiene como objetivo fomentar la digitalización de pequeñas empresas, microempresas y trabajadores autónomos mediante subvenciones destinadas a la adopción de soluciones tecnológicas.

Una aplicación como la propuesta podría encajar dentro de las soluciones relacionadas con gestión documental o herramientas de productividad digital, por lo que podría beneficiarse indirectamente de este tipo de programas si se ofreciera como servicio a empresas o profesionales.

Otra posible vía de financiación sería a través de ENISA (Empresa Nacional de Innovación), una entidad pública que ofrece préstamos participativos para apoyar proyectos emprendedores con base tecnológica. Este tipo de financiación está orientado a startups y empresas emergentes que desarrollan productos innovadores con potencial de crecimiento. Si el proyecto evolucionara hacia una plataforma más completa de gestión de documentos personales o profesionales, podría llegar a encajar en este tipo de programas.

También existen programas gestionados por comunidades autónomas, cámaras de comercio o incubadoras tecnológicas que ofrecen apoyo económico, mentoría o acceso a recursos para proyectos innovadores en fases iniciales.

### Recursos tecnológicos gratuitos o de bajo coste

Además de las ayudas económicas directas, el proyecto puede apoyarse en una gran cantidad de recursos tecnológicos gratuitos o con planes freemium que permiten desarrollar aplicaciones completas sin necesidad de realizar grandes inversiones iniciales.

En primer lugar, para el desarrollo y control de versiones del código se utilizarán plataformas como GitHub, que permiten alojar repositorios, gestionar versiones del software y colaborar en el desarrollo del proyecto de forma organizada.

En cuanto al despliegue de la aplicación, existen servicios de hosting y despliegue con planes gratuitos que permiten publicar aplicaciones web sin coste en las primeras fases del proyecto. Plataformas como Vercel, Netlify o Render ofrecen planes gratuitos adecuados para proyectos personales o académicos. En el caso de este proyecto, usaré los beneficios que me da tener una cuenta tipo estudiante en Digital Ocean, el cual ofrece 200$ de credito gratuito para el despliegue.

Para el procesamiento de documentos, el proyecto incorporará el uso de modelos de inteligencia artificial o procesamiento de lenguaje natural para interpretar la información extraída de imagenes y convertirla en datos estructurados. Por ejemplo, a partir del texto detectado en un ticket se podría identificar automáticamente elementos como la fecha de compra, el importe total o el nombre del establecimiento, entre otros datos.

Se están considerando diferentes opciones tecnológicas, entre ellas:

- APIs de modelos de lenguaje, como las ofrecidas por OpenAI, que permiten interpretar texto y extraer información estructurada a partir de documentos.
- Servicios de inteligencia artificial en la nube, como los proporcionados por Google Cloud o Microsoft Azure, que ofrecen herramientas específicas para análisis de documentos.

Como sistema de respaldo, en caso de que el procesamiento con IA falle, también incorporaremos un sistema de reconocimiento óptico de caracteres (OCR) para extraer automáticamente texto a partir de imágenes de tickets o documentos escaneados. Para esta funcionalidad se utilizará Tesseract OCR, un motor de reconocimiento de texto de código abierto ampliamente utilizado en aplicaciones de procesamiento documental. Esta herramienta permite detectar y convertir texto presente en imágenes en texto digital que posteriormente puede ser procesado por la aplicación.


El uso de estas herramientas permitirá dotar al proyecto de una capa de automatización inteligente, evitando que el usuario tenga que introducir manualmente toda la información de los documentos que registre en la aplicación.

### Viabilidad económica del proyecto

Gracias a la disponibilidad de estas herramientas y recursos gratuitos, el desarrollo del proyecto resulta técnicamente viable incluso con recursos limitados. Esto permite centrarse en la implementación de las funcionalidades principales sin necesidad de invertir grandes cantidades en infraestructura.

En caso de que la aplicación evolucionara hacia un producto real, podrían explorarse diferentes modelos de monetización, como un modelo freemium, donde la funcionalidad básica sea gratuita y se ofrezcan características avanzadas mediante suscripción, o bien un modelo orientado a servicios adicionales relacionados con la gestión avanzada de documentos.

En definitiva, la combinación de ayudas públicas, recursos tecnológicos gratuitos y modelos de negocio digitales hace que proyectos de este tipo puedan desarrollarse y escalar progresivamente con una inversión inicial relativamente baja.

---

## 7. Guión de trabajo (Criterio 1i)

### Fases principales del proyecto

| Fase | Sprints | Descripción |
|------|---------|-------------|
| **Fase 1 – Inicio y base del proyecto** | Sprint 1 | Configuración del entorno, estructura del proyecto y documentación inicial |
| **Fase 2 – Diseño UI/UX** | Sprint 2 | Diseño de wireframes, mockups y prototipos e identidad visual con Figma |
| **Fase 3 – Núcleo de la aplicación** | Sprints 3 y 4 | Modelo de datos, API REST completa y frontend Angular conectado |
| **Fase 4 – Autenticación y seguridad** | Sprint 5 | Sistema de login/registro con JWT y control de acceso por usuario |
| **Fase 5 – Automatización documental** | Sprints 6 y 7 | Integración de inteligencia artificial para análisis de imágenes y OCR como sistema de respaldo |
| **Fase 6 – Funcionalidades avanzadas** | Sprints 8 y 9 | Dashboard, duplicados, historial, compartición, exportación, PDF y despliegue |
| **Fase 7 – Cierre y entrega** | Sprints 10 y 11 | Pruebas integrales, corrección de errores, pulido y entrega final |

---

### Cronograma general

El proyecto se articula en **11 sprints** en total, cada uno durando una semana, excepto el primero que abarca el desarrollo de la idea del proyecto y esta propuesta formal y durará dos semanas. Cada dos semanas se hará un sprint review de los dos últimos sprints realizados.

| Sprint | Duración | Fechas | Sprint Review | Hito principal |
|--------|----------|--------|---------------|----------------|
| **Sprint 1** | 2 semanas | 27 feb – 13 mar | 13 mar | Proyecto base arrancando, propuesta formal y resumida entregadas |
| **Sprint 2** | 1 semana | 14 – 20 mar | 27 mar | Wireframes y prototipos completos en Figma |
| **Sprint 3** | 1 semana | 21 – 27 mar | 27 mar | Modelo de datos implementado, API REST básica operativa |
| **Sprint 4** | 1 semana | 28 mar – 3 abr | 10 abr | CRUD completo de ítems y alertas funcional end-to-end |
| **Sprint 5** | 1 semana | 4 – 10 abr | 10 abr | Autenticación JWT operativa, acceso por usuario protegido |
| **Sprint 6** | 1 semana | 11 – 17 abr | 24 abr | IA funcional: imagen → formulario prerrellenado automáticamente |
| **Sprint 7** | 1 semana | 18 – 24 abr | 24 abr | OCR integrado como sistema de respaldo ante fallos de la IA |
| **Sprint 8** | 1 semana | 25 abr – 1 may | 8 may | Dashboard, duplicados e historial de renovaciones operativos |
| **Sprint 9** | 1 semana | 2 – 8 may | 8 may | Compartición, exportación iCal, PDF y despliegue en Digital Ocean |
| **Sprint 10** | 1 semana | 9 – 15 may | 22 may | Pruebas integrales completadas, errores críticos corregidos |
| **Sprint 11** | 1 semana | 16 – 22 may | 22 may | Entrega final: producto completo, estable y documentado |

---

### Sprint 1 — Configuración del entorno, proyecto base y documentación inicial
**Fechas:** 27 feb – 13 mar 2026 · **Sprint Review:** 13 de marzo

- Redacción de la propuesta formal y resumida del proyecto.
- Definición del product backlog inicial y arquitectura del sistema.
- Creación del repositorio y tablero de gestión de tareas.
- Inicialización del proyecto backend y frontend con la estructura base de carpetas y módulos.
- Configuración del entorno Docker y ficheros de propiedades para desarrollo y producción.
- Verificación del arranque correcto de todos los servicios en local y con Docker.

**Hito:** Ambos proyectos arrancan correctamente en local y con Docker. Repositorio organizado y documentación inicial entregada.

---

### Sprint 2 — Diseño UI/UX con Figma
**Fechas:** 14 – 20 mar 2026 · **Sprint Review:** 27 de marzo

- Análisis de aplicaciones similares como referencia visual.
- Definición de paleta de colores, tipografía y sistema de componentes.
- Wireframes de baja fidelidad de todas las pantallas principales.
- Prototipos de alta fidelidad de las pantallas más relevantes.
- Definición de flujos de navegación.
- Publicación del enlace al prototipo en el repositorio.

**Hito:** Prototipo navegable completo en Figma disponible antes de comenzar la implementación del frontend.

---

### Sprint 3 — Modelo de datos y API REST básica
**Fechas:** 21 – 27 mar 2026 · **Sprint Review:** 27 de marzo

- Definición del modelo de datos principal con sus atributos y tipos.
- Implementación de la capa de acceso a datos, lógica de negocio y operaciones básicas de consulta y creación.
- Definición de los objetos de transferencia de datos con validaciones básicas.
- Pruebas de los endpoints de la API.
- Modelo y servicio en el frontend para consumir la API.
- Componente de listado de documentos conectado al backend con los estilos del diseño.

**Hito:** Creación y consulta de documentos operativa end-to-end, datos persistidos en base de datos.

---

### Sprint 4 — CRUD completo y sistema de alertas
**Fechas:** 28 mar – 3 abr 2026 · **Sprint Review:** 10 de abril

- Implementación de las operaciones de edición y eliminación de documentos.
- Definición del modelo de alertas con sus posibles estados.
- Generación automática de alertas según la fecha de vencimiento de cada documento.
- Proceso programado para la revisión y actualización diaria del estado de las alertas.
- Endpoints de consulta de alertas activas y pendientes.
- Componentes de formulario, detalle de documento, lista de alertas y navegación con estilos del diseño.

**Hito:** CRUD de documentos y alertas automáticas completamente operativos desde la interfaz.

---

### Sprint 5 — Autenticación y seguridad
**Fechas:** 4 – 10 abr 2026 · **Sprint Review:** 10 de abril

- Definición del modelo de usuario con almacenamiento seguro de contraseña.
- Endpoints de registro e inicio de sesión con generación de token de autenticación.
- Configuración de la capa de seguridad y validación de tokens en cada petición.
- Asociación de documentos y alertas al usuario autenticado; acceso exclusivo a los propios datos.
- Pantallas de login y registro en el frontend con estilos del diseño.
- Servicio de autenticación, interceptor HTTP y guardia de rutas en el frontend.

**Hito:** Registro, login y control de acceso por usuario operativos en frontend y backend.

---

### Sprint 6 — Integración de inteligencia artificial
**Fechas:** 11 – 17 abr 2026 · **Sprint Review:** 24 de abril

- Integración con la API de inteligencia artificial para analizar imágenes directamente y extraer datos estructurados.
- Extracción automática de los datos clave del documento (establecimiento, fecha, importe, tipo, etc.).
- Cálculo automático de la fecha de vencimiento según el tipo de documento identificado.
- Endpoint de subida de imagen con validación de formatos permitidos y almacenamiento seguro.
- Sección de subida de imagen en el formulario con indicador de carga y formulario prerrellenado con los datos extraídos, editable por el usuario.

**Hito:** El usuario sube una imagen y el formulario se prerellena automáticamente con los datos detectados por la IA.

---

### Sprint 7 — Integración OCR como sistema de respaldo
**Fechas:** 18 – 24 abr 2026 · **Sprint Review:** 24 de abril

- Integración de la librería OCR para extraer texto de imágenes cuando la IA no esté disponible o falle.
- Configuración del motor OCR en el entorno Docker del backend.
- Lógica de respaldo: si la IA no devuelve un resultado válido, se activa el OCR y el texto extraído se muestra al usuario para que complete el formulario manualmente.
- Verificación del flujo completo: imagen → IA (primario) → OCR (respaldo) → formulario.

**Hito:** Sistema de respaldo OCR operativo. El flujo imagen → formulario funciona de forma robusta ante cualquier fallo de la IA.

---

### Sprint 8 — Dashboard, duplicados e historial de renovaciones
**Fechas:** 25 abr – 1 may 2026 · **Sprint Review:** 8 de mayo

- Endpoint de estadísticas generales de documentos y alertas para el dashboard.
- Lógica de detección de documentos duplicados con aviso al usuario al crear uno nuevo.
- Modelo y operaciones para gestionar el historial de renovaciones de un documento.
- Dashboard con tarjetas de resumen y aviso de posibles duplicados en el formulario.
- Vista de historial de renovaciones accesible desde el detalle del documento.

**Hito:** Dashboard operativo, sistema de duplicados activo e historial de renovaciones funcional.

---

### Sprint 9 — Compartición, exportación, PDF y despliegue
**Fechas:** 2 – 8 may 2026 · **Sprint Review:** 8 de mayo

- Modelo y operaciones para crear y gestionar colecciones de documentos compartidas entre usuarios.
- Exportación de alertas en formato compatible con calendarios externos (iCal).
- Generación de informe PDF con el resumen de documentos del usuario.
- Vistas de gestión de colecciones compartidas y botones de exportación en el frontend.
- Configuración definitiva del entorno para producción y despliegue en Digital Ocean con HTTPS.

**Hito:** Todas las funcionalidades implementadas. Aplicación desplegada y accesible públicamente.

---

### Sprint 10 — Pruebas integrales y corrección de errores
**Fechas:** 9 – 15 may 2026 · **Sprint Review:** 22 de mayo

- Pruebas integrales de todos los flujos principales en el entorno de producción.
- Verificación del aislamiento de datos entre distintas cuentas de usuario.
- Prueba de casos extremos e inesperados en los flujos más críticos.
- Registro y corrección de los errores detectados.
- Re-verificación de los flujos corregidos en producción.

**Hito:** Sistema estable en producción. Errores críticos corregidos. Listo para el pulido final.

---

### Sprint 11 — Pulido, documentación y entrega final
**Fechas:** 16 – 22 may 2026 · **Sprint Review / Entrega:** 22 de mayo

- Ajuste de inconsistencias visuales respecto al diseño de Figma.
- Corrección de errores menores pendientes del Sprint 10.
- Mejoras de accesibilidad: contraste, etiquetas semánticas y navegación por teclado.
- Revisión y completado de la documentación técnica y el README.
- Grabación del vídeo de sprint review final con demostración completa.
- Envío del enlace al repositorio para la entrega evaluada.

**Hito final:** Producto terminado, documentado y desplegado. Todas las funcionalidades operativas y repositorio con el historial completo de desarrollo.

---

### Gestión de retrasos

Si al final de un sprint no se ha completado todo lo planificado, las tareas pendientes se incorporan al siguiente sprint con mayor prioridad. Al ser sprints semanales, las desviaciones se identifican con rapidez y el margen de reacción es mayor.

---

### Herramientas de gestión

| Herramienta | Uso en el proyecto |
|-------------|-------------------|
| **GitHub** | Repositorio de código con control de versiones. Los commits están organizados reflejando el trabajo de cada sprint. |
| **GitHub Projects** | Tablero organizado por sprints y por tareas, con prioridades, categorias, etc. |
| **Figma** | Diseño de wireframes, prototipos de alta fidelidad e identidad visual de la aplicación. |
| **Toggl Track** | Registro del tiempo dedicado a cada tarea para tener visibilidad del esfuerzo real invertido por sprint. |
| **Docker / Docker Compose** | Entorno de desarrollo reproducible y despliegue en producción en Digital Ocean. |
| **Postman** | Pruebas manuales de los endpoints de la API REST a lo largo del desarrollo. |
| **Vídeos de sprint review** | Cada dos semanas se graba una demostración del estado actual del producto como evidencia de progreso continuo. |