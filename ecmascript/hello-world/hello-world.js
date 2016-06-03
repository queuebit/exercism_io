class HelloWorld {
  hello(name) {
    if (name !== undefined)
      name = name.slice(0,1).toUpperCase() + name.slice(1)
    else
      name = "World"
    return "Hello, " + name + "!"
  }
}

export default HelloWorld;
