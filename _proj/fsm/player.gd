extends KinematicBody2D

const SPEED = 100
const GRAVITY = 10
const JUMP_HEIGHT = -150
const UP = Vector2(0, -1)

var motion = Vector2()

var new_animation
var old_animation

enum states { idle, climbing }
var state = states.idle

var obj
var can_climb = false
func _ready():
	# Called every time the node is added to the scene.
	# Initialization here
	pass

func _process(delta):
	if new_animation != old_animation:
		old_animation = new_animation
		$AnimationPlayer.play(new_animation)
		
	if state == states.idle:
		normal_movement(delta)
	else:
		climb(delta)
		
	if can_climb and Input.is_action_pressed("ui_up") and state == states.idle:
		motion.x = 0
		position.x = obj.get_node("Position2D").get_global_position().x
		state = states.climbing

func normal_movement(delta):
	
	motion.y += GRAVITY
	
	if motion.x != 0:
		new_animation="walking"
	
	if motion.x == 0:
		new_animation="idle"
	
	if motion.x > 0:
		$Sprite.flip_h = false
	elif motion.x < 0:
		$Sprite.flip_h = true

	if Input.is_action_pressed("ui_right"):
		motion.x = SPEED
	elif Input.is_action_pressed("ui_left"):
		motion.x = -SPEED
	else:
		motion.x = 0

	motion = move_and_slide(motion, UP)
	
	if is_on_floor() and Input.is_action_pressed("ui_up"):
		motion.y = JUMP_HEIGHT

func climb(delta):
	
	$Sprite.flip_h = false
	
	if Input.is_action_just_pressed("ui_left") or Input.is_action_just_pressed("ui_right"):
		state = states.idle
		can_climb = false
	
	if Input.is_action_pressed("ui_up"):
		motion.y = -SPEED/2
	elif Input.is_action_pressed("ui_down"):
		motion.y = SPEED/2
	else:
		motion.y = 0
	
	if !can_climb:
		state = states.idle
	
	if motion.y == 0:
		new_animation = "idle_climb"
	else:
		new_animation = "climbing"
	motion = move_and_slide(motion, UP)
	if is_on_floor():
		state = states.idle
		can_climb = false
func store_obj(game_object):
	obj = game_object
	print(obj)
	print("VIADO")