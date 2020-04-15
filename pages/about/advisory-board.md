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
    <p>Signpost about the Advisory Board members, e.g. that they are known professionals from all over the world.</p>
    <!-- Stop editing content here -->
  </div>
  <div class="grid-x grid-container grid-margin-x">
    {% for item in site.data.adv-board %}
    <div class="cell margin-bottom-2 margin-top-2 medium-4 large-3">
      <div class="team_member">
        {% assign img = item.name | downcase | replace: ' ', '_' %}
        <img src="{{ site.baseurl }}/img/advisory-board/image_{{ img }}.jpg" class="team_member_img" aria-hidden="true">
        <br>
        {{ item.name }}<br>
        <a href="mailto:{{ item.mail}}" title="Mail to {{ item.name }}">
          <img src="{{ site.baseurl }}/img/icons/email.svg" aria-hidden="true">
          <span class="show-for-sr">Mail to {{ item.name }}</span>
        </a>&nbsp;
        {% for url in item.urls.en %}
        <a href="{{ url }}" title="Open hompage of {{ item.name }}">
          <img src="{{ site.baseurl }}/img/icons/new-window.svg" style="margin-top: -5px;" aria-hidden="true">
          <span class="show-for-sr">Open hompage of {{ item.name }}</span>
        </a>
        {% endfor %}
        <p>{{ item.text }}</p>
      </div>
    </div>
    {% endfor %}
  </div>
</main>
