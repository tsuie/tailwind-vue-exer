import axios from 'axios';
import { required, email, minLength, maxLength, sameAs } from 'vuelidate/lib/validators';

export default {
    name: 'Register',
    data() {
        return {
            fullname: '',
            username: '',
            email: '',
            password: '',
            c_password: '',
            errorMessage: null,
            errors: null
        }
    },
    validations: {
        fullname: { 
            required,
            minLength: minLength(4),
            maxLength: maxLength(25)
        },
        username: { 
            required,
            minLength: minLength(4),
            maxLength: maxLength(25)
        },
        email: {
            required,
            email
        },
        password: {
            required,
            minLength: minLength(6)
        },
        c_password: {
            sameAsPassword: sameAs('password')
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
                const response = await axios.post('register', {
                    name: this.fullname,
                    username: this.username,
                    email: this.email,
                    password: this.password,
                    password_confirmation: this.c_password,
                    user_type: 'member'
                });
                this.errorMessage = null;
                console.log("Submit Data ", response);
                alert('Account created successfully');
                this.$router.push('/login');
            } catch (err) {
                // this.errorMessage = err.message;
                this.errors = err.response?.data?.errors;
                this.errorMessage = this.errors.email[0] ? this.errors.email[0] : 'Server Error';
                console.log(this.errors);
            }
            
        }
    }
}