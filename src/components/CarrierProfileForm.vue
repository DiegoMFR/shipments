<template>
    <Form v-slot="$form: Record<string, any>" :initialValues @submit="onFormSubmit" :resolver="resolver" class="w-full">
        <h2>Details</h2>
        <div class="grid grid-cols-2 gap-4">
            <label for="integrations" class="col-span-2">
                <span>
                    Select integration set
                    <span v-if="!$form.integrations?.value?.name" class="text-red-600">*</span>
                </span>
                <Select name="integrations" :options="integrations" optionLabel="name" placeholder="Choose option" fluid
                    :invalid="!$form.integrations?.value?.name" />
                <Message v-if="$form.integrations?.invalid" severity="error" size="small" variant="simple">{{
                    $form.integrations.error?.message }}</Message>
            </label>
            <label for="label" class="col-span">
                <span>
                    Label
                    <span v-if="!$form.label?.value" class="text-red-600">*</span>
                </span>
                <InputText name="label" type="text" fluid :invalid="!$form.label?.value" />
                <Message v-if="$form.label?.invalid" severity="error" size="small" variant="simple">{{
                    $form.label.error?.message }}</Message>
            </label>
            <label for="reference" class="col-span">
                <span>
                    Reference
                    <span v-if="!$form.reference?.value" class="text-red-600">*</span>
                </span>
                <InputText name="reference" type="text" fluid :invalid="!$form.reference?.value" />
                <Message v-if="$form.reference?.invalid" severity="error" size="small" variant="simple">{{
                    $form.reference.error?.message }}</Message>
            </label>
            <CheckboxGroup name="modules" class="flex flex-col col-span-2">
                <h2>Select Modules</h2>
                <div class="checkboxContainer">
                    <h3>Ordering</h3>
                    <div class="description"
                        :class="{ 'active': $form.modules?.value.includes('ordering') }">
                        <Checkbox inputId="ordering" value="ordering" />
                        <label for="ordering">
                            Advice Forwarding order - XML
                        </label>
                        <p>
                            pre-information of your forwarding orders (necessary to schedule the activity).They can be
                            changed
                            until the final Forwarding Order is sent. The advice forwarding order message can be
                            configured to
                            be
                            provided to Dachser.
                        </p>
                    </div>
                </div>
                <div class="checkboxContainer">
                    <h3>Manifesting</h3>
                    <div class="description"
                        :class="{ 'active': $form.modules?.value.includes('forwarding') }">
                        <Checkbox inputId="forwarding" value="forwarding" />
                        <label for="forwarding">
                            Forwarding Orders - XML
                        </label>
                        <p>
                            Your orders to transport goods from you to a consignee.
                        </p>
                    </div>
                </div>
                <div class="checkboxContainer">
                    <h3>Tracking</h3>
                    <div class="description"
                        :class="{ 'active': $form.modules?.value.includes('sftp') }">
                        <Checkbox inputId="sftp" value="sftp" />
                        <label for="sftp">
                            Configure tracking file formats provided by the carrier through SFTP
                        </label>
                        <p>
                            Carrier publishes files to FTP. Requires setup from both you and the carrier.
                        </p>
                    </div>
                </div>
            </CheckboxGroup>
            <RadioButtonGroup name="pricing" class="flex flex-col col-span-2">
                <h3>Pricing</h3>
                <div class="flex gap-2">
                    <span class="flex items-center gap-2">
                        <RadioButton inputId="basic" value="basic" />
                        <label for="basic">Basic carrier pricing</label>
                    </span>
                    <span class="flex items-center gap-2">
                        <RadioButton inputId="shipit" value="shipit" />
                        <label for="shipit">ShipitSmarter base tariffs</label>
                    </span>
                </div>
            </RadioButtonGroup>
            <CheckboxGroup name="cancellation" class="flex flex-col col-span-2">
                <h3>Cancel order</h3>
                <div class="flex gap-2">
                    <Checkbox inputId="email" value="email" />
                    <label for="email">
                        Email carrier cancellation
                    </label>
                    <Checkbox inputId="sms" value="sms" />
                    <label for="sms">
                        Text message carrier cancellation
                    </label>
                </div>
            </CheckboxGroup>
        </div>
        <button type="submit" class="hidden" ref="submitBtn">Submit</button>
    </Form>
</template>
<script setup lang="ts">
import { Form } from '@primevue/forms';
import Select from 'primevue/select';
import InputText from 'primevue/inputtext';
import RadioButton from 'primevue/radiobutton';
import Checkbox from 'primevue/checkbox';
import CheckboxGroup from 'primevue/checkboxgroup';
import RadioButtonGroup from 'primevue/radiobuttongroup';
import { Message } from 'primevue';
import { ref, useTemplateRef } from 'vue';
import { useFormStore } from '../stores/form';
import { zodResolver } from '@primevue/forms/resolvers/zod';
import { z } from 'zod';


const { form, updateForm } = useFormStore();
const initialValues = ref({ ...form });
const submitBtnRef = useTemplateRef('submitBtn');


const onFormSubmit = ({ valid, states }: Record<string, any>) => {
    if (valid) {
        const { cancellation, integrations, label, modules, pricing, reference } = states;

        const formData = {
            cancellation: cancellation.value,
            integrations: integrations.value,
            label: label.value,
            modules: modules.value,
            pricing: pricing.value,
            reference: reference.value,
        }
        updateForm(formData);
    }
}

const submitForm = () => {
    // Since the primevue form doesn't expose a submit method, we need to trigger
    // it using a hidden button inside the form
    submitBtnRef.value?.click();
}

const resolver = ref(zodResolver(
    z.object({
        label: z.string().min(1, { message: 'Label is required.' }),
        reference: z.string().min(1, { message: 'Reference is required.' }),
    })
));

const integrations = ref([
    { name: 'ServerA', code: 'A' },
    { name: 'ServerB', code: 'B' },
    { name: 'ServerC', code: 'C' },
])

defineExpose({
    submitForm
});

</script>

<style scoped>
.checkboxContainer {
    @apply py-2;
}

h2 {
    @apply font-semibold mb-2 text-xl;
}

h3 {
    @apply font-semibold mb-2;
}

.checkboxContainer .description {
    @apply border rounded-md p-2;
}

.checkboxContainer .description.active {
    @apply border-main-it bg-main-it-muted;
}
</style>
