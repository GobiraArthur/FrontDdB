from kivy.uix.screenmanager import Screen
from myapp.controllers.settings_controller import SettingsController

class SettingsScreen(Screen):
    def __init__(self, **kwargs):
        super().__init__(**kwargs)
        self.controller = SettingsController(self)
