const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const passRegex = /^[a-zA-Z0-9 ]+$/
export const validatePassword = pass => pass && passRegex.test(pass)
export const isFieldNotEmpty = value => value && value.length > 0
export const validateEmail = email => email && emailRegex.test(email)