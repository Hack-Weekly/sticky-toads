<template>
  <form method="POST" action="/api/auth/sign-in">
  <input type="email" name='email' placeholder="email">
  <input type="text" name='password' placeholder="password">
  <button class="bg-green-500 text-white" type='submit'>Submit</button>
  </form>

  <a href="/api/auth/remove" class="bg-red-500">DELETE ACCOUNT</a>
</template>
