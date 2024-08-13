class SettingsController:
    def __init__(self, view):
        self.view = view

    def go_to_home(self):
        self.view.manager.current = 'home'
