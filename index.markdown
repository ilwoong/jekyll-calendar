---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
title: Calendar Page Title
---
<!--
<a href="webcal:{{ site.url | replace: 'http:', '' | replace: 'https:', '' }}{{site.baseurl}}/calendar.ics">Calendar file</a>
-->
<div class="left-box">
    {% include clock.html %}
    {% include calendar_categories.html %}
</div>
<div class="right-box">{% include calendar.html %}</div>

<script src="{{site.baseurl}}/js/calendarbase.esm.js"></script>
<script src="{{site.baseurl}}/js/calendar-entries.js"></script>
<script defer src="{{site.baseurl}}/js/calendar-shell.js"></script>
<script defer src="{{site.baseurl}}/js/calendar-init.js"></script>
<script defer src="{{site.baseurl}}/js/clock.js"></script>
