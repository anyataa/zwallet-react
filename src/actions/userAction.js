export const onLoginAction = (data) => {
  return {
    type: 'LOGIN',
    payload: data
  }
}

export const onRegister = (data) => {
  return {
    type: 'REGISTER',
    payload: data
  }
}

// export const onLogin = () => {
//   return {
//     type: 'LOGIN',
//     payload:
//   }
// }