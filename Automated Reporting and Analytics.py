import pandas as pd

def generate_report(data):
    report = data.describe()  # Generate descriptive statistics
    report.to_csv('performance_report.csv')
