<template>
    <div class="h-full bg-neutral1-it shadow-md min-w-20 flex flex-col items-center pt-4">
        <a href="#" title="Viya">
            <logoViya></logoViya>
        </a>
        <button class="p-auto p-4 mt-4" title="Add...">
            <iconAdd class="fill-main-it"></iconAdd>
        </button>
        <nav class="p-4">
            <ul>
                <li v-for="item of navItems" class="shrink-0">
                    <a href="#" class="inline-block p-4 center hover:bg-neutral2-it rounded shrink-0"
                        :class="{ 'bg-neutral2-it': item.isActive }" :title="item.name">
                        <component :is="item.icon" alt="item.name" :class="{ 'fill-main-it': item.isActive }" />
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</template>
<script setup lang="ts">
import logoViya from '../assets/viya-logo.svg'
import iconDashboard from '../assets/icon-dashboard.svg';
import iconShipments from '../assets/icon-shipments.svg';
import iconCarrier from '../assets/icon-carrier.svg';
import iconTracking from '../assets/icon-track.svg';
import iconContacts from '../assets/icon-contacts.svg';
import iconSettings from '../assets/icon-settings.svg';
import iconAdd from '../assets/icon-add.svg';

const navItems = [
    { name: 'Dashboard', icon: iconDashboard },
    { name: 'Shipments', icon: iconShipments },
    { name: 'Carriers', icon: iconCarrier, isActive: true },
    { name: 'Tracking', icon: iconTracking },
    { name: 'Contacts', icon: iconContacts },
    { name: 'Settings', icon: iconSettings },
]
</script>