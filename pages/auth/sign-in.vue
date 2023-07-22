<template>
    <section class="py-24 lg:pb-32 md:overflow-hidden h-screen">
        <div class="container px-4 mx-auto space-y-3">
            <div class="relative bg-gray-800 px-6 pt-10 pb-8 shadow-xl border-2 border-gray-700 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
                <div class="mx-auto max-w-xl">
                    <div class="divide-y divide-gray-700/50">
                        <h1 class="text-3xl font-bold text-center text-gray-100 pb-3">Sign-in to your account</h1>
                        <div class="pt-8 text-base font-semibold leading-7">
                            <form @submit.prevent="onSubmit">
                                <div class="space-y-4 text-white">
                                    <div>
                                        <label for="name" class="">Username</label>
                                        <FormDefaultInput id="username" type="text" name="username" placeholder="Enter your username..." />
                                    </div>
                                    <div>
                                        <label for="password" class="">Password</label>
                                        <FormDefaultInput id="password" type="password" name="password" placeholder="Enter your password..." />
                                    </div>
                                </div>
                                <div class="flex flex-col md:flex-row items-center justify-between pt-5 gap-3 md:gap-0">
                                    <div class="flex items-center">
                                        <span class="text-sm text-gray-400">Not a member?</span>
                                        <NuxtLink to="/auth/sign-up" class="ml-1 text-sm font-bold text-cyan-400 hover:text-cyan-600 transition-colors ease-in-out duration-150">
                                            Sign Up
                                        </Nuxtlink>
                                    </div>
                                    <ButtonPrimaryWithArrow type="submit" text="Sign In" />
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
import userSignIn from '../../types/interfaces/userSignIn';
import * as yup from 'yup';

const schema = yup.object({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required')
});

const { handleSubmit } = useForm<userSignIn>({
  validationSchema: schema
});

const onSubmit = handleSubmit((values) => {
  alert(JSON.stringify(values, null, 2));

  /* Bionic make your API call here */
});

definePageMeta({
  layout: false // exclude the default layout
})

</script>
