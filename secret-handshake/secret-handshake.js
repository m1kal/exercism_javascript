
export function secretHandshake(input){
  if (isNaN(input)) throw new Error("Handshake must be a number");
  var action=[];
  if (input & 1) action.push("wink");
  if (input & 2) action.push("double blink");
  if (input & 4) action.push("close your eyes");
  if (input & 8) action.push("jump");
  if (input & 16) action = action.reverse();
  return action;
};

