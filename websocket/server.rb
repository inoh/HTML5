#coding:utf-8
require 'em-websocket'

Process.daemon(nochdir=true) if ARGV[0] == "-D"
connections = Array.new

EventMachine::WebSocket.start(:host => "0.0.0.0", :port => 51234) do |ws|
  ws.onopen {
    connections.push(ws)
  }
  ws.onmessage { |msg|
    ws.send msg
    connections.each {|con| con.send(msg) unless con == ws}
  }
  ws.onclose {
    connections.delete(ws)
  }
end
