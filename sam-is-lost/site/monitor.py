from lxml import html
import requests

page = requests.get('https://sam-is-lost-hfr8c.ondigitalocean.app/')
tree = html.fromstring(page.content)


