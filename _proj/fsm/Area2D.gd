extends Area2D

# class member variables go here, for example:
# var a = 2
# var b = "textvar"

func _ready():
	# Called every time the node is added to the scene.
	# Initialization here
	pass

#func _process(delta):
#	# Called every frame. Delta is time since last frame.
#	# Update game logic here.
#	pass


func _body_enter(body):
	print('caraio')
	if body.is_in_group("player"):
		if body.state != body.states.climbing:
			body.can_climb = true
			body.store_obj(self)


func _on_Area2D_body_exited(body):
	if body.is_in_group("player"):
		body.can_climb = false
