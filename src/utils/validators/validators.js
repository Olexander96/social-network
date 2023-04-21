
export const required = value => 
    value ? undefined : 'Required';//перевіряє чи пусте поле

export const maxLength = max => value => 
    value && value.length > max ? `Must be ${max} symbols` : undefined;//перевіряє на максимальну кількість символів

export const email = value => 
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Invalid email address' : undefined
