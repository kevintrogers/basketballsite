<script setup>
import cardSnippet from './cardSnippet.vue'
</script>



<template>
  <v-container>
  <h1 class="justify-center text-h1">Basketball Info</h1>
 

    <div class="w-full">
      <!-- <AppMenu /> -->
      <!-- <router-view /> -->
      <div class="grid grid-flow-col auto-cols-max justify-center">
        <h2 class="text-h2">Fundamental Skills</h2>
        <ul class="justify-center">
<!--   
          <li class="">
            <v-card :variant="elevated">
              <v-card-headline></v-card-headline>
              <v-card-actions>
      <v-btn
        variant="text"
        color="teal-accent-4"
        @click="reveal = true"
      >
        Learn More
      </v-btn>
    </v-card-actions>
              <v-card-item>
                 </v-card-item>
              
            </v-card>
          </li> -->
          <li><iframe width="560" height="315" src="https://www.youtube.com/embed/UGT7C7DdCYo?si=kkgYnSR1jqLrFL3w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <p class="text-high-emphasis">Quick video on the fundamentals of having a consistent, accurate jumpshot with Klay Thompson from the Golden State Warriors</p>
          </li>
          <li class="text-high-emphasis"><iframe width="560" height="315" src="https://www.youtube.com/embed/fzySl4Vqfwk?si=LYyl3s7Qk9LzSK0Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <p>A Breakdown of how to do a crossover dribbble, but he expains how you should be dribbling in genral to maintain control over the ball.</p>
        </li>
          <li class="text-high-emphasis"><iframe width="560" height="315" src="https://www.youtube.com/embed/Cvl980x11Jk?si=K-O_zWF_HlQObAGA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <p>How to post up. A basic offensive skill for Power Forwards and Centers.</p>
        </li>
         <li class="text-high-emphasis"><iframe width="560" height="315" src="https://www.youtube.com/embed/4tdZeJcyXf0?si=qcqyPJskHF1_NBY4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <p>The Drop Step is a simple, yet effective way for post players to score after posting up.</p>
        </li>
        </ul> 
      </div> 
      <div class="w-2/3">
        <h2 class="justify-center text-h2">Strategy</h2>
        <ul>
            <li>
          <li class="">
            <v-card :variant="elevated">
              <v-card-headline></v-card-headline>
              <v-card-actions>
      <v-btn
        variant="text"
        color="teal-accent-4"
        @click="reveal = true"
      >
        Learn More
      </v-btn>
    </v-card-actions>
              <v-card-item>
                 </v-card-item>
              
            </v-card>
          </li>
            <p class="text-high-emphasis">Click Play animation and it will show you a video.</p>
              <iframe allow="fullscreen" style="border:0" title="Play Creator App" width="800" height="500" src='https://www.thehoopsgeek.com/react-apps/PlayCreator/embed/?code=k1VpXpZcfS&showTitle=1&showVideo=1&showDescription=1&showPhaseDescriptions=1'></iframe>
            </li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
      </div> 
      <div class="w-2/3">
        <h2 class="justify-center">Advanced Skills and Drills</h2>
        <ul>
          <li>1st item</li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
</v-container>
</template>
