<script setup name="ModalWrapper"></script>

<template>
  <div class="absolute top-0 w-full h-full">
    <div class="w-full h-full bg-black opacity-80"></div>
    <div
      class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
    >
      <div class="w-56 bg-white shadow-md space-y-4 p-4 rounded-md">
        <slot />
      </div>
    </div>
  </div>
</template>
