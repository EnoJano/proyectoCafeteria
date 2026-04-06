# ☕ Cafetería Web App

Aplicación web moderna para una cafetería, desarrollada con **Angular y Firebase**, enfocada en una experiencia de usuario fluida, diseño moderno y arquitectura escalable.

---

## 🚀 Demo

🔗 **Deploy en Firebase:**
https://TU-PROYECTO.web.app

---

## 📌 Descripción

Este proyecto es una landing page + aplicación web que permite:

* Mostrar información de la cafetería
* Visualizar el menú de productos
* Navegación fluida con animaciones
* Cambio de idioma (ES/EN)
* Modo oscuro / claro
* Visualización de ubicación
* Sección de testimonios con animaciones
* Página personalizada 404

Además, está preparado para escalar hacia un sistema completo con panel de administración.

---

## 🛠️ Tecnologías utilizadas

### Frontend

* Angular (Standalone Components)
* TypeScript
* HTML5
* CSS3 (Responsive Design + Animaciones)

### Backend / Servicios

* Firebase

  * Firebase Hosting (deploy)
  * Firestore (preparado)
  * Authentication (futuro)

### Librerías

* @ngx-translate/core (i18n)
* RxJS (manejo de eventos y timers)

---

## 🎨 Características principales

### 🌐 UI / UX

* Diseño moderno (minimalista + dark/urban)
* Totalmente responsivo (mobile-first)
* Animaciones suaves (scroll, transición de páginas, carruseles)
* Navbar dinámico según la página

### 🌙 Tema dinámico

* Modo oscuro / claro
* Detección automática del sistema

### 🌍 Internacionalización

* Español (Chile) 🇨🇱
* Inglés 🇺🇸
* Traducción dinámica con JSON

### 📄 Secciones

* Hero con carrusel automático
* Menú (preview + página completa con filtros)
* Acerca de (con carrusel)
* Testimonios (cards animadas con blur + foco)
* Mapa (ubicación)
* Footer interactivo

### ⭐ Testimonios

* Carrusel automático
* Animación tipo “focus + blur”
* Estrellas ⭐⭐⭐⭐⭐
* Fotos de usuarios

### 📦 Menú

* Filtros por categoría
* Animaciones (fade + stagger)
* Diseño escalable para Firebase

### 🚧 Página 404

* Ruta personalizada para páginas inexistentes

---

## 📁 Estructura del proyecto

```plaintext
src/
 ├── app/
 │   ├── core/
 │   │   └── services/
 │   ├── pages/
 │   │   ├── home/
 │   │   │   └── sections/
 │   │   ├── menu/
 │   │   └── not-found/
 │   ├── shared/
 │   │   ├── components/
 │   │   └── directives/
 │   ├── app.routes.ts
 │   └── app.config.ts
 │
 ├── assets/
 ├── environments/
 │   ├── environment.ts
 │   └── environment.prod.ts
```

---

## 🔥 Funcionalidades implementadas

* ✅ Routing dinámico (Angular Router)
* ✅ Scroll suave con compensación de navbar
* ✅ Navbar inteligente (cambia según la ruta)
* ✅ Menú hamburguesa responsive
* ✅ Animaciones al hacer scroll (IntersectionObserver)
* ✅ Transiciones entre páginas
* ✅ Carruseles automáticos
* ✅ Filtros dinámicos en menú
* ✅ Sistema de traducción (i18n)
* ✅ Deploy en Firebase
* ✅ Página 404 personalizada

---

## ⚙️ Instalación

```bash
# Clonar repositorio
git clone https://github.com/TU-USUARIO/TU-REPO.git

# Entrar al proyecto
cd TU-REPO

# Instalar dependencias
npm install

# Ejecutar en desarrollo
ng serve
```

Abrir en navegador:

```plaintext
http://localhost:4200
```

---

## 🔥 Build

```bash
ng build
```

---

## 🚀 Deploy en Firebase

```bash
firebase login
firebase init
firebase deploy
```

---

## 🧪 Estado del proyecto

🟢 Frontend completo
🟢 Deploy en producción
🟡 Integración completa con Firebase (en progreso)
🔜 Panel de administrador (próximo paso)

---

## 📌 Próximas mejoras

* 🔐 Panel de administrador (CRUD productos, categorías)
* 🧾 Sistema de reviews reales (Firebase)
* 📊 Dashboard de ventas
* 📱 Mejoras mobile (gestos / swipe)
* ⚡ Optimización SEO y performance

---

## 👨‍💻 Autor

Desarrollado por **Alejandro Escobedo**
Ingeniero Informático

---

## 📄 Licencia

Este proyecto es de uso personal/portafolio.
