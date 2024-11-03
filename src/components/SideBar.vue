<template>
    <div class="h-full bg-neutral1-it shadow-md min-w-20 flex flex-col items-center pt-4">
        <a href="#" title="Viya">
            <logoViya></logoViya>
        </a>
        <button class="p-auto p-4 mt-4 hover:bg-neutral2-it text-foreground-muted hover:text-main-it" title="Add...">
            <i class="pi pi-plus-circle"></i>
        </button>
        <nav>
            <ul>
                <li><Divider /></li>
                <li v-for="item of navItems">
                    <a href="#" class="inline-block p-4 center hover:bg-neutral2-it rounded shrink-0 mb-1"
                        :class="{ 'bg-neutral2-it': item.isActive }" :title="item.name">
                        <i class="pi" :class="[item.icon, item.isActive ? 'text-main-it' : 'text-foreground-muted']"></i>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</template>
<script setup lang="ts">
import logoViya from '../assets/viya-logo.svg'
import Divider from 'primevue/divider';
const navItems = [
    { name: 'Dashboard', icon: 'pi-objects-column' },
    { name: 'Shipments', icon: 'pi-box' },
    { name: 'Carriers', icon: 'pi-truck', isActive: true },
    { name: 'Tracking', icon: 'pi-map-marker' },
    { name: 'Contacts', icon: 'pi-address-book' },
    { name: 'Settings', icon: 'pi-cog' },
]
</script>