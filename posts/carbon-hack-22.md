---
title: "Carbon Hack | Green Webhook"
date: "2022-11-09 "
imageUrl: "/blog-images/carbon-hack-22.png"
---

> 400 developers joined [#CarbonHack22](https://twitter.com/hashtag/CarbonHack22?src=hashtag_click) to build the best carbon-aware application for a chance to win 40K USD.

A previous colleague of mine, [Ismael](https://www.linkedin.com/in/ismaelvelasco), kindly re-posted my '_Open to work_' post on LinkedIn last month (October). Once I caught up Ismael, I was opened up to an opportunity to join a **3 week long Hackathon** organised by the [Green Software Foundation](https://greensoftware.foundation) 🌍.

The objective of this Hackathon was to build the most **innovative** carbon-aware software solution using the Green Software Foundation's [Carbon Aware SDK](https://github.com/Green-Software-Foundation/carbon-aware-sdk); with Intel, UBS, Goldman Sachs, Microsoft, Accenture and more as judges!!

Ahead I went and looked for a project where I could contribute some of my skills and also throw myself into a new project, after being made redundant! I found an idea that I liked the sound of and applied it to be a part of this solution. Upon being accepted, we formed a team of 3 and had a Kick-Off (KO) call to discuss our ideas! [Jonathan](https://github.com/jonparker) being the brains of the operation, led the team and discussed his initial thoughts and away we went. 

## What problem does your idea solve?

So, you might be thinking, what on earth is a "carbon-aware" software solution? 

Believe it or not, how you utilise the internet can be harmful to the planet. For example, sending **65 emails** is roughly equivalent to driving 1km in a car. To solve this problem The Green Software Foundation has hosted a Carbon Hack where developers around the world can help reduce this impact by creating software that is friendlier to the planet we live on.

Another example is data centres:

> On a global level, data centres consume approximately 200 terawatt-hours (TWh) of electricity, or nearly one per cent of global electricity demand, while contributing to 0.3% of all global CO2 emissions, according to the International Energy Agency.

[Credits](https://www.datacenterfrontier.com/voices-of-the-industry/article/11427887/for-the-balance-sheet-and-the-sake-of-the-planet-its-time-data-centers-reduce-power-consumption-by-improving-utilization)


## Our solution

I joined a team from the Hackathon called '[The Green Webhook](https://taikai.network/gsf/hackathons/carbonhack22/projects/cl92pm0zd67719801uv7n6gthuf/idea)'. Personally, I thought this was such an interesting and easy idea for users to become environmentally friendly without too much effort! What also drew my attention to this particular project was the possibility of using [RedwoodJS](https://redwoodjs.com/) and [TailwindCSS](https://tailwindcss.com/) in an awesome side project.

The Green Webhook project's aim is to enable a **radical** reduction in carbon emissions in many different ways.

Currently, it enables the reduction of carbon emissions of Azure Cloud to compute workloads and in future, it will enable reductions in personal devices (phones & laptops), smart home devices and IoT devices.

The Green Webhook project is an easy-to-use solution allowing anyone to route traffic and compute-intensive workloads to the most carbon-friendly location or time of day depending on the real-time predictions of the [Carbon Aware SDK](https://github.com/Green-Software-Foundation/carbon-aware-sdk).

## What we built

We built a working and fully deployed frontend and backend web application for managing and using Green Webhooks that can location shift workloads between different Azure regions.

As well as the above, we have nearly completed the addition of time-shifting support to enable the scheduling of workloads based on a user-provided maximum delay, for a webhook request.

## My contributions

With a lot of the logic/fundamentals in place (thanks to Jon), I took a dive into styling and branding The Green Webhook. Firstly, I did some research into a name/logo for our project and worked from there. I used a website called Logaster (now due to be closed) to form a logo that was relevant to our project and the team agreed on this:

![image](https://github.com/jonparker/green-webhook/blob/main/web/src/components/Header/logo-no-background.png?raw=true)

After deciding on the logo, I worked on creating functional components for the Header, Navigation and other areas of the web app. The colour of the application to me was pretty important. I recently discovered that a dark background/theme can reduce the amount of work our computer needs to do in order to display information and therefore reduces carbon emissions as well as save some battery life. This meant converting and ensuring our web app worked perfectly in a dark theme.

## Impact of our solution

Our project has the potential to result in massive reductions in carbon emissions.

IT professionals can easily use Green Webhooks to intelligently schedule very large workloads via a simple user interface.

Some examples of workloads that can be shifted are:

- Database backups
- Website scheduled jobs that use a globally distributed database
- Video and audio encoding 
- Machine learning training and inference
- Schedule reports, batch jobs
- Any asynchronous trigger that has an SLA of more than 5 minutes to complete

## What the future holds

Our vision for GreenWebhook is for it to grow into an "Internet Grid Operator". A carbon-aware webhook that location and time shift the workload that is triggered by any HTTP request. By being the intelligent "internet grid operator" we can provide demand shaping that works in harmony with the electricity grid supply shaping in order to reduce the carbon emissions the grid causes.

Check out our pitch on YouTube - [https://www.youtube.com/watch?v=FyEYoeAGso4](https://www.youtube.com/watch?v=FyEYoeAGso4)

Got this far? Try out the Green Webhook now: [https://greenwebhook.netlify.app](https://greenwebhook.netlify.app)