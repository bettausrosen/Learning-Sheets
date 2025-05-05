# Python Guide for Scripting & Application Development
# Covers: Syntax, Functions, OOP, and Popular Libraries

# 1. Basic Types
is_done = False
decimal = 6
color = "blue"
my_list = [1, 2, 3]
my_tuple = ("hello", 10)  # Immutable

# 2. Functions
def addition(x, y):
    """Adds two numbers together.
    
    Args:
        x (int/float): First number
        y (int/float): Second number
        
    Returns:
        int/float: Sum of x and y
    """
    return x + y

def greet(name):
    """Prints a greeting."""
    print(f"Hello, {name}")

def throw_error(message):
    """Raises an error with custom message."""
    raise ValueError(message)

# 3. Classes
class Person:
    def __init__(self, name, age):
        self.name = name
        self._age = age  # Convention for "protected"
    
    def greet(self):
        """Returns a greeting string."""
        return f"Hi, I'm {self.name}"
    
    @property
    def age(self):
        """Getter for age."""
        return self._age
    
    @age.setter
    def age(self, value):
        """Setter for age with validation."""
        if value < 0:
            raise ValueError("Age cannot be negative")
        self._age = value

# 4. Using the class
p = Person("Alice", 25)
print(p.greet())

# 5. Collections
names = ["Alice", "Bob", "Charlie"]
ages = {"Alice": 25, "Bob": 30}

# 6. List comprehensions
squares = [x**2 for x in range(10)]

# 7. Error handling
try:
    throw_error("Test error")
except ValueError as e:
    print(f"Caught error: {e}")

# 8. File I/O
with open("file.txt", "w") as f:
    f.write("Hello Python")

# 9. Popular libraries
# - numpy/pandas: Data analysis
# - flask/django: Web development
# - requests: HTTP requests
# - pytest: Testing

# 10. Type hints (Python 3.5+)
from typing import List, Dict, Optional

def typed_function(name: str, age: Optional[int] = None) -> str:
    return f"{name} is {age if age else 'unknown'} years old"

# Additional Notes:
# - Python is dynamically typed but supports type hints
# - Used for scripting, web backends, data science, automation
# - Run with python explanation.py
# - Virtual environments recommended (python -m venv venv)