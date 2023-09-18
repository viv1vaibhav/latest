export const validateLoginForm = ({ user }) => {
  if(validateMail(user.email) && validatePassword(user.password)) 
  return validateMail(user.email) && validatePassword(user.password);
};
  
export const validateRegistrationForm = ({ user }) => {
  return (
    validateMail(user.email) &&
    validatePassword(user.password) &&
    validateUsername(user.username)
  )
};
  
const validatePassword = (password) => {
  return password.length > 5 && password.length < 13;
};
  
export const validateMail = (email) => {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(email);
};
  
const validateUsername = (username) => {
  return username.length > 2 && username.length < 13;
};
  