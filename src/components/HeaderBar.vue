<template>
    <header class="flex w-full p-2 text-sm">
        <ul class="breadcrumbs grow text-xs flex">
            <li>
                <button class="bg-neutral1-it">Location</button>
            </li>
            <li>
                <button>Shipments</button>
            </li>
        </ul>
        <div class="flex flex-row">
            <input class="bg-white p-2 w-64 rounded-md" type="text" placeholder="Quickly find what you need...">
            <button class="p-1 ml-4 text-sm flex items-center" title="User Person">
                <div class="p-1 bg-neutral1-it rounded-md"><i class="pi pi-user"></i></div>
                <span class="ml-1">User person</span>
            </button>
        </div>
    </header>
</template>
<script setup lang="ts">
</script>
<style scoped>
.breadcrumbs {
    @apply flex flex-row;
}

.breadcrumbs li {
    @apply m-1 whitespace-nowrap;
}

.breadcrumbs li:not(:last-child):after {
    content: "/";
    white-space: nowrap;
    @apply ml-2
}

.breadcrumbs li button {
    @apply p-1 rounded-md hover:bg-neutral1-it;
}

</style>