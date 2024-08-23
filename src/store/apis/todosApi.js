// Importa las funciones necesarias de @reduxjs/toolkit/query
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

// Define una API utilizando la función createApi
export const todosApi = createApi({
    // Especifica el nombre de este API slice en el estado global
    reducerPath: 'todos',

    // Define la configuración base de la consulta (query)
    baseQuery: fetchBaseQuery({
        // Especifica la URL base para las solicitudes
        baseUrl: 'http://jsonplaceholder.typicode.com'
    }),

    // Define los endpoints de la API, es decir, las distintas operaciones
    endpoints: (builder) => ({
        // Define un endpoint llamado 'getTodos' que realiza una consulta
        getTodos: builder.query({
            // La función query especifica la URL a la que se hará la solicitud
            query: () => '/todos'  // La URL completa sería 'http://jsonplaceholder.typicode.com/todos'
        })
    })
})

// Exporta el hook 'useGetTodosQuery', que es generado automáticamente por RTK Query
// Este hook se usará en los componentes de React para realizar la solicitud y obtener los datos
export const { useGetTodosQuery } = todosApi;
