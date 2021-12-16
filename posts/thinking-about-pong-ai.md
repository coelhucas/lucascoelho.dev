---
title: Thinking about pong AI
date: "2018-03-26"
---

## Introduction

  I'm going to introduce this blog talking about part of the creation process of a simple pong game using the *Godot Engine* for my public talk to introduce about game programming in my faculty, where I showed basic usage and tried to break through about a simple AI system, when I also was able to display some of nodes and how they work in Godot and also some peculiarities in GDScript syntax.

  Although this kind of game is already known and simple for any beginner, a deeper discussion about the functionalities can give you some insights about stuff that you wouldn't care usually and in the future could be a problem. So, I think it's a good thing being able to remake old games mechanics from scratch as a way of study.

You can access the repository [clicking here](https://github.com/lcrabbit/FAETERJ-Simple-Pong-Project)

![project title screen](https://user-images.githubusercontent.com/28108272/72347166-45219d00-36b6-11ea-8cad-69af608a4a06.png)
This is what the title screen looks like.

## What was the problem?
  I've noticed that the common mistake when trying to do a simple pong AI was that people was always making a totally dumb that just hit the ball somethings purely by chance, or they just set the AI axis equals to the ball axis, making the AI invincible.
  Of course, we're talking about just creating a pong-like game, we doesn't want to use a machine learning or some far-fetched thing to it. We just need to create a imperfect paddle, and it'll already be more closer to humans.

### The thin line of gimmicks
  A common way to avoid this, that I noticed after some research, is setting the paddle Y to some random value between more or less the current ball's Y, this is good, but I don't liked it in practice. Sometimes you have a paddle that is predicting the ball's final position, which is fine, but then you have a ball going down and your paddle is moving up, which isn't something that people usually do. Pong becomes harder because every time the ball gets faster and faster until you can't keep up well your ball position prediction, and then we lose. We want to simulate this habit.

## So, which path we choose?
  After searching more, I found [this stackexchange answer](https://gamedev.stackexchange.com/a/57397) about exactly this. It was literally what we thought. Because it'll result in some more "human" mistakes.

### How it's made?
  If you doesn't want to open the link above (which is already a simple and short one), I'll resume:
You basically add a fake invisible ball with a different (greater or smaller) speed than the real one, and the paddle will follow this fake one instead.

### Why it works?
  Let's suppose you use a smaller speed, as I did. While time is passing, both the real and the fake balls get faster, but the fake is always slower. It makes the prediction fine at first, considering that you used a smaller difference (In my case, `speed - 2` did a good job) between the speeds, so eventually, the difference between balls in the vertical Axis will be misaligned enough to make the enemy paddle predict wrong, as a person could do, without being stupid and just go the opposite way.

  I must say, tho, that the example in the answer is better (he used a higher speed on the fake one), because as the fake one will be ahead, it'll looks more like a wrong prediction and make your enemy look smarter. I used a smaller value just as a tweak to have more stuff to say in my talk.

![how it'll looks like if the fake ball was visible](https://user-images.githubusercontent.com/28108272/72348811-fbd34c80-36b9-11ea-9200-844447d85ed5.png)
Here you can clearly see what's happening. The red square is the fake one, which the "AI" follows.

### What you must observe?
  If you don't have the screen edges as collisions to make the ball be reflected, your fake ball will eventually be "ignored" by the player, as they can't see it, and go off the screen making your AI enemy going to the direction of the fake one which will be completely different than the reflected one.

  There's no magic values. You need to tweak it as it suits better your case. It depends on resolution, and that's why in my case a value of `speed - 2` was fine. You must test and see how far can your enemy go to be it's looks nice. I think it's a good beginner reflection to start thinking about AI decisions.

## The end
  Reading this now, almost two years later, make this look stupid. I made some changes and fixes in my explanation which was annoyingly big and losing the focus. I'm not going to delete this post because its a reflection for me about my past, and for the same reason I'll keep this public.
