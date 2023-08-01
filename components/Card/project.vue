<template>
  <div class="project-card-wrapper">
    <div
      class="update-model flex p-4 max-w-[260px] rounded-md border border-white/10 bg-[#1e1e1e] bg-center bg-cover mb-1 flex-col justify-center items-start"
      v-if="update_model"
    >
      <div class="h-10 flex justify-center items-center rounded-md">
        <form @submit.prevent="updateProjectName" class="flex gap-x-2">
          <input
            v-model="projectName"
            type="text"
            class="bg-gray-800 border h-8 border-white/10 rounded-md text-sm px-2 text-white outline-none"
            placeholder="update project title"
          />
          <button
            type="submit"
            class="cursor-pointer min-w-[32px] min-h-[32px] h-8 rounded-md flex justify-center items-center border border-white/10 text-white transition-all duration-300 hover:text-cyan-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-4 h-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
              />
            </svg>
          </button>
        </form>
      </div>

      <div class="h-10 w-full flex justify-center items-center rounded-md">
        <!-- Doing this, just gonna display user id in edit, that way its easy for users to find their id -->
        <form @submit.prevent="addUserToProject" class="flex gap-x-2">
          <input
            v-model="newUserId"
            type="text"
            class="bg-gray-800 border h-8 border-white/10 rounded-md text-sm px-2 text-white outline-none"
            placeholder="add user by id"
          />
          <button
            type="submit"
            class="cursor-pointer min-w-[32px] min-h-[32px] h-8 rounded-md flex justify-center items-center border border-white/10 text-white transition-all duration-300 hover:text-cyan-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-4 h-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
              />
            </svg>
          </button>
        </form>
      </div>
    </div>

    <div
      class="project-card w-96 py-8 rounded-md p-4 flex flex-col justify-center items-start gap-y-4 bg-[#181b1e] bg-[url('/22.jpg')] bg-cover bg-center border-2 border-white/10"
    >
      <div class="w-full flex -space-x-2 justify-between">
        <img
          src="https://i.pinimg.com/originals/fe/0a/04/fe0a0428f7b2db2154cf9ced998e9617.gif"
          alt="user-img"
          class="w-8 h-8 rounded-md object-cover"
        />

        <div class="flex gap-x-2">
          <div
            class="update-btn cursor-pointer w-8 h-8 rounded-md flex justify-center items-center border border-white/10 text-white transition-all duration-300 hover:text-rose-400"
            v-if="update_model"
            @click="update_model = !update_model"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-4 h-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>

          <div
            class="update-btn cursor-pointer w-8 h-8 rounded-md flex justify-center items-center border border-white/10 text-white transition-all duration-300 hover:text-cyan-400"
            v-if="!update_model"
            @click="update_model = !update_model"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-4 h-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
              />
            </svg>
          </div>

          <div
            class="trash-btn cursor-pointer w-8 h-8 rounded-md flex justify-center items-center border border-white/10 text-white transition-all duration-300 hover:text-rose-400"
            @click="deleteThisProject"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-4 h-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
          </div>
        </div>
      </div>

      <div
        class="card-type w-full max-w-fit flex justify-start items-center text-xs py-1 px-3 text-white bg-neutral-700/50 rounded-full"
      >
        <p>Project</p>
      </div>

      <NuxtLink :to="`/notes/${props.id}`">
        <p class="project-title text-white capitalize">{{ title }}</p>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

const update_model = ref(false);
const projectName = ref(null);
const newUserId = ref(null);
const props = defineProps(["title", "id", "image", "anchor"]);

const deleteThisProject = async () => {
  const { confirmDelete } = useSwal();
  const result = await confirmDelete();
  if (result.isConfirmed) {
    const { data: response } = await useFetch(
      `/api/project/${props.id}/delete`
    );
    if (response) {
      toast.error(`Project with name '${projectName.value}' deleted!`, {
        theme: "dark",
      });
      const { data: user }: any = await useFetch("/api/auth/retrieve");
      const projects = useState("projects");
      projects.value = user.value.user.user_project;
    }
  }
};

const updateProjectName = async () => {
  const { data: response } = await useFetch(`/api/project/${props.id}/update`, {
    method: "POST",
    body: {
      project_name: projectName,
    },
  });

  if (response.value) {
    toast.success(`Project name set to '${projectName.value}'`, {
      theme: "dark",
    });
    const { data: user }: any = await useFetch("/api/auth/retrieve");
    const projects = useState("projects");
    projects.value = user.value.user.user_project;
  }
};

const addUserToProject = async () => {
  const { data: response } = await useFetch(`/api/project/${props.id}/update`, {
    method: "POST",
    body: {
      add_user: {
        user_id: newUserId,
      },
    },
  });

  if (response.value) {
    toast.success(`'${newUserId.value}' add to project`, {
      theme: "dark",
    });
    const { data: user }: any = await useFetch("/api/auth/retrieve");
    const projects = useState("projects");
    projects.value = user.value.user.user_project;
  }
};
</script>

<style>
.update-btn:hover .update-model {
  display: flex;
}
</style>
