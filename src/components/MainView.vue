<template>
  <main class="w-full p-10">

    <header class="flex flex-row pb-2">
      <h1 class="font-semibold text-xl text-main-it grow">Carrier Profile for WH1</h1>
      <div class="flex flex-row">
        <Button label="Edit" severity="secondary" class="mr-2" />
        <Button label="Save" icon="pi pi-save" @click="submitForm" />
      </div>
    </header>

    <section class="grid grid-cols-3 gap-4">
      <article class="col-span-2 bg-white rounded-lg shadow-md p-6 pt-8">
        <CarrierProfileForm ref="formRef"></CarrierProfileForm>
      </article>
      <RightPannel width="100%" class="shadow-md rounded-md shrink-0 align-right"></RightPannel>
    </section>
  </main>
</template>

<script setup lang="ts">
import RightPannel from '../assets/right-panel.svg';
import Button from "primevue/button";
import CarrierProfileForm from './CarrierProfileForm.vue';
import { useTemplateRef } from 'vue';

const formRef = useTemplateRef('formRef');

const submitForm = () => {
  formRef.value?.submitForm();
}
</script>
