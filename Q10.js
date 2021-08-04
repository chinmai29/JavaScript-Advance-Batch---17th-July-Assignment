function Hero(name, level) {
    name = name;
    level = level;
}

/*No, this constructor function is not correct because 'this' keyword will be used if we want name and level to be
referred to a function itself.
i.e., this.name = name 
      this.level = level
*/