import axios from 'axios';
import { required, minLength, maxLength, numeric, url} from 'vuelidate/lib/validators';

export default {
    name: "Facilities",
    data() {
      return {
        id: null,
        facility_number: null,
        facility: '',
        address1: '',
        address2: '',
        city: '',
        state: '',
        phone1: '',
        phone2: '',
        fax: '',
        web_url: '',
        errorMessage: null,
        errors: null,
        facilities: [],
        action: 'Add'
      };
    },
    validations: {
        facility_number: { 
            required,
            numeric,
        },
        facility: { 
          required,
          minLength: minLength(4),
          maxLength: maxLength(25)
        },
        address1: { 
          required,
          minLength: minLength(4)
        },
        address2: { 
          minLength: minLength(4)
        },
        city: { 
          required
        },
        state: { 
          required
        },
        phone1: { 
          required,
          numeric
        },
        phone2: {
          numeric
        },
        fax: {
          numeric
        },
        web_url: {
          url
        },
    },
    methods: {
      validateStatus :function(validation) {
        return (typeof validation != "undefined") ? validation.$error : false;
      },
      async handleSubmit() {
        console.log('Submiting ', this.action);
        this.$v.$touch();
        if (this.$v.$pedding || this.$v.$error) {
          console.log('Error',  this.$v.c_password);
          return;
        }

        try {
          if(this.action === 'Add') {
            const response = await axios.post('facilities', {
              facility_number: this.facility_number,
              facility: this.facility,
              address1: this.address1,
              address2: this.address2,
              city: this.city,
              state: this.state,
              phone1: this.phone1,
              phone2: this.phone2,
              fax: this.fax,
              web_url: this.web_url,
            });
            this.errorMessage = null;
            this.errors = null;
            console.log("Submit Data ", response);
            alert('Facility created successfully');
            this.resetForm();
            this.fetchFacilities();
          }
          else {
            const response = await axios.put('facilities/' + this.id, {
              facility_number: this.facility_number,
              facility: this.facility,
              address1: this.address1,
              address2: this.address2,
              city: this.city,
              state: this.state,
              phone1: this.phone1,
              phone2: this.phone2,
              fax: this.fax,
              web_url: this.web_url,
            });
            this.errorMessage = null;
            this.errors = null;
            console.log("Submit Data ", response);
            alert('Facility Info Updated');
            this.resetForm();
            this.fetchFacilities();
          }
          
        } catch (err) {
          // this.errorMessage = err.message;
          this.errors = err.response?.data?.errors;
          this.errorMessage = 'Server Error';
          console.log(this.errors);
        }
      },
      editFacility(data) {
        console.log(data);
        this.id =  data.id;
        this.facility_number = data.facility_number;
        this.facility = data.facility;
        this.address1 = data.address1;
        this.address2 = data.address2;
        this.city = data.city;
        this.state = data.state;
        this.phone1 = data.phone1;
        this.phone2 = data.phone2;
        this.fax = data.fax;
        this.web_url = data.web_url;
        this.action = 'Edit';
      },
      async deleteFacility(data) {
        console.log('Delete ', data);
        
        try {
          const response = await axios.delete('facilities/' + data.id);
          this.errorMessage = null;
          this.errors = null;
          console.log("Submit Data ", response);
          alert('Facility Deleted');
          this.resetForm();
          this.fetchFacilities();

        } catch (err) {
          console.log(err);
        }
      },
      resetForm() {
        this.facility_number = '';
        this.facility = '';
        this.address1 = '';
        this.address2 = '';
        this.city = '';
        this.state = '';
        this.phone1 = '';
        this.phone2 = '';
        this.fax = '';
        this.web_url = '';
        this.action = 'Add';
      },
      async fetchFacilities() {
        try {
          const fac = await axios.get('facilities');
          
          this.facilities = fac.data;
          console.log(this.facilities);
        }
        catch(err) {
          console.log(err);
        }
        
        
      }
    },
    created() {
      // const response = await axios.get('user');
      // this.user = response.data;
      this.fetchFacilities()
    }
}