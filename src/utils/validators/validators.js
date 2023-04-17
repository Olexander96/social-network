
export const required = value => value ? undefined : 'Required';//перевіряє чи пусте поле

export const maxLength = max => value => value && value.length > max ? `Must be ${max} symbols` : undefined;//перевіряє на максимальну кількість символів