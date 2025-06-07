import turtle

# Set up the turtle screen
screen = turtle.Screen()
screen.title("Finding Point Z with Turtle")
screen.setup(width=1200, height=1200)

t = turtle.Turtle()
# ----------------------


points = [
    (0, 0),
    (100, 0),
    (187, -50),
    (237, -137),
    (237, -237),
    (187, -323),
    (100, -373),
    (0, -373),
    (-87, -323),
    (-137, -237),
    (-137, -137),
    (-87, -50),
]

# Draw points
t.penup()
for p in points:
    x= p[0]
    y=p[1]
    t.goto(x,y)
    t.dot(8, "red")


#
first_point = points[0]
last_point  = first_point

t.penup()
t.pencolor("green")


# draw 12-gon
t.goto(first_point)
t.pendown()

for p in points:
    t.goto(p)

t.goto(last_point)    



# draw hexagon
t.penup()
t.pencolor("blue")
t.goto(first_point)
t.pendown()

for p in points[::2]:
    t.goto(p)
    
t.goto(last_point)       


# draw square
t.penup()
t.pencolor("sienna")
t.goto(first_point)
t.pendown()

for p in points[::3]:
    t.goto(p)
    
t.goto(last_point)    



# draw triangle
t.penup()
t.pencolor("violet")
t.goto(first_point)
t.pendown()

for p in points[::4]:
    t.goto(p)
    
t.goto(last_point)     

# ----------------------

t.hideturtle()

# Keep the window open until clicked
screen.exitonclick()
