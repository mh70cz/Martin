import turtle

# Set up the turtle screen
screen = turtle.Screen()
screen.title("Finding Point Z with Turtle")
screen.setup (width=1200, height=1200 )

t = turtle.Turtle()

positions = [(0,0)]
y_offset = 400

num_sides = 12
inner_angle = ((num_sides - 2) * 180)/num_sides

# Draw a hexagon
for _ in range(num_sides):
    
    t.forward(100)  # Length of each side
    t.right(180 - inner_angle)     # Turn 60 degrees for a hexagon

    positions.append(t.position())

t.penup()
t.pencolor("green")
t.goto(0,y_offset)
t.pendown()
for p in positions:
    x = p[0]
    y= p[1] + y_offset
    t.goto(x,y)



# Keep the window open until it's manually closed
turtle.done()

positions_r = [(round(p[0]), round(p[1])) for p in positions]

print(positions_r )