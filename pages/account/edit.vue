<template>
    <section class="py-24 lg:pb-32 md:overflow-hidden h-screen">
        <div class="container px-4 mx-auto space-y-3">
            <div class="relative bg-gray-800 px-6 pt-10 pb-8 shadow-xl border-2 border-gray-700 sm:mx-auto sm:max-w-3xl sm:rounded-lg sm:px-10">
                <div class="mx-auto max-w-2xl">
                    <div class="divide-y divide-gray-700/50">
                        <h1 class="text-3xl font-bold text-center text-gray-100 pb-3">Edit your account info</h1>
                        <div class="pt-8 text-base font-semibold leading-7">
                            <form @submit.prevent="onSubmit">
                                <div class="flex flex-col md:flex-row gap-x-3">
                                    <div class="space-y-4 text-white w-full md:w-1/2">
                                        <div>
                                            <label for="username" class="">Username</label>
                                            <FormDefaultInput id="username" type="text" name="username" placeholder="Enter a username..." />
                                        </div>
                                        <div>
                                            <label for="email" class="">Email</label>
                                            <FormDefaultInput id="email" type="email" name="email" placeholder="Enter a email..." />

                                        </div>
                                        <div>
                                            <label for="password" class="">Password</label>
                                            <FormDefaultInput id="password" type="password" name="password" placeholder="Enter a password..." />
                                        </div>
                                        <div>
                                            <label for="confirm_password" class="">Confirm Password</label>
                                            <FormDefaultInput id="confirm_password" type="password" name="passwordConfirm" placeholder="Confirm your  password..." />
                                        </div>
                                      <div>
                                          <h2>User ID: {{ userId }}</h2>
                                      </div>
                                    </div>
                                    <template v-if="picture">
                                        <img :src="picture" class="w-auto h-72 bg-cover mt-7"/>
                                    </template>
                                    <template v-else>
                                        <div class="flex items-center justify-center w-full md:w-1/2">
                                            <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-72 mt-7 border-2 border-gray-500 border-dashed rounded-lg cursor-pointer hover:bg-primary transition duration-150">
                                                <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                                    <svg class="w-8 h-8 mb-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                                                    </svg>
                                                    <p class="mb-2 text-sm text-gray-500"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                                                    <p class="text-xs text-gray-500">SVG, PNG, JPG or GIF</p>
                                                </div>
                                                <input @change="onFileChange" accept="image/*" id="dropzone-file" type="file" class="hidden" name="picture"/>
                                            </label>
                                        </div> 
                                    </template>
                                    
                                </div>
                                <div class="flex flex-col sm:flex-row items-center pt-5 gap-3 lg:gap-20 lg:ml-1">
                                    <button @click="state = !state" type="button" class="flex items-center justify-center px-4 py-2 text-base font-semibold rounded-md text-white bg-red-600 hover:bg-red-700 transition duration-150">
                                        Delete Account
                                    </button>
                                    <ButtonPrimaryWithArrow type="submit" text="Update" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <ModalDeleteAccount :state="state" @change-state="state = !state" />
</template>
<script setup lang="ts">
import { ref, computed } from 'vue';
import { useForm } from 'vee-validate';
import accountUpdate from '../../types/interfaces/accountUpdate';
import * as yup from 'yup';

const userState: any = useState('user')
const userId = userState.value.user.id
definePageMeta({
  layout: 'account', // exclude the default layout
  middleware: 'session'
})

const state = ref<Boolean>(false);

const schema = yup.object({
  username: yup.string(),
  email: yup.string().email('Invalid email format'),
  password: yup.string().min(6)
  .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
  .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
  .matches(/[0-9]/, 'Password must contain at least one number'),
  passwordConfirm: yup.string().min(6).oneOf([yup.ref('password')], 'Passwords must match'),

});

const { handleSubmit } = useForm<accountUpdate>({
  validationSchema: schema
});

const picture = ref('');
const fileInformation = ref({})

function onFileChange(event) {
    const file = event.target.files[0];
    const information = {
        name: event.target.files[0].name,
        type: event.target.files[0].type,
    }
    fileInformation.value = information;
    // console.log(fileInformation.value)
    if (file) {
    	const reader = new FileReader();
		reader.onload = () => {
			const result = reader.result;
			if (typeof result === 'string') {
				picture.value = result;
		    };
        }
        reader.readAsDataURL(file);
    }
}

const onSubmit = handleSubmit(async(values) => {
    const { data: response } =  await useFetch('/api/auth/update', {
        onRequest({ request, options }) {
        options.method = 'POST'
        options.headers = { "Content-type": "application/json" };
        options.body = {
            values: values,
            picture: { 
                file: picture.value,
                information: fileInformation.value
            }
            // picture: picture.value
        }
        }
    })
});
</script>
