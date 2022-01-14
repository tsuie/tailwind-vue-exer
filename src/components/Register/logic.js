import axios from 'axios';

export default {
    name: 'Register',
    data() {
        return {
            fullName: '',
            username: '',
            email: '',
            password: '',
            c_password: ''
        }
    },
    computed: {
        
    },
    methods: {
        async handleSubmit() {
            
            const response = await axios.post('register', {
                name: this.fullName,
                username: this.username,
                email: this.email,
                password: this.password,
                password_confirmation: this.c_password,
                user_type: 'member'
            })

            console.log("Submit Data ", response);
            this.$router.push('/login');
        }
    }
}