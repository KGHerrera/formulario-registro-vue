<script setup>
import ButtonPrimary from './ButtonPrimary.vue';
import { ref } from 'vue';
import { useStore } from 'vuex'; // Importa useStore para obtener acceso al store Vuex
import { useRouter } from 'vue-router';

const store = useStore(); // Obtiene acceso al store Vuex
const router = useRouter();

const formData = ref({
  numeroControl: '',
  nombre: '',
  edad: null,
  semestre: null,
  carrera: null,
  materias: {
    topicosWeb: false,
    inteligenciaArtificial: false,
    seguridadDatos: false
  },
  actividades: {
    danza: false,
    ajedrez: false,
    arte: false
  }
});

const handleSubmit = () => {
  // Agregar los datos del formulario al estado Vuex
  store.commit('agregarAlumno', {
    numeroControl: formData.value.numeroControl,
    nombre: formData.value.nombre,
    edad: formData.value.edad,
    semestre: formData.value.semestre,
    carrera: formData.value.carrera
  });
  
  router.push('/tabla-alumnos');
};
</script>


<template>
  <div class="bg-gradient-to-br from-orange-900 to-yellow-900 flex w-full justify-center items-top wrap p-5">
    <div
      class="p-5 border border-gray-300 bg-white shadow-2xl relative text-gray-700  rounded-md bg-clip-border m-1 flex flex-col">


      <h4 class="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
        Registro Alumnos
      </h4>
      <p class="block mt-1 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
        Ingresa los datos indicados a continuacion.
      </p>
      <form class="max-w-screen-lg mt-4 mb-2 w-80 sm:w-96">
        <div class="flex flex-col gap-6 mb-1">


          <div class="w-full h-11">
            <div class="relative w-full h-10">
              <input v-model="formData.numeroControl" required
                class="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
                placeholder=" " /><label
                class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
                Numero de control
              </label>
            </div>
          </div>


          <div class="w-full h-11">
            <div class="relative w-full h-10">
              <input v-model="formData.nombre" required
                class="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
                placeholder=" " /><label
                class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
                Nombre
              </label>
            </div>
          </div>

          <div class="w-full h-11">
            <div class="relative w-full h-10">
              <input v-model="formData.edad" required
                class="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
                placeholder=" " type="number" /><label
                class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
                Edad
              </label>
            </div>
          </div>

          <div class="w-full h-11">
            <div class="relative w-full h-10">
              <input v-model="formData.semestre" min="1" max="10" required
                class="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
                placeholder=" " type="number" /><label
                class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
                Semestre
              </label>
            </div>
          </div>

          <div class="relative h-11">
            <select v-model="formData.carrera" required
              class="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-gray-900 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50">
              <option value="isc">ISC</option>
              <option value="im">IM</option>
              <option value="IIA">IIA</option>
            </select>
            <label
              class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
              Selecciona carrera
            </label>
          </div>
        </div>




        <div>
          <h3 class="mt-2 text-xs">Materias de especialidad</h3>
          <label for="topicos-web" class="flex items-center w-full px-3 py-2 cursor-pointer">
            <input id="topicos-web" type="checkbox" v-model="formData.materias.topicosWeb" />
            <p class="block font-sans ml-3 antialiased font-medium text-xs leading-relaxed text-blue-gray-700">
              Topicos Web
            </p>
          </label>

          <label for="inteligencia-artificial" class="flex items-center w-full px-3 py-2 cursor-pointer">
            <input id="inteligencia-artificial" type="checkbox" v-model="formData.materias.inteligenciaArtificial" />
            <p class="block font-sans ml-3 antialiased font-medium text-xs leading-relaxed text-blue-gray-700">
              Inteligencia Artificial
            </p>
          </label>

          <label for="seguridad-datos" class="flex items-center w-full px-3 py-2 cursor-pointer">
            <input id="seguridad-datos" type="checkbox" v-model="formData.materias.seguridadDatos" />
            <p class="block font-sans ml-3 antialiased font-medium text-xs leading-relaxed text-blue-gray-700">
              Seguridad de datos
            </p>
          </label>
        </div>


        <div>
          <h3 class="mt-2 text-xs">Actividades extraescolares</h3>
          <label for="danza" class="flex items-center w-full px-3 py-2 cursor-pointer">
            <input id="danza" type="checkbox" v-model="formData.actividades.danza" />
            <p class="block font-sans ml-3 antialiased font-medium text-xs leading-relaxed text-blue-gray-700">
              Danza
            </p>
          </label>

          <label for="ajedrez" class="flex items-center w-full px-3 py-2 cursor-pointer">
            <input id="ajedrez" type="checkbox" v-model="formData.actividades.ajedrez" />
            <p class="block font-sans ml-3 antialiased font-medium text-xs leading-relaxed text-blue-gray-700">
              Ajedrez
            </p>
          </label>

          <label for="arte" class="flex items-center w-full px-3 py-2 cursor-pointer">
            <input id="arte" type="checkbox" v-model="formData.actividades.arte" />
            <p class="block font-sans ml-3 antialiased font-medium text-xs leading-relaxed text-blue-gray-700">
              Arte
            </p>
          </label>
        </div>

        <ButtonPrimary data-ripple-light="true" btnText="Registrar" @click="handleSubmit" />

      </form>
    </div>
  </div>
</template>