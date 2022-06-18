let domain = process.env.NEXT_PUBLIC_APP_HOST

const userEndPoints = {
    user: domain + 'users',
    login: domain + 'admin/login',
    newUser: domain + 'users/add'
}