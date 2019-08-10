const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export const validateEmail = email => email && emailRegex.test(email)
export const validatePhone = phone => phone && phone.length === 17
export const cleanPhone = phone => (phone || '').replace('+7', '').replace(/\D/g, '')
export const formattedPhone = phone => {
  const numbers = cleanPhone(phone)
  const char = { 0: '(', 3: ') ', 6: '-' }
  let formatted = `+7 `
  for (let i = 0; i < numbers.length; i++) {
    formatted += (char[i] || '') + numbers[i]
  }
  return formatted.slice(0, 17)
}

export const isFieldNotEmpty = value => value && value.length > 0