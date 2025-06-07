import turtle

# Set up the turtle screen
screen = turtle.Screen()
screen.title("Finding Point Z with Turtle")

# Create a turtle to draw
t = turtle.Turtle()
t.speed(3)  # Moderate speed so the child can see the drawing

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
t.goto(y)
t.dot(8, "red")
t.write("  y", font=("Arial", 16, "bold"))

# Step 3: Draw the line connecting x and y
t.goto(x)
t.pendown()
t.goto(y)
t.penup()

# Step 4:
# Write the radius value on the screen
t.goto(-screen.window_width()//2 + 20, screen.window_height()//2 - 40)
t.write(f"Radius, i.e. distance from point x, point y: r = {radius}", font=("Arial", 16, "bold"))

# Step 5: Draw the circle centered at x
# (turtle.circle draws a circle to the left of the current position, so we move to the bottom of the circle)
t.goto(x[0], x[1] - radius)
t.pendown()
t.circle(radius)
t.penup()

# Step 6: Draw the circle centered at y
t.goto(y[0], y[1] - radius)
t.pendown()
t.circle(radius)
t.penup()

# Step 7: Compute the intersection point of the two circles.
# For two circles with equal radius, the intersection points lie on the perpendicular bisector of the segment x-y.

# Compute the distance d between x and y
dx = y[0] - x[0]
dy = y[1] - x[1]
d = (dx**2 + dy**2)**0.5

# Compute the midpoint between x and y
midpoint = ((x[0] + y[0]) / 2, (x[1] + y[1]) / 2)

# The distance from the midpoint to either intersection is:
h = (radius**2 - (d/2)**2)**0.5

# Calculate the offset components to get the intersection points.
# (These formulas come from the circle intersection formulas.)
offset_x = -dy * (h / d)
offset_y = dx * (h / d)

# There are two intersection points:
p1 = (midpoint[0] + offset_x, midpoint[1] + offset_y)
p2 = (midpoint[0] - offset_x, midpoint[1] - offset_y)

# We want the intersection point that is BELOW the line connecting x and y.
# (i.e. the one with the lower y-coordinate)
if p1[1] < p2[1]:
    z = p1
else:
    z = p2

# Step 8: Draw and label the intersection point z
t.goto(z)
t.dot(8, "blue")
t.write("  z", font=("Arial", 16, "bold"))

# Step 9: Draw lines from x to z and from y to z to show the radius distance.
# These lines illustrate that the distance from each center to z equals the chosen radius.
t.color("green")

# Draw from x to z
t.goto(x)
t.pendown()
t.goto(z)
t.penup()
# Label the segment with "r" (for radius)
mid_xz = ((x[0] + z[0]) / 2, (x[1] + z[1]) / 2)
t.goto(mid_xz)
t.write(" r", font=("Arial", 16, "bold"))

# Draw from y to z
t.goto(y)
t.pendown()
t.goto(z)
t.penup()
mid_yz = ((y[0] + z[0]) / 2, (y[1] + z[1]) / 2)
t.goto(mid_yz)
t.write(" r", font=("Arial", 16, "bold"))
t.color("black")

t.hideturtle()

# Step 10: Keep the window open until clicked
screen.exitonclick()
