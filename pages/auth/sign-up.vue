<template>
    <section class="py-24 lg:pb-32 md:overflow-hidden h-screen">
        <div class="container px-4 mx-auto space-y-3">
            <div class="relative bg-gray-800 px-6 pt-10 pb-8 shadow-xl border-2 border-gray-700 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
                <div class="mx-auto max-w-xl">
                    <div class="divide-y divide-gray-700/50">
                        <h1 class="text-3xl font-bold text-center text-gray-100 pb-3">Create an account</h1>
                        <div class="pt-8 text-base font-semibold leading-7">
                            <form @submit.prevent="onSubmit">
                                <div class="space-y-4 text-white">
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
                                </div>
                                <div class="flex flex-col md:flex-row items-center justify-between pt-5 gap-3 md:gap-0">
                                    <div class="flex items-center">
                                        <span class="text-sm text-gray-400">Already have an account?</span>
                                        <NuxtLink to="/auth/sign-in" class="ml-1 text-sm font-bold text-cyan-400 hover:text-cyan-600 transition-colors ease-in-out duration-150">
                                            Sign In
                                        </Nuxtlink>
                                    </div>
                                    <ButtonPrimaryWithArrow type="submit" text="Sign Up" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup lang="ts">
import { useForm } from 'vee-validate';
import userSignUp from '../../types/interfaces/userSignUp';
import * as yup from 'yup';

const schema = yup.object({
  username: yup.string().required('Username is required'),
  email: yup.string().required('Email is required').email('Invalid email format'),
  password: yup.string().required('Password is required').min(6)
  .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
  .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
  .matches(/[0-9]/, 'Password must contain at least one number'),
  passwordConfirm: yup.string().required('Password must be confirmed').min(6).oneOf([yup.ref('password')], 'Passwords must match'),
});

const { handleSubmit } = useForm<userSignUp>({
  validationSchema: schema
});

const onSubmit = handleSubmit(async (values) => {
  alert(JSON.stringify(values, null, 2));
  const { data: response } =  await useFetch('/api/auth/sign-up', {
      onRequest({ request, options }) {
      options.method = 'POST'
      options.headers = { "Content-type": "application/json" };
      options.body = JSON.stringify({ email: values.email, username: values.username, password: values.password })
    }
  })

  navigateTo('/sign-in')
});

definePageMeta({
  layout: false // exclude the default layout
})

</script>
