---
layout: team
title: "Advisory Board"
permalink: /uber_uns/advisory-board/
ref: advisory-board
parent: about
position: 
order: 4
alt: "introduction of the advisory board"
---
<main class="grid-x grid-container">
  <div class="cell medium-10 medium-offset-1 large-8 large-offset-2">
    <h1 class="margin-top-2">{{ page.title }}</h1>
    <!-- Start editing content here -->
    <p>The Advisory Board for ON-MERRIT is a valued group of high-level external stakeholders with a demonstrated record/interest in RRI and Open Science, including independent experts as well as representatives of key organisations. 
      The board advises the project in strategic matters and provides advice for the high-level dissemination and outreach strategy of the project. 
      The Advisory Board will also be essential for the verification and finalisation of the project’s core results and recommendations.</p>
    <!-- Stop editing content here -->
  </div>
  <div class="grid-x grid-container grid-margin-x">
    {% for item in site.data.adv-board %}
    <div class="cell margin-bottom-2 margin-top-2 medium-6 large-4">
      <div class="team_member">
        {% assign img = item.name | downcase | replace: ' ', '_' %}
        <img src="{{ site.baseurl }}/img/advisory-board/image_{{ img }}.jpg" class="team_member_img" aria-hidden="true">
        <br>
        <strong>{{ item.name }}</strong><br>
        {{ item.institution }} 
        {% for url in item.urls.en %}
        <a href="{{ url }}" title="Open hompage of {{ item.name }}">
          <img src="{{ site.baseurl }}/img/icons/new-window.svg" style="margin-top: -5px; margin-left: 5px;" aria-hidden="true">
          <span class="show-for-sr">Open hompage of {{ item.name }}</span>
        </a>
        {% endfor %}
        <p style="text-align:justify;">{{ item.text }}</p>
      </div>
    </div>
    {% endfor %}
  </div>
</main>

