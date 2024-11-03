import { defineStore } from 'pinia'
import storeMock from './formMock.json'
import { ref } from 'vue'

type CarrierForm = {
    integrations: {name: string, code: string},
    label: string,
    reference: string,
    modules: string[],
    pricing: string,
    cancellation:string[]
}

export const useFormStore = defineStore('formStore', () => {
    const form = ref({...storeMock})
    function updateForm(newData: CarrierForm) {
      form.value = {...form.value, ...newData}
    }
  
    return { form, updateForm }
})