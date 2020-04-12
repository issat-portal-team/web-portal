import { VuexModule, Module, Action, Mutation, getModule } from 'vuex-module-decorators'
import { login, logout, register } from '@/api/users'
import { getToken, setToken, removeToken } from '@/utils/cookies'
import store from '@/store'

export interface UserState {
    token: string;
    username: string;
    email: string;
}

@Module({ dynamic: true, store, name: 'user' })
class User extends VuexModule implements UserState {
    public token = getToken() || ''
    public username = ''
    public email = ''

    @Mutation
    private SET_TOKEN(token: string) {
        this.token = token
    }

    @Mutation
    private SET_USERNAME(name: string) {
        this.username = name
    }

    @Mutation
    private SET_EMAIL(email: string) {
        this.email = email
    }

    @Action
    public async Login(userInfo: { username: string; password: string }) {
        let username = userInfo.username
        const password = userInfo.password
        username = username.trim()
        const { data } = await login({ username, password })
        setToken(data.token)
        this.SET_EMAIL(data.email)
        this.SET_USERNAME(data.username)
        this.SET_TOKEN(data.token)
    }


    @Action
    public async Register(userInfo: { email: string; password: string; username: string }) {
        let email = userInfo.email
        const password = userInfo.password
        const username = userInfo.username
        email = email.trim()
        const { data } = await register({ email, password, username })
        setToken(data.token)
        this.SET_EMAIL(data.email)
        this.SET_USERNAME(data.username)
        this.SET_TOKEN(data.token)
    }

    @Action
    public ResetToken() {
        removeToken()
        this.SET_TOKEN('')
    }

    @Action
    public async LogOut() {
        if (this.token === '') {
            throw Error('LogOut: token is undefined!')
        }
        await logout()
        removeToken()
    }
}

export const UserModule = getModule(User)
