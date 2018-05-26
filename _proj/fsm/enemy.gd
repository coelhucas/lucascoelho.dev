extends KinematicBody2D

const GRAVITY = 10
const SPEED = 20
const JUMP_HEIGHT = -300

var motion = Vector2()
var player_found = true
var direction = 0

enum states { idle, chasing, attacking }
var state = states.chasing

var new_animation
var old_animation

onready var player = get_node("../player")

func _ready():
	# Called every time the node is added to the scene.
	# Initialization here
	pass

func _process(delta):
	
	if new_animation != old_animation:
		old_animation = new_animation
		$AnimationPlayer.play(new_animation)
	
	if state == states.idle:
		motion.x = 0
		new_animation = "idle"
		if player.position.y >= position.y:
			state = states.chasing
	elif state == states.chasing:
		if player.position.y < position.y - 50:
			state = states.idle
		
		new_animation = "walking"
		if player_found:
			if player.position.x > position.x:
				$Sprite.flip_h = false
				direction = 1
			else:
				$Sprite.flip_h = true
				direction = -1
				
		motion.y += GRAVITY
		motion.x = SPEED * direction
		
		if is_on_floor():
			if !$AnimationPlayer.is_playing():
				$AnimationPlayer.play("walking")
		
		move_and_slide(motion, Vector2(0, -1))
	elif state == states.attacking:
		new_animation = "attacking"

func _on_Area2D_body_entered(body):
	if body.is_in_group("player"):
		state = states.attacking

func _on_Area2D_body_exited(body):
	if body.is_in_group("player"):
		state = states.chasing
