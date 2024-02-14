import { createStore } from 'vuex';

export default createStore({
  state() {
    return {
      listaAlumnos: []
    };
  },
  mutations: {
    agregarAlumno(state, alumno) {
      state.listaAlumnos.push(alumno);
    }
  },
  actions: {
    // Puedes agregar más acciones aquí si lo necesitas
  }
});