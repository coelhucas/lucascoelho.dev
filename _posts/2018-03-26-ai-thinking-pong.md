---
title: Thinking basic AIs with pong
description: This article is about a [game made to my presentation at FAETERJ](https://github.com/lcrabbit/FAETERJ-Simple-Pong-Project) (Faculdade de Educação Tecnológica do Rio de Janeiro)
categories: gamedev

tags: godot-game-engine
---

## Introduction

Hello! Today I'm gonna talk about part of the creation process of a simple pong game using the open-source *Godot Game Engine* for my presentation and lessons called *Introduction to game programming*, where I take a short presentation about the *Godot's* organization, nodes, scenes, GDScript and stuff, followed by the practices, seeing some of the interface and quickly going to the code. And here's when the thing start. The idea is to create a simple pong game to explain how each (some of) node type works, how to use correctly the syntax and thinking about logic solutions for each problem. I'm going to approach specifically my problem: How to make an useful pong AI?
Probably you're gonna think: Why should I remake this trash old game when hundreds of people made it?
My answer will probably be: How can you even think about making a bigger game if you can't remake the simple ones? Unless you already know things like how to create a functional player vs cpu hash game? Most of the time people want to make a "billion dollar idea" when they can't just remake the first Contra mechanics... Well, this text it's not to talk about it.

This is the main screen:
![Game Title Screen](www.lcrabbit.com/img/pong/pong_title.png)

## What's the problem?
I've noticed that mostly *ever*, people think about using a code that sets the CPU's paddle Y axis to the ball Y axis. But there's a problem: It would make the AI invencible, and that's not the point. So I've played a little a Player vs Player at my own pong and I've realized: 
We (at least me and me) are always trying to predict where the ball is going to quickly set our paddle prepared to the goal, and it's exactly the same thing that almost of the time have made me lost the ball.

## The thin line between an idiot and an expert CPU
As I said, we didn't want a invencible AI. And still less an idiot that goes to the opposite direction of the ball, so... how to handle it?
Reading about it in the internet, I've found many solutions. I was almost surrendering to the solutions that choose some randomless positions based on the surroundings of the ball's vertical axis. But almost all of then seems so strange, and to be honest, probably what I'm going to show are still strange, but at least, I like it.

## The explanation
First of all, it's not my credits this way of doing this. While I was searching, I found [in this gamedev stack exchange page](https://gamedev.stackexchange.com/questions/57352/imperfect-pong-ai), so, credits to **DDR**. :smile:
The main idea makes a perfect representation about what I was thinking of an AI that tries to predict the ball's path to get prepared before it comes, like we (at least me, again) usually do, making almost a just match. A good player, but imperfect. That's kinda human, right? Well, I think so.
The main idea of this consists in a fake invisible ball that's making the same path of the real one, excepting that this fake is a little slower than the real one.
Based in it, we made the AI paddle reproduce always the fake ball's vertical axis, which is work, because the balls will ***almost*** ever be at the same position, and *that's* the point! This ***almost***. It means like some times they won't be synchronized, and that will be the "semi human fail" made by the cpu.

Here you can see clearly the two balls (original as the gray, and the red one is the fake. usually, the fake will be invisible, of course. I've made this to explain what's going on)
![Pong Fake Ball](www.lcrabbit.com/img/pong/pong_fakeb.png)

## What could be possible wrong?
So far there's only two things that I've seem that could make problems, and how I handled it:

1 - Sometimes during the game, the player probably will touch only the real ball, while the fake one keep going away and "breaking" the AI in some situations. It could be solved by adding some collisions to reflect the ball at the horizontal sides, so if it happens, the ball is just going to keep a different way from the real one, making the AI lose it.

2 - There's no "magic values" or something like that. I've made this version, with a specific resolution, specific sizes, speeds and stuff. What have worked to me was using a value of the real ball *-2* to the speed of the fake one, and it's important to know, but you'll probably need to test, because if it's too slow, the AI paddle probably will be a stupid AI.

## Enjoy it! Make new funtionalities and stuff!
You didn't need to use the same thing that I did. If you've read the link that I put above, the original solution uses a greater speed, while in my it's slower, because I think it was better. It's not a *rule*, because in gamedev, **you** make the rules!

See ya! :smile:

<!-- more -->