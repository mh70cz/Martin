import turtle

# Set up the turtle screen
screen = turtle.Screen()
screen.title("Finding Point Z with Turtle")
screen.setup (width=1200, height=1200 )

# Create a turtle to draw
t = turtle.Turtle()
t.speed(3)  # Moderate speed so the child can see the drawing

# ----------------------


# Define the two points x and y (you can change these coordinates)
x = (-100, 0)  # Point x at (-100, 0)
y = (100, 0)   # Point y at (100, 0)
z = (65, 100)
t.penup()
t.goto(x)
t.dot(8, "red")
t.write("  x", font=("Arial", 16, "bold"))

t.penup()
t.goto(y)
t.dot(8, "red")
t.write("  y", font=("Arial", 16, "bold"))

t.penup()
t.goto(z)
t.dot(8, "red")
t.write("  z", font=("Arial", 16, "bold"))


t.pencolor("green")
t.goto(x)
t.pendown()
t.goto(y)
t.pencolor("blue")
t.goto(z)
t.pencolor("yellow")
t.goto(x)



















# ----------------------

t.hideturtle()

#Keep the window open until clicked
screen.exitonclick()