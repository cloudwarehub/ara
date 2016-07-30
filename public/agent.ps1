function SendData($Text='Sample Text', $Ip = "127.0.0.1" $Port=2500) {
	$addr = [system.net.IPAddress]::Parse($Ip);
    $endpoint = New-Object System.Net.IPEndPoint($addr, $Port)
    $udpclient = New-Object System.Net.Sockets.UdpClient
    $bytes = [Text.Encoding]::ASCII.GetBytes($Text)
    $bytesSent = $udpclient.Send($bytes,$bytes.length,$endpoint)
    $udpclient.Close()
}
while (1) {
    SendData
    start-sleep -seconds 5
}