# BarRank API Gateway

API Gateway para la plataforma BarRank. Este gateway centraliza las solicitudes de los clientes hacia los microservicios internos, gestionando el enrutamiento, la autenticación y el control de acceso.

---

## Características

- Redirección de rutas hacia microservicios como BarRank-API.
- Autenticación básica mediante API Key.
- Middleware para logging y validación.
- Modular y escalable.

---

## Tecnologías

- Node.js
- Express.js
- Dotenv
- Axios o http-proxy-middleware (según el caso)

---

## Requisitos

- Node.js 20.24.0
- npm o yarn
- Servicios backend corriendo (BarRank-API)

---

## Instalación

```bash
git clone https://github.com/GonoInges-S-A-S/BarRank-API-Gateway.git

cd BarRank-API-Gateway

npm install
# o
yarn install
```
## Configuración
Crea un archivo .env en la raíz con el siguiente contenido:

```bash
PORT=xxxx
BAR_RANK_API_URL=http://localhost:3000
API_KEY=tu_api_key_secreta
```

## Ejecución
```bash
# Inicia el servidor
npm run dev
# o
yarn dev
```

El servidor estará disponible en: http://localhost:xxxx

## Seguridad
Este API Gateway espera una cabecera con API Key en cada petición:

```bash
http:
x-api-key: tu_api_key_secreta
```

## Endpoints Proxificados

| Método | Ruta en Gateway | Redirección hacia       |
| ------ | --------------- | ----------------------- |
| GET    | `/bars`         | BarRank-API `/bars`     |
| GET    | `/bars/:id`     | BarRank-API `/bars/:id` |
| POST   | `/bars`         | BarRank-API `/bars`     |
| PUT    | `/bars/:id`     | BarRank-API `/bars/:id` |
| DELETE | `/bars/:id`     | BarRank-API `/bars/:id` |


## Ejemplo de uso
```bash
curl -X GET http://localhost:4000/bars \
  -H "x-api-key: tu_api_key_secreta"
```
