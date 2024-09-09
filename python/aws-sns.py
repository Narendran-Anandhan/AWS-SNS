import boto3

#  aws_access_key_id='--',
#  aws_secret_access_key='--',
# Initialize a session using Amazon SNS
sns = boto3.client('sns', 
                   
                   region_name='')  # Change region_name as needed

# Define the message and the phone number
message = "Hello, HBD"
phone_number = "+91656565656"  # Replace with the recipient's phone number

# Send the SMS message
response = sns.publish(
    PhoneNumber=phone_number,
    Message=message
)

# Print the response
print("Message ID:", response['MessageId'])
