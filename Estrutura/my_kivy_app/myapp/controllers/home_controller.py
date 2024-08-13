class HomeController:
    def __init__(self, view):
        self.view = view

    def go_to_settings(self):
        self.view.manager.current = 'settings'
