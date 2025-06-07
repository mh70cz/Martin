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
# Choose a radius (this is the distance from each center to any point on its circle)
radius = 150 



# Step 1: Draw point x and label it
t.penup()
t.goto(x)
t.dot(8, "red")
t.write("  x", font=("Arial", 16, "bold"))


# Step 2: Draw point y and label it
t.penup()
t.goto(y)
t.dot(8, "red")
t.write("  y", font=("Arial", 16, "bold"))




# Step 3: Draw the line connecting x and y
t.goto(x)
t.pendown()
t.goto(y)
t.penup()


# Step 4: Draw the circle centered at x
# (turtle.circle draws a circle to the left of the current position, so we move to the bottom of the circle)
t.goto(x[0], x[1] - radius)
t.pendown()
t.circle(radius)
t.penup()






# Step 5: Draw the circle centered at y
t.goto(y[0], y[1] - radius)
t.pendown()
t.circle(radius)
t.penup()







# ----------------------

t.hideturtle()

#Keep the window open until clicked
screen.exitonclick()