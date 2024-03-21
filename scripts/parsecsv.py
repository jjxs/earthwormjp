import csv
import json

# Read the CSV file
csv_file = "test - class1.csv"

# Initialize an empty list to store the data
data_list = []

# Read the CSV file and extract relevant columns
with open(csv_file, newline='', encoding='utf-8') as file:
    reader = csv.reader(file)
    for row in reader:
        word, hirakana, chinese, sample = row
        data_list.append({
            "word": word,
            "hirakana": hirakana,
            "chinese": chinese,
            "sample": sample
        })

# Convert the list to JSON format
json_data = json.dumps(data_list, ensure_ascii=False, indent=4)

# Print the JSON data
print(json_data)