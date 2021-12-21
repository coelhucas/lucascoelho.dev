---
title: Resolving Godot mouse position inside stretched viewport + custom camera
date: "2021-06-02"
---

## Problem with scaled Viewport
Long time no see.
I was fooling around with Godot, using a Viewport to contain a game in smaller resolution (480x270), while my interface could have better resolution, until I noticed that using this structure (a `ViewportContainer` stretching a `Viewport`), my `look_at(get_global_mouse_position())` lost accurate.

![Jun-02-2021 20-22-54](https://user-images.githubusercontent.com/28108272/120564020-591b8b00-c3e0-11eb-9c2d-23719d6f7c94.gif)

The first solution was to calculate my scale factor (how many X my viewport is scaled). I got this by doing:
```gdscript
var _scale_factor := OS.window_size / get_viewport().size
```
Considering that I had a viewport of (480, 270) and my default resolution (as also size of its `ViewportContainer`) was twice this value (960, 540), the scale factor is 2 for both x and y.

It's still unclear to me the exact reason of this. Considering that the global mouse position is the same regardless of calling it from inside the Viewport or not, since the original Viewport had half its size, it seems that needed to take it in account as a way of converting these coordinates to its values scaling the same as the resolution.

**P.S.:** You have to 'recalculate' this factor every time the window size is changed to guarantee it's right.

## Using a Camera

This pretty much solves the problem, if you assure that this `get_viewport()` is always your 'custom' Viewport, not the default one Godot makes as every game root.

The problem then starts after I added a Camera to my player. As you can see, as far as I move further from the scene starting point, things start getting odd again.

![Jun-02-2021 20-35-22](https://user-images.githubusercontent.com/28108272/120564802-1490ef00-c3e2-11eb-8065-c37c2f837a31.gif)

The change was still simple. This time, when operating `get_global_mouse_position`, I had to also remove the origin of Viewport's `canvas_transform`. The final snippet looks something like that:

```gdscript
# Scale factor is still calculated as above
# [...]

var _resolved_mpos := (get_global_mouse_position() - get_viewport().canvas_transform.origin) / _scale_factor
my_node.look_at(_resolved_mpos)
```

![Jun-02-2021 20-40-56](https://user-images.githubusercontent.com/28108272/120565409-5cfcdc80-c3e3-11eb-9305-855d241e3298.gif)


At the end, I won't even use this "gun" in the project. At least I know how to solve this kind of problem just in case. Also, feel free to comment on a deeper explanation behind all that. Although I got it solved pretty intuitively for me, the issue isn't entirely clear.
