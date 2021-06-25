export const emailValidation = (email) => {
  if(email.includes('@') == false){
    alert('format email salah')
  }else{
    alert('format benar')
  }
}