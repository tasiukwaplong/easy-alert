const env = require('../config');
import e from './easyAlert';

export const login = {
    data() {
        return {
            allTopics: '',
            userdata: {
                error: true,
                message: {
                    usernmae: '-',
                    name: 'Error fetching data',
                    email: '-',
                    phone: '-',
                    balance: '-',
                    subscribe: '-',
                    code: '-',
                    refered_by: '-',
                    type: '-',
                    confirmation_status: '-',
                    session: '-'
            },
            session: ''
        },
    }
},
    created: async function () {
        // if cookie does not exist, take d person to login/ 
        (getSession.methods.getSession().length <= 14)? window.location = 'login/':'';
        const userSession = {session: getSession.methods.getSession()};//env.USER_LOGIN
        this.session = userSession;
    },
    methods: {
        userData: async function(){
            this.userdata = await e.getUserData(this.session);
            // this.userdata = userData;
            // console.log(this.userdata)
            return this.userdata;
        },
        getAllTopics: async function(){
            this.allTopics = await e.getTopics();
            // this.userdata = userData;
            return this.allTopics;
        },
        logout: function(){
            // change session and remove cookie
            document.cookie=`${env.USER_LOGIN}${this.session};expires=${new Date()}`;
            // e.logout(this.session);
            location.reload();
        }
    }
}

export const getSession = {
    methods: {
        getSession: function () {
            const name = env.USER_LOGIN;
            const ca = document.cookie.split(';');
            for (let i = 0; i < ca.length; i++) {
                let c = ca[i];
                while (c.charAt(0) == ' ') {
                    c = c.substring(1);
                }
                if (c.indexOf(name) == 0) {
                    return c.substring(name.length, c.length);
                }
            }
            return '';
        }
    }
}
