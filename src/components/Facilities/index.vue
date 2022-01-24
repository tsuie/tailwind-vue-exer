<template>
    <div class="py-32 text-center">
        <h2 class="font-extrabold text-4xl">Facility Page</h2>

        <div class="grid grid-rows-2 grid-cols-12 gap-4 m-5">
            <div class="col-span-3 bg-gray-200 rounded-lg p-5" :class="{ 'bg-blue-200' : (action === 'Edit') }" >
                <h3 class="font-extrabold text-2xl">{{action}} Facility</h3>
                
                <p class="text-red-600 mx-auto p-5">{{ errorMessage }}</p>
                <form class="grid grid-rows-2 grid-cols-12" @submit.prevent="handleSubmit">
                    <div class="text-left col-span-6 p-2">
                        <label for="facility_number">Facility #</label>
                        <input type="text" 
                            class="w-full" 
                            name="facility_number" 
                            id="facility_number" 
                            placeholder="Enter Facility #"
                            
                            v-model.trim="$v.facility_number.$model" 
                        >
                        <small  v-if="$v.facility_number.$error" class="text-red-700">Invalid Facility Number</small>
                    </div>
                    <div class="text-left col-span-6 p-2">
                        <label for="facility">Name</label>
                        <input type="text" 
                            class="w-full" 
                            name="facility" 
                            id="facility" 
                            placeholder="Enter Facility name"
                            :class="{ 'border-red-600' : validateStatus($v.facility)}" 
                            v-model.trim="$v.facility.$model" 
                        >
                        <small  v-if="$v.facility.$error" class="text-red-700">Invalid Name</small>
                    </div>
                    <div class="text-left col-span-6 p-2">
                        <label for="address1">Address</label>
                        <input type="text" 
                            class="w-full" 
                            name="address1" 
                            id="address1" 
                            placeholder="Enter Address 1"
                            :class="{ 'border-red-600' : validateStatus($v.address1)}" 
                            v-model.trim="$v.address1.$model" 
                        >
                        <small  v-if="$v.address1.$error" class="text-red-700">Invalid Address</small>
                    </div>
                    <div class="text-left col-span-6 p-2">
                        <label for="address2">Address 2</label>
                        <input type="text" 
                            class="w-full" 
                            name="address2" 
                            id="address2" 
                            placeholder="Enter Address 2"
                            :class="{ 'border-red-600' : validateStatus($v.address2)}" 
                            v-model.trim="$v.address2.$model" 
                        >
                        <small  v-if="$v.address2.$error" class="text-red-700">Invalid Address</small>
                    </div>
                    <div class="text-left col-span-6 p-2">
                        <label for="city">City</label>
                        <input type="text" 
                            class="w-full" 
                            name="city" 
                            id="city" 
                            placeholder="Enter City"
                            :class="{ 'border-red-600' : validateStatus($v.city)}" 
                            v-model.trim="$v.city.$model" 
                        >
                        <small  v-if="$v.city.$error" class="text-red-700">Invalid City</small>
                    </div>
                    <div class="text-left col-span-6 p-2">
                        <label for="state">State</label>
                        <input type="text" 
                            class="w-full" 
                            name="state" 
                            id="state" 
                            placeholder="Enter State"
                            :class="{ 'border-red-600' : validateStatus($v.state)}" 
                            v-model.trim="$v.state.$model" 
                        >
                        <small  v-if="$v.state.$error" class="text-red-700">Invalid State</small>
                    </div>
                    <div class="text-left col-span-6 p-2">
                        <label for="phone1">Phone 1</label>
                        <input type="text" 
                            class="w-full" 
                            name="phone1" 
                            id="phone1" 
                            placeholder="Enter Phone"
                            :class="{ 'border-red-600' : validateStatus($v.phone1)}" 
                            v-model.trim="$v.phone1.$model" 
                        >
                        <small  v-if="$v.phone1.$error" class="text-red-700">Invalid Phone</small>
                    </div>
                    <div class="text-left col-span-6 p-2">
                        <label for="phone2">Phone 2</label>
                        <input type="text" 
                            class="w-full" 
                            name="phone2" 
                            id="phone2" 
                            placeholder="Enter Phone 2"
                            :class="{ 'border-red-600' : validateStatus($v.phone2)}" 
                            v-model.trim="$v.phone2.$model" 
                        >
                        <small  v-if="$v.phone2.$error" class="text-red-700">Invalid Phone</small>
                    </div>
                    <div class="text-left col-span-6 p-2">
                        <label for="fax">Fax</label>
                        <input type="text" 
                            class="w-full" 
                            name="fax" 
                            id="fax" 
                            placeholder="Enter Fax"
                            :class="{ 'border-red-600' : validateStatus($v.fax)}" 
                            v-model.trim="$v.fax.$model" 
                        >
                        <small  v-if="$v.fax.$error" class="text-red-700">Invalid Fax</small>
                    </div>
                    <div class="text-left col-span-6 p-2">
                        <label for="web_url">Website</label>
                        <input type="text" 
                            class="w-full" 
                            name="web_url" 
                            id="web_url" 
                            placeholder="Enter Website"
                            :class="{ 'border-red-600' : validateStatus($v.web_url)}" 
                            v-model.trim="$v.web_url.$model" 
                        >
                        <small  v-if="$v.web_url.$error" class="text-red-700">Invalid URL</small>
                    </div>
                    
                    <div class="text-left col-span-12 p-2">
                        <button type="submit" class="w-full py-2 px-3 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800 rounded transition duration-300">SAVE</button>
                        <button v-if="action === 'Edit'" v-on:click="resetForm" type="button" class="w-full py-2 px-3 bg-red-400 hover:bg-red-300 text-red-900 hover:text-red-800 rounded transition duration-300 mt-5">Cancel</button>
                    </div>
                </form>
            </div>
            <div class="col-span-9 bg-gray-200 rounded-lg p-5">
                <h3 class="font-extrabold text-2xl">Facilities</h3>
                <table class="table">
                    <thead>
                        <tr>
                            <th>Facility #</th>
                            <th>Name</th>
                            <th width="150px">Address</th>
                            <th>Contact</th>
                            <th class="text-right">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, index) in facilities.data" :key="index">
                            <td>{{item.facility_number}}</td>
                            <td>{{item.facility}}</td>
                            <td>
                                <p class="reak-words">{{item.address1}}</p>
                                <p>{{item.address2}}</p>
                                {{item.city}}, {{item.state}}
                            </td>
                            <td>
                                {{item.phone1 ? 'Phone: ' + item.phone1 : ''  }} <br> 
                                {{item.phone2 ? 'Alt Phone: ' + item.phone2 : ''  }}<br>
                                {{item.fax ? 'Fax: ' + item.fax : '' }}<br >
                                {{item.web_url ? 'Website: ' + item.web_url : '' }}
                            </td>
                            <td class="text-right">
                                <button type="button" class="edit" v-on:click="editFacility(item)">Edit</button>
                                <button type="button" class="delete mx-2" v-on:click="deleteFacility(item)">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script src="./logic.js"></script>