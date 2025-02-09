from turtle import Turtle
from random import random

t = Turtle()
# ---


colors = ["red", "blue", "yellow", "lime", "orange"]

for i in range(5):
    t.teleport(i*20,i*50)
    t.color("black", colors[i])
    t.begin_fill()
    
    for j in range (2):
        t.forward(100) 
        t.left(90)
        t.forward(50) 
        t.left(90)
    
    t.end_fill()


#----
t.screen.mainloop()

