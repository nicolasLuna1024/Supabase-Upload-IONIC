# Supabase-Upload-IONIC

Este proyecto es una aplicación móvil desarrollada con **Ionic** y **Angular**, que permite subir archivos a una base de datos de Supabase.

---

## 🛠️ Instalación y ejecución

Sigue los pasos a continuación para clonar el proyecto y ejecutarlo en tu entorno local:

1. **Clonar el repositorio**

```bash
git clone https://github.com/Anng3l/IonicGaleria-SplashScreen-y-Icon.git
```
2. **Instalar dependencias**
```bash
npm install
```
3. **Establecer las credenciales de Supabase en las variables de entorno**
```ts
    export const environment = {
    production: false,
    supabaseUrl: "url-de-tu-proyecto-en-supabase",
    supabaseKey: "la-api-key-de-tu-proyecto-en-supabase"
    };
```
4. **Ejecutar la app en entorno web**
```bash
ionic serve
```

---

## 🧪 Consideraciones para el funcionamiento de la aplicación

El desarrollador debe crear un bucket en el Storage de Supabase llamado "archivos", y establecer como políticas del bucket, que se pueden realizar todas las operaciones de un CRUD por parte de cualquier usuario, sin autenticación en este caso.

![_](./src/assets/Politicas%20Supabase.png)


---


## 📷 Capturas de pantalla

**1. Pantalla inicial**

![_](./src/assets/1%20Inicio.png)


**2. Archivo seleccionado para subirlo a Supabase**

![_](./src/assets/2%20subir%20archivo.png)


**3. Archivo subido a Supabase**

![_](./src/assets/3%20archivo%20subido.png)


**4. Revisión en Supabase**

![_](./src/assets/4%20supabase%20confirmacion.png)