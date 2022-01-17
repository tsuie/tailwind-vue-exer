import axios from 'axios';
import { required, email  } from 'vuelidate/lib/validators';

export default {
    name: 'Login',
    data () {
        return {
            email: '',
            password: '',
            errorMessage: null,
            errors: null,
            loading: false
        }
    },
    validations: {
        email: {
            required,
            email
        },
        password: {
            required
        }
    },
    methods: {
        validateStatus :function(validation) {
            return (typeof validation != "undefined") ? validation.$error : false;
        },
        async handleSubmit() {
            this.$v.$touch();

            if (this.$v.$pedding || this.$v.$error) {
                console.log('Error',  this.$v.c_password);
                return;
            }

            try {
                const response = await axios.post('login', {
                    email: this.email,
                    password: this.password,
                });
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('user', JSON.stringify(response.data?.data));
                window.location.href = 'dashboard';
                // this.$router.push('/dashboard');
            } catch (err) {
                // this.errorMessage = err.message;
                this.errors = err.response?.data?.message;
                this.errorMessage = err.response?.data?.message ? err.response?.data?.message : 'Server Error';
                // console.log(err.response?.data?.message);
            }
            
        }
    }
}