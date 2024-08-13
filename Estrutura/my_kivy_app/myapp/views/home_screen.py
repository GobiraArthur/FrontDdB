from kivy.uix.screenmanager import Screen
from myapp.controllers.home_controller import HomeController

class HomeScreen(Screen):
    def __init__(self, **kwargs):
        super().__init__(**kwargs)
        self.controller = HomeController(self)
