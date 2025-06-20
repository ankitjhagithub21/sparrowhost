import os

directory = input("Enter the directory path: ")

try:
    #List only files
    entries = os.listdir(directory)
    files = []

    for entry in entries:
        if os.path.isfile(os.path.join(directory,entry)):
            files.append(entry)
    

    if files:
        print("Files in directory")

        for file in files:
            print(file)

    else:
        print("No file found in the directory.")

except FileNotFoundError:
    print(f"No file found in the directory")
except PermissionError:
    print(f"Permission denied to access the directory")
except Exception as e:
    print(f"An error occurred {e}")