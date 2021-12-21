---
title: Implementing a finite state machine in Godot Engine (v3.X)
date: "2018-05-26"
---

## Introduction
  I want to talk about how can you implement a FSM (finite state machine) in Godot Engine. This implementation is based in my own experienced at the time I started learning Game Maker, which was when I used it for the first time.
  If you don't know what is a FSM in general, I suggest you to [read this](https://en.wikipedia.org/wiki/Finite-state_machine), because the focus of this article is just to show how can you implement that.

## Some use cases
  In games, there's several uses of state machines. Here's some examples:
- To define how an entity will act based in its states, which are changed accordingly to some conditions: An enemy, by default, does a patrol movement. If the player enters its fov, the state becomes engage, for when the enemy gets closer, its state will change to attack, where the enemy behaviour are completely different.

- Game State: in your game state you save every relevant data, as the player position, their items in inventory, in which map they are, what areas they already unlocked. It's what your emulator saves and loads in the game state section, in fact. This is a common way to make a save/load system.

## Implementation
  You can implement this the way you want, even a simple string to define your state.
```gdscript
func _physics_process(delta):
    match state:
        "moving":
            _handle_platformer_movement()
        "climbing":
            _handle_climbing_movement()
```
*If you doesn't understand what is the `match` statement, [read this](https://docs.godotengine.org/en/3.1/getting_started/scripting/gdscript/gdscript_basics.html#match).

It's a functional implementation, but not the nicest one.
We can replace this with an enumerator, which is faster to compare and type safe, which is easier to maintain.

```gdscript
# You can just setup an enum
enum {
    IDLE,
    MOVING,
    CLIMBING
}
var state: int = IDLE

# Or name it
enum states = { IDLE, MOVING, CLIMBING }
var other_state: int = states.IDLE
```

Both will work. I'll keep the first one.
The type of `state` and `other_state`, I defined as `int`. If you doesn't understand how an enum works, I suggest you [reading this](https://www.thoughtco.com/what-is-an-enum-958326).
In resume, they'll be treated as integers starting from zero. You can change it's order and it'll not affect your code, since the value will change but what you're using are the named constants.

Then the result would be:
```gdscript
extends Node

enum {
    IDLE,
    MOVING,
    CLIMBING
}

# [...] variables and _ready()

func _physics_process(delta):
    match state:
        IDLE:
            # call the idle state handler function
        MOVING:
            # call the moving state handler function
        CLIMBING:
           # call the climbing state handler function

# [...] do the same for all the states you have

# [...] handler functions
```

In this example, all I'm doing is changing the state of my player between IDLE, MOVING and CLIMBING.

To change how it behaves and handle inputs: When I'm on idle state, I can jump, move and then the state will change to moving, but if I overlap a ladder and press up or down, I want to be able to change the behaviour.

After the player is positioned to the same `x` of the ladder's center, it needs to change its state to climbing, where I just lets the player move vertically, change its state only if I jump of the ladder, hold down while already on ground or hold up and leave the ladder area.

It'll result in something like this:

![gif showing the player changing between states](https://forum.unity.com/attachments/laddergif2-gif.161236/)
*It's not my gif, I got it from [this](https://forum.unity.com/threads/released-smart-2d-colliders-including-smart-platform-controller.361231/) post to use as an example, since I lost my original gif.
