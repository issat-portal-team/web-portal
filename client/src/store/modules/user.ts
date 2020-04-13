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
    public id = ''

    @Mutation
    private SET_TOKEN(token: string) {
        this.token = token
    }

    @Mutation
    private SET_ID(id: string) {
        this.id = id
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
        try {
            const { data } = await login({ username, password })
            setToken(data.token)
            this.SET_EMAIL(data.email)
            this.SET_USERNAME(data.username)
            this.SET_TOKEN(data.token)
            this.SET_ID(data.id)
        } catch (err) {
            console.log(err)
        }
    }


    @Action
    public async Register(userInfo: { email: string; password: string; username: string }) {
        let email = userInfo.email
        const password = userInfo.password
        const username = userInfo.username
        email = email.trim()
        try {
            const { data } = await register({ email, password, username })
            setToken(data.token)
            this.SET_EMAIL(data.email)
            this.SET_USERNAME(data.username)
            this.SET_TOKEN(data.token)
            this.SET_ID(data.id)
        } catch (err) {
            console.log(err)
        }
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
        this.ResetToken()
    }
}

export const UserModule = getModule(User)
