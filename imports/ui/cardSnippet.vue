<template>
    <v-card class="mx-auto" max-width="344">
      <v-card-text>
        <div class="text--primary">
          Demonstration of the proper form to shoot a jumpshot as taught by Klay
          Thompson
        </div>
      </v-card-text>
      <v-card-actions>
        <v-btn variant="text" color="teal-accent-4" @click="reveal = true">
          View
        </v-btn>
      </v-card-actions>
  
      <v-expand-transition>
        <v-card v-if="reveal" class="v-card--reveal" style="height: 100%">
          <v-card-item class="pb-0">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/fzySl4Vqfwk?si=LYyl3s7Qk9LzSK0Q"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </v-card-item>
          <v-card-actions class="pt-0">
            <v-btn variant="text" color="teal-accent-4" @click="reveal = false">
              Close
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-expand-transition>
    </v-card>
  </template>
  <script>
    export default {
      data: () => ({
        reveal: false,
      }),
    }
  </script>
  <style>
    .v-card--reveal {
      bottom: 0;
      opacity: 1 !important;
      position: absolute;
      width: 100%;
    }
  </style>
  