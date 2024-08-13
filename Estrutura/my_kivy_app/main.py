from kivy.app import App
from kivy.uix.screenmanager import ScreenManager
from kivy.lang import Builder
from myapp.views.home_screen import HomeScreen
from myapp.views.settings_screen import SettingsScreen

# Carregando o arquivo .kv
Builder.load_file('myapp.kv')

class MyScreenManager(ScreenManager):
    pass

class MyApp(App):
    def build(self):
        sm = MyScreenManager()
        sm.add_widget(HomeScreen(name='home'))
        sm.add_widget(SettingsScreen(name='settings'))
        return sm

if __name__ == '__main__':
    MyApp().run()
