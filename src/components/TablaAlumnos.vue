<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  setup() {
    const store = useStore();

    // Lista de alumnos desde el estado Vuex
    const listaAlumnos = computed(() => store.state.listaAlumnos);

    return { listaAlumnos };
  }
};
</script>

<template>
  <div
    class="relative flex flex-col w-full h-full overflow-scroll text-gray-700 bg-white shadow-md rounded-xl bg-clip-border">
    <table class="w-full text-left table-auto min-w-max">
      <thead>
        <tr>
          <th class="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
            <p class="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
              Numero de control
            </p>
          </th>
          <th class="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
            <p class="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
              Nombre completo
            </p>
          </th>
          <th class="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
            <p class="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
              Edad
            </p>
          </th>

          <th class="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
            <p class="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
              Semestre
            </p>
          </th>
          <th class="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
            <p class="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
              Carrera
            </p>
          </th>

        </tr>
      </thead>
      <tbody>
        
        <tr v-for="(alumno, index) in listaAlumnos" :key="index" class="even:bg-blue-gray-50/50">
          <td class="p-4 border-b border-blue-gray-50">
            <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
              {{ alumno.numeroControl }}
            </p>
          </td>
          <td class="p-4 border-b border-blue-gray-50">
            <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
              {{ alumno.nombre }}
            </p>
          </td>
          <td class="p-4 border-b border-blue-gray-50">
            <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
              {{ alumno.edad }}
            </p>
          </td>
          <td class="p-4 border-b border-blue-gray-50">
            <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
              {{ alumno.semestre }}
            </p>
          </td>
          <td class="p-4 border-b border-blue-gray-50">
            <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
              {{ alumno.carrera }}
            </p>
          </td>
        </tr>


       

      </tbody>
    </table>
  </div>

  <!-- <h4 class="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
    Datos de alumnos registrados
  </h4>
  <table class="min-w-full divide-y divide-gray-200 mt-4">
    <thead class="bg-gray-50">
      <tr>
        <th class="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          Numero de control
        </th>
        <th class="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          Nombre
        </th>
        <th class="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          Edad
        </th>
        <th class="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          Semestre
        </th>
        <th class="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          Carrera
        </th>
      </tr>
    </thead>
    <tbody class="bg-white divide-y divide-gray-200">

      
<tr v-for="(alumno, index) in listaAlumnos" :key="index">
  <td class="border py-2 text-left text-xs px-3">{{ alumno.numeroControl }}</td>
  <td class="border py-2 text-left text-xs px-3">{{ alumno.nombre }}</td>
  <td class="border py-2 text-left text-xs px-3">{{ alumno.edad }}</td>
  <td class="border py-2 text-left text-xs px-3">{{ alumno.semestre }}</td>
  <td class="border py-2 text-left text-xs px-3">{{ alumno.carrera }}</td>
</tr>

</tbody>
</table> -->
</template>

