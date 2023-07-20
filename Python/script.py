import serial

PORT="/dev/ttyACM0"


serport = serial.Serial()
serport.baudrate = 115200
serport.port = "/dev/ttyACM0"
print(serport.name)
serport.open()
print(serport.is_open)

line = serport.readline(30);
print(line)	
	
