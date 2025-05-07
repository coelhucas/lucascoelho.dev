---
title: Cool things we can do with automated workflows
date: "2025-05-07"
---

One of the things I have played a lot with on work and personal projects recently is the automation of tasks using GitHub Actions. Maybe you've done the same elsewhere, such as in Argo Workflows, Jenkins, CircleCI... But so far the experience with GitHub Actions have been the best for me and given they're [mostly compatible](https://docs.gitea.com/usage/actions/comparison) with Gitea make it a bigger deal for me personally, as I wouldn't like to be "locked-in" on proprietary software.

Recently I had to integrate [benk-uk/workflow-dispatch](https://github.com/benc-uk/workflow-dispatch) at [timescale/docs](https://github.com/timescale/docs/commit/a301849dfc2942483fdc903a5a135da5265a82b7), so we could trigger internal builds on our private documentation website repo adding newer content from this public docs content repo.

Since it's all [workflow_dispatch](https://docs.github.com/en/webhooks/webhook-events-and-payloads#workflow_dispatch), you can still define inputs to be sent, in our case we send the origin branch name and PR number from docs, so we can generate the previews based on these information, useful for distinguishing the URLs, for instance.

We now also can define the target branch from the `ref` parameter, making it easier for testing and previewing newer features before they're live, such as custom markdown syntax, new components, and so on.

And this is just a *fraction of the power* of workflows! I have a fork of a custom action called [godot-export](https://github.com/softwoolco/godot-export) written in TypeScript that I use to build and generate the artifacts for my steam games for Windows, MacOS and Linux. The fork was created initially just so I could add specific steam DLL/SO files for the Steam integration, nowadays I believe this could be achieved with the original action as well, but again, this shows how easily you can extend behaviors by yourself. It's so convenient to write custom workflows since they support Node.js, Python, Go, [and more](https://github.com/features/actions#:~:text=Any%20language,in%20your%20language%20of%20choice.)...

If we wanted to go further with this, we could for instance add a step with the [setup-steamcmd](https://github.com/marketplace/actions/setup-steamcmd) action, and use their CLI to send the artifacts directly to Steam. How cool is that?

As with anything else, there are concerns to be taken into account, specially regarding security[^1] and [pricing](https://docs.github.com/pt/billing/managing-billing-for-your-products/managing-billing-for-github-actions/about-billing-for-github-actions#included-storage-and-minutes) — think an automation to run hour long tasks at your company multiple times, they won't be happy at the end of the month.

Of course, if you're already familiar with CI/CD any of this is news for you. But at least on my personal experience, many people disregard the importance of these tools and just take it for granted, maybe because there's already a well-defined DevOps team and making releases always seemed smooth for you and since it just works, why even open the `workflows` folder to see what's inside?
At times some people just remember there's something under the hood when a workflow starts failing, maybe due some expired or revoked token (been there after a colleague left the company and we used one token created from their personal account). Having to fix, extend or create new workflows generally ends up being that postponed task that no one wants to tackle, but I ask you, why? I definitely recommend diving on it when the opportunity come, it might be eye opening and you start seeing new places that could benefit having that, maybe your personal projects would be easier to maintain with some automated validations or binaries distribution. It's definitely a good skill for your toolbelt.

## What else can you do with them...

Recently, I started contributing a bit more to the local GDG group from where I live and, during the website renoval (last update was 5 years ago!), so I added a [workflow file](https://github.com/gdgjf/gdgjf.github.io/blob/d138067a2efb5553981f68db0db6cb5e3bc9d9ba/.github/workflows/deploy.yml) to simply build the Next.js project and deploy it through GitHub pages after every push.
Nothing fancy — but does everything we need!

A Little Game Called Mario, an *"open-source, collectively developed hell project"*[^2] has a [whole suite](https://github.com/a-little-org-called-mario/a-little-game-called-mario/blob/main/.github/workflows) of workflows for:
- Validating the game dialogs JSON file
- Validating and reporting warnings for collisions masks and layers
- Building the game on each PR to validate nothing is broken
- Deploying the previously built artifacts to a Netlify preview link(!!)
- Producing the game credits based on contributors(!!!)
- And of course, building and publishing the actual game build

Isleward, an open-source moddable roguelike MMO[^3], has in their [.gitlab.yml](https://gitlab.com/Isleward/isleward/-/blob/master/.gitlab-ci.yml) uses it for running `npm audit`, linting both client and server packages and even building docker images for the game.

Leaning to game development examples is a good way to "extrapolate" some ideas of what can be done thinking outside of the box, since usually there's more freedom than in a company environment and interesting ideas emerge from people working on creative projects.

[^1]: [Security hardening for GitHub Actions](https://docs.github.com/en/actions/security-for-github-actions/security-guides/security-hardening-for-github-actions)
[^2]: [iznaut.com/littlemario](https://iznaut.com/littlemario)
[^3]: [Isleward](https://play.isleward.com/)
