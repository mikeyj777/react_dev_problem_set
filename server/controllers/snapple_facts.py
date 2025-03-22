import pandas as pd
from flask import jsonify

from tables.tables import Tables

def get_snapple_fact():
  df = pd.read_csv(Tables.SNAPPLE_FACTS)
  random_fact = df.sample(n=1)
  resp = jsonify({
    'status': 'success',
    'result': random_fact['fact'].values[0]
  }), 200
  return resp


