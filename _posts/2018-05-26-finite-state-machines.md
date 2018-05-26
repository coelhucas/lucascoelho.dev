---
title: Finite State Machines
description: A brief introduction to the use of FSM in your games.
categories: GameDev Tutorial AI

tags: Godot-Game-Engine
---

# Introduction
Quick note: I've integrated the DISQUS here, so now you can comment below. 

Well, there's almost 2 months since the last post, and I apologize for this, althought that I think that very few people are reading these "articles". Btw, today I'm going to talk about the FSM (Finite State Machine) implementation to games. It's based in my own experience since I've started learning Game Maker (where I've used this concept for the first time) until today.

A brief description of finite state machines for games would be something like an AI prepared to do X action in Y moment, or maybe player states to make everything work fluently.
Imagine that you have a platform movement, and you want to implement a vertical ladder which you can climb it, how you're going to do that? I can think about some ways to do it, but just quick fixes or some jerry-rigged system. With states, you can separate two controllers, one for the player "common" platform movement, and other that handle separated with the climbing (up and down) state, and so you're not going to have problems, because your states work individually, preventing player from receive gravity during the climbing, or not making an enemy hitting the air while player is away.
Saying this, you can see this simple state machine that I made for this text:
![Example gif](http://www.lcrabbit.com/img/fsm/gif1.gif)
Basically there are just 2 simple states: moving and climbing. Moving handle with all platform stuff (gravity, jump and left & right movement), while climbing are just up/down and if you're on ground or have pressed <- or -> the character jump out and return to moving.

# Ways to do a state machine

There's some ways to do a state, it could be just a string, for example(in GDScript, as I'm using Godot to do it):
var state

{% highlight swift linenos %}
func _physics_process(delta): // in other places, this is called as fixed update function/void
	if state == "moving":
		_moving(delta) // calling an example function that will be update the moving state 
	elif state == "climbing":
		_climbing(delta) // calling an example function that will be update the climbing state
{% endhighlight %}

it's good to read, but in large scale, it could be confusing and consumes more processing. Instead this, we can did also:

{% highlight swift linenos %}
var state
func _physics_process(delta): 
	if state == 0:
		_moving(delta)  
	elif state == 1:
		_climbing(delta) 
{% endhighlight %}


It'll be faster to proccess, but much less readable. What can we do now?
Well, in my opinion, the better way is to use an Enumerator (enum). I'm not going to teach you what's is an enumerator, but if you want, [this article](https://www.thoughtco.com/what-is-an-enum-958326) will give you a hand. All you need to know is that using an enum you can represent integer values using an user-defined type, for example:

{% highlight swift linenos %}
enum states {
	moving,
	climbing
}
{% endhighlight %}

or even
{% highlight swift linenos %}
enum states { moving, climbing }
}
{% endhighlight %}
it's the same. And to call some value you need to use states.name (states.moving/states.climbing). Internally, states.moving are going to be 0 and states.climbing = 1.
Yes, you can pass your own values using for example:
{% highlight swift linenos %}
{
enum example { number = 42, gasoline_in_brazil = 9 }
{% endhighlight %}

But getting this concept, you can make this:
{% highlight swift linenos %}
enum states { moving, climbing }
var state = states.moving

func _physics_process(delta):
	if state == states.moving:
		_moving(delta)
	elif state == states.climbing:
		_climbing(delta)
{% endhighlight %}

get the idea?

# Conclusion

Using this you just need to define your states and how you're going to work. For example:
![Example gif](http://www.lcrabbit.com/img/fsm/gif2.gif)
In this "enemy", I made 3 states: idle, chasing and attacking. If character's Y axis is greater (in Godot, lesser) than enemy Y + some_value, the enemy state are going to be idle, if it's not will gonna be chasing and if the player's collision shape enter on the green rectangle, the state will be attacking (consequently, if the player leaves this area, the enemy will follow the player again).

I hope this lecture is helpful to someone, I have no idea if I'm being didactic in this texts, so leave your feedback about it bellow, so I can see where I can improve this.

Also, maybe I start a devlog about a project that I'm trying (oh no, another project idea) to start, if I really do this, I'm going to post more often here. Well, this is all folks, bye!