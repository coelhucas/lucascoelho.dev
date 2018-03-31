---
title: Introduction to Godot Engine + JSON
description: Today we're going to see how to use JSON to serialize information to our games using Godot Engine.
categories: GameDev Tutorial

tags: Godot-Game-Engine JSON
---

# Brief Description
JavaScript Object Notation (JSON), is a minimal, readable format for structuring data based on JavaScript's object literal notation. We're going to see how to use it to serialize information [read about serialization here](https://en.wikipedia.org/wiki/Serialization), in this case, I'll show you how to make a localization system using the JSON format as an example of this on gamedevelopment. I'll be using Godot, but it's something totally adaptable for other engines/frameworks.

**Application Examples**

1. Save/Load system
2. Localization/Multi Language support

## Project Setup
{% prism javascript highlight="1-5,7,10-13" %}
// ...
for batata
{% endprism %}

To skip some steps, I made a base project, which you can [get here](https://github.com/lcrabbit/Godot-Site-Projects/tree/master/Base-JSON). But all I'm using is: 
1. One button for each language (in my case, english and portuguese)
2. 2 labels. Just for test and show how it works.
3. One script with 2 signals (one for each button click), called *language-name*_selected*()
4. A function called set_language() which receives the argument *lang_prefix*.
5. A group called "localizable" with all localizable scenes.

# Result:
![Localization system gif](https://i.imgur.com/N5pjS1H.gif)

# Hands-On!
Now we need the JSON files. This is an example of one JSON file:

*For english*
```{
	"Title": "Title!",
	"Message": "Hello! How you doing? \nThis is an example of what you can do using a JSON file."
}```

*And portuguese*
```{
	"Title": "Título!",
	"Message": "Olá! Tudo bem com você? \nEsse é um exemplo do que pode ser feito usando um arquivo JSON."
}```

I'm using this in my finished project, which you can see [*here*](https://github.com/lcrabbit/Godot-Site-Projects/tree/master/Complete-JSON).
I'm going to call this files **en-texts.json** and **pt-texts.json**, respectively, to easily check the language later.

## The logic
Now, getting back to our GDScript, we need to get our JSON info and parse it. Basically, we'll read it and turns into a dictionary [read about here](http://docs.godotengine.org/en/3.0/classes/class_dictionary.html). Then, we need to know what will be localizated and change the text. You can see that I'm using the same *keys* for the texts ("Title" and "Message"), and that's because it's way more better (more practical) to get always a specific key with different values than having **n** different keys for the same message.
Also, I'm going to set this keys as the same name of the nodes, which brings a way easier to work it.

## Calling the "set_language" function
We need to call the set_language (which I made at the base project) for each button clicked signal. I'm going to do this way:
*for the portuguese language's button:*
`set_language("pt")`

*and the english:*
`set_language("en")`

I'm using the lang_prefix as a string because we're using this language prefixes at our files (**en-texts.json**, for example), and it'll make easier to manage our files on the function.

## Parsing JSON Files with Godot
Now we start working at our *set_language()* function!
In Godot, we need to use a built-in function using the File, one of the Godot's Objects, which is used to manage file reading and writing. We can create a variable to our file like this:
`var file = File.new() # Makes our "new file"
`

Then, we have to Open our file, and for this we'll concatenate the lang_prefix with the path. 
*Observation: My **.json** files are located at "Resources/" folder that I made, you need to set the code bellow according with your own file's path.*
`file.open("res://Resources/" + lang_prefix + "-texts.json", file.READ) # We're openning the file and saying to the engine to read it, and not to write.`

You may notice that I've not used the str() to the lang_prefix, and this is because we already set it as a string (when we've used the quotation marks).

Done that, we can finally parse our info into a dictionary.
`var json = parse_json(file.get_as_text())`
This *get_as_text()* is a built-in function that returns the value as a text(string), and we're parsing to the json var directly from this function.

Remember the *localizable* group made before? Now we need to do a for that's going to change the object text for each localizable object.

{% highlight python linenos %}
for child in get_children():
	if child.is_in_group("localizable"):
		child.text = json[str(child.get_name())]
{% endhighlight %}

*Observations:*
1. `for child in get_children():` Considering that all the objects are childs of this manager
2. `if child.is_in_group("localizable"):` And are part of the "localizable" group
3. `child.text = json[str(child.get_name())]` Notice that here I'm using the Node name and turning into a string, which is equals the json's respective key.

Our localization system is already working. Now, we just need to use after this *for* a ``file.close()``, because we didn't need this processing anymore unless we set the language again.

Well, I think it's way better the *CSV* files. What do you think?

# Contact:
If you want to say something, you can e-mail me at lucascoelhodacosta@gmail.com

See ya!

# Bibliography

1. [Godot's "File" docs](http://docs.godotengine.org/en/3.0/classes/class_file.html)
2. [JSON.parse()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse_json)
3. [A brief overview of JSON](https://msdn.microsoft.com/en-us/library/hh923971(v=vs.85).aspx)
4. [What is JSON](https://developers.squarespace.com/what-is-json/)
5. [Serialization](https://en.wikipedia.org/wiki/Serialization)