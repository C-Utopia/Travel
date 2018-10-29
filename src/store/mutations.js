// export defult {
//   changeCity(state, city) {
//     state.city = city
//     try {
//       localStorage.city = city
//     } catch (error) {}
//   }
// }
export default {
  changeCity(state, city) {
    state.city = city
    try {
      localStorage.city = city
    } catch (error) {}
  }
}
