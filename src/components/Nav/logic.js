export default {
    name: 'Nav',
    data () {
        return {
            isLoggedIn: localStorage.getItem('token') || null,
            user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null
        }
    },
    methods: {
        displayName() {
            if(this.user) {
                return 'Welcome ' + this.user.name;
            }
            else {
                return '';
            }
        },
        logout() {
            localStorage.removeItem('token');
            localStorage.removeItem('user');

            window.location.href = 'login';
        }
    }
}