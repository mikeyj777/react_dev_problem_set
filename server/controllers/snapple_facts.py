import pandas as pd

def get_snapple_fact():
  df = pd.read_csv('../data/snapple_facts.csv')
  random_fact = df.sample(n=1)
  return random_fact['fact'].values[0]


