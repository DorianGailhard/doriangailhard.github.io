---
layout: page
title: PhD
description: PhD I am currently enrolled in.
img: assets/img/logo_soda.png
importance: 1
category: work
related_publications: false
images:
  slider: true
---

<!-- Content Container: Swiper and Text Side by Side -->
<div class="content-container" style="display: grid; grid-template-columns: 1fr 2fr; gap: 20px; align-items: start;">
  <!-- Swiper Slider (1/3 of the screen) -->
  <swiper-container 
    keyboard="true" 
    navigation="true" 
    pagination="true" 
    pagination-clickable="true" 
    pagination-dynamic-bullets="true" 
    rewind="true" 
    style="width: 100%; max-width: 100%;">
    
    <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/hygene/sample_generated_er.png" class="img-fluid rounded z-depth-1" %}</swiper-slide>
    <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/hygene/sample_generated_ego.png" class="img-fluid rounded z-depth-1" %}</swiper-slide>
    <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/hygene/mesh.png" class="img-fluid rounded z-depth-1" %}</swiper-slide>
    <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/hygene/sample_generated_tree.png" class="img-fluid rounded z-depth-1" %}</swiper-slide>
    <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/hygene/sample_generated_sbm.png" class="img-fluid rounded z-depth-1" %}</swiper-slide>
  </swiper-container>

  <!-- Text Content (2/3 of the screen) -->
  <div class="text-content" style="font-family: Arial, sans-serif; line-height: 1.6;">
    <p>
      I am doing a PhD in Artificial Intelligence at <a href="https://www.telecom-paris.fr/">Télécom Paris</a> (<a href="https://www.telecom-paris.fr/en/research/labs/information-processing-ltci">LTCI</a>, <a href="https://www.telecom-paris.fr/en/school/departments/communications-electronics">COMELEC</a>), focusing on <a href="https://en.wikipedia.org/wiki/Generative_artificial_intelligence">generative models</a> applied to <a href="https://en.wikipedia.org/wiki/Graph_theory">graph theory</a>. I am supervised by <a href="https://sites.google.com/view/jhonygiraldo">Jhony Giraldo</a>, <a href="https://enzotarta.github.io/">Enzo Tartaglione</a>, and <a href="https://www.telecom-paris.fr/lirida-naviner">Lirida Naviner de Barros</a>. The PhD is done in collaboration with <a href="https://www.arteris.com/">Arteris</a> and aims at developing a deep-learning model able to generate electronic chip designs.
    </p>

    <p>I published the following papers:</p>
    <div class="publications">
      {% bibliography --group_by none --query @*[phd=true]* %}
    </div>
  </div>
</div>

<!-- Inline CSS for responsive design -->
<style>
  /* For screens smaller than 768px (mobile view), stack the content */
  @media (max-width: 768px) {
    .content-container {
      grid-template-columns: 1fr; /* Single column layout */
    }

    swiper-container {
      width: 100%;
    }
  }
</style>

